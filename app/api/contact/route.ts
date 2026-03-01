import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

// ─── Types ───────────────────────────────────────────────────────────────────

interface ContactFormData {
    fullName: string;
    email: string;
    companyName: string;
    websiteLinks?: string;
    projectScope: string | string[];
    flyerCount?: string;
    businessGoals?: string;
    projectDescription: string;
    budget: string;
    launchDate: string;
    referralSource?: string;
    otherReferral?: string;
}

// ─── Auth helper ─────────────────────────────────────────────────────────────

function getSheetsClient() {
    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const rawKey = process.env.GOOGLE_PRIVATE_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!email || !rawKey || !sheetId) {
        throw new Error(
            "Missing required environment variables: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID"
        );
    }

    // Replace escaped newlines that may come from .env files
    const privateKey = rawKey.replace(/\\n/g, "\n");

    const auth = new google.auth.JWT({
        email,
        key: privateKey,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    return { sheets: google.sheets({ version: "v4", auth }), sheetId };
}

// ─── CORS headers ────────────────────────────────────────────────────────────

const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "https://thefoc.co.uk", // production domain
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
};

// ─── Route handlers ──────────────────────────────────────────────────────────

// Handle preflight requests
export async function OPTIONS() {
    return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

export async function POST(req: NextRequest) {
    try {
        // Parse request body
        let body: ContactFormData;
        try {
            body = await req.json();
        } catch {
            return NextResponse.json(
                { success: false, message: "Invalid JSON in request body." },
                { status: 400, headers: CORS_HEADERS }
            );
        }

        const {
            fullName,
            email,
            companyName,
            websiteLinks,
            projectScope,
            flyerCount,
            businessGoals,
            projectDescription,
            budget,
            launchDate,
            referralSource,
            otherReferral,
        } = body;

        // ── Validation ────────────────────────────────────────────────────────
        const requiredFields: Record<string, string | string[] | undefined> = {
            fullName,
            email,
            companyName,
            projectScope,
            projectDescription,
            budget,
            launchDate,
        };

        const missingFields = Object.entries(requiredFields)
            .filter(([, v]) => !v || (Array.isArray(v) && v.length === 0))
            .map(([k]) => k);

        if (missingFields.length > 0) {
            return NextResponse.json(
                {
                    success: false,
                    message: `Missing required fields: ${missingFields.join(", ")}`,
                },
                { status: 400, headers: CORS_HEADERS }
            );
        }

        // Basic email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: "Invalid email address." },
                { status: 400, headers: CORS_HEADERS }
            );
        }

        // ── Build sheet row ───────────────────────────────────────────────────
        const timestamp = new Date().toISOString();

        const scopeValue = Array.isArray(projectScope)
            ? projectScope.join(", ")
            : projectScope;

        const row = [
            timestamp,           // A – Timestamp
            fullName,            // B – Full Name
            email,               // C – Email
            companyName,         // D – Company Name
            websiteLinks ?? "",  // E – Website Links
            scopeValue,          // F – Project Scope
            flyerCount ?? "",    // G – Flyer Count
            businessGoals ?? "", // H – Business Goals
            projectDescription,  // I – Project Description
            budget,              // J – Budget
            launchDate,          // K – Launch Date
            // L – Referral Source (append free-text when "Other" was chosen)
            referralSource === "Other" && otherReferral
                ? `Other – ${otherReferral}`
                : (referralSource ?? ""),
        ];

        // ── Append to Google Sheet ────────────────────────────────────────────
        const { sheets, sheetId } = getSheetsClient();

        await sheets.spreadsheets.values.append({
            spreadsheetId: sheetId,
            range: "Sheet1!A:L",
            valueInputOption: "USER_ENTERED",
            requestBody: { values: [row] },
        });

        return NextResponse.json(
            { success: true, message: "Form submitted successfully." },
            { status: 200, headers: CORS_HEADERS }
        );
    } catch (error) {
        console.error("[contact/route] Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "An unexpected error occurred. Please try again later.",
            },
            { status: 500, headers: CORS_HEADERS }
        );
    }
}
