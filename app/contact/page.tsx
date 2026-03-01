"use client";

import { useState, FormEvent, ChangeEvent, useRef, useCallback } from "react";
import styles from "./page.module.css";
import contentData from "@/src/data/content.json";
import SocialIcons from "@/components/SocialIcons";

interface SocialLink {
    name: string;
    url: string;
}

const socials: SocialLink[] = contentData.footer.social;

const EMPTY_FORM = {
    fullName: "",
    email: "",
    companyName: "",
    websiteLinks: "",
    projectScope: [] as string[],
    flyerCount: "",
    businessGoals: "",
    projectDescription: "",
    budget: "",
    launchDate: "",
    referralSource: "",
    otherReferral: "",
};

const SCOPE_OPTIONS = [
    { id: "full-brand", label: "Full Brand Identity", icon: "✦" },
    { id: "logo-only", label: "Logo Design Only", icon: "◈" },
    { id: "brand-refresh", label: "Brand Refresh / Evolution", icon: "⟳" },
    { id: "guidelines", label: "Brand Guidelines / Style Guide", icon: "▦" },
    { id: "stationery", label: "Stationery & Marketing Collateral", icon: "◻" },
    { id: "flyer", label: "Flyer Designs", icon: "◇" },
];

const BUDGET_OPTIONS = [
    { value: "₦15,000 – ₦100,000", label: "Starter", sub: "₦15k – ₦100k" },
    { value: "₦200,000 – ₦400,000", label: "Growth", sub: "₦200k – ₦400k" },
    { value: "₦400,000 – ₦700,000", label: "Professional", sub: "₦400k – ₦700k" },
    { value: "₦700,000 – ₦1,000,000", label: "Premium", sub: "₦700k – ₦1M" },
    { value: "₦1,000,000+", label: "Enterprise", sub: "₦1M+" },
];

const STEPS = [
    { id: 1, label: "About You" },
    { id: 2, label: "The Project" },
    { id: 3, label: "Logistics" },
];

export default function ContactPage() {
    const [formData, setFormData] = useState(EMPTY_FORM);
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState<"next" | "prev">("next");
    const [animating, setAnimating] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckbox = (value: string) => {
        setFormData(prev => ({
            ...prev,
            projectScope: prev.projectScope.includes(value)
                ? prev.projectScope.filter(item => item !== value)
                : [...prev.projectScope, value],
        }));
    };

    const goTo = useCallback((next: number) => {
        if (animating) return;
        setDirection(next > step ? "next" : "prev");
        setAnimating(true);
        setTimeout(() => {
            setStep(next);
            setAnimating(false);
        }, 320);
    }, [animating, step]);

    const handleNext = () => {
        if (step === 1) {
            if (!formData.fullName || !formData.email || !formData.companyName) {
                setError("Please fill in all required fields.");
                return;
            }
        }
        if (step === 2 && formData.projectScope.length === 0) {
            setError("Please select at least one project scope.");
            return;
        }
        setError("");
        goTo(step + 1);
    };

    const handleBack = () => {
        setError("");
        goTo(step - 1);
    };

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!formData.budget || !formData.launchDate) {
            setError("Please fill in all required fields.");
            return;
        }
        setError("");
        setLoading(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!response.ok) throw new Error("Failed to submit form");
            setSubmitted(true);
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    const showFlyerCount = formData.projectScope.includes("Flyer Designs");
    const showBusinessGoals =
        formData.projectScope.includes("Full Brand Identity") ||
        formData.projectScope.includes("Brand Refresh / Evolution");

    // ── Success Screen ────────────────────────────────────────────
    if (submitted) {
        return (
            <main className={styles.page}>
                <Orbs />
                <div className={styles.successWrap}>
                    <div className={styles.successIcon}>
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="22" stroke="url(#g1)" strokeWidth="2" />
                            <path d="M14 24.5l7 7 13-14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <defs>
                                <linearGradient id="g1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#8d04e4" />
                                    <stop offset="1" stopColor="#00e4ff" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <p className={styles.successEyebrow}>Received</p>
                    <h1 className={styles.successHeading}>You&apos;re on my radar.</h1>
                    <p className={styles.successSub}>
                        Thanks for reaching out, {formData.fullName.split(" ")[0]}. I&apos;ll review your brief and
                        get back to you within <strong>24 hours</strong>.
                    </p>
                    <button className={styles.successBtn} onClick={() => { setSubmitted(false); setFormData(EMPTY_FORM); setStep(1); }}>
                        Submit another enquiry
                    </button>
                </div>
            </main>
        );
    }

    // ── Main Form ─────────────────────────────────────────────────
    return (
        <main className={styles.page}>
            <Orbs />

            <div className={styles.layout}>

                {/* ── Left Sidebar ─────────── */}
                <aside className={styles.sidebar}>
                    <p className={styles.eyebrow}>New Project Enquiry</p>
                    <h1 className={styles.mainHeading}>
                        Let&apos;s build<br />
                        <span className={styles.gradientText}>something</span><br />
                        remarkable.
                    </h1>
                    <p className={styles.sidebarSub}>
                        Fill out the brief and I&apos;ll get back<br />
                        to you within 24 hours.
                    </p>

                    {/* Step indicator */}
                    <nav className={styles.stepNav} aria-label="Form steps">
                        {STEPS.map(s => (
                            <div key={s.id} className={`${styles.stepItem} ${step === s.id ? styles.stepActive : ""} ${step > s.id ? styles.stepDone : ""}`}>
                                <span className={styles.stepDot}>
                                    {step > s.id ? (
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                            <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        <span>{s.id}</span>
                                    )}
                                </span>
                                <span className={styles.stepLabel}>{s.label}</span>
                                {s.id < STEPS.length && <span className={styles.stepLine} />}
                            </div>
                        ))}
                    </nav>

                    {/* Social */}
                    <div className={styles.sidebarSocial}>
                        <p className={styles.sidebarSocialLabel}>Or connect directly</p>
                        <SocialIcons links={socials} className={styles.socialLinks} />
                    </div>
                </aside>

                {/* ── Form Panel ───────────── */}
                <section className={styles.panel}>
                    <form ref={formRef} onSubmit={handleSubmit} noValidate>
                        <div
                            key={step}
                            className={`${styles.stepContent} ${animating ? (direction === "next" ? styles.exitLeft : styles.exitRight) : styles.enterActive}`}
                        >

                            {/* STEP 1 ── About You */}
                            {step === 1 && (
                                <>
                                    <StepHeader num="01" title="About You" sub="Let's start with the basics." />
                                    <div className={styles.fields}>
                                        <FloatField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} required />
                                        <FloatField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
                                        <FloatField label="Company / Project Name" name="companyName" value={formData.companyName} onChange={handleChange} required />
                                        <FloatField label="Website / Social Links (optional)" name="websiteLinks" value={formData.websiteLinks} onChange={handleChange} />
                                    </div>
                                </>
                            )}

                            {/* STEP 2 ── The Project */}
                            {step === 2 && (
                                <>
                                    <StepHeader num="02" title="The Project" sub="Tell me what you need." />
                                    <div className={styles.fields}>
                                        <div className={styles.fieldGroup}>
                                            <label className={styles.fieldLabel}>What are you looking for? <span className={styles.req}>*</span></label>
                                            <p className={styles.fieldHint}>Select all that apply</p>
                                            <div className={styles.scopeGrid}>
                                                {SCOPE_OPTIONS.map(opt => (
                                                    <button
                                                        type="button"
                                                        key={opt.id}
                                                        className={`${styles.scopeCard} ${formData.projectScope.includes(opt.label) ? styles.scopeCardActive : ""}`}
                                                        onClick={() => handleCheckbox(opt.label)}
                                                    >
                                                        <span className={styles.scopeIcon}>{opt.icon}</span>
                                                        <span className={styles.scopeLabel}>{opt.label}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {showFlyerCount && (
                                            <FloatField label="How many flyers do you need?" name="flyerCount" type="number" value={formData.flyerCount} onChange={handleChange} />
                                        )}

                                        {showBusinessGoals && (
                                            <div className={styles.fieldGroup}>
                                                <label htmlFor="businessGoals" className={styles.fieldLabel}>Business goals</label>
                                                <textarea
                                                    id="businessGoals"
                                                    name="businessGoals"
                                                    value={formData.businessGoals}
                                                    onChange={handleChange}
                                                    className={styles.textarea}
                                                    placeholder="What do you hope to achieve with this rebrand or new identity?"
                                                    rows={3}
                                                />
                                            </div>
                                        )}

                                        <div className={styles.fieldGroup}>
                                            <label htmlFor="projectDescription" className={styles.fieldLabel}>
                                                Project description <span className={styles.req}>*</span>
                                            </label>
                                            <textarea
                                                id="projectDescription"
                                                name="projectDescription"
                                                value={formData.projectDescription}
                                                onChange={handleChange}
                                                className={styles.textarea}
                                                placeholder="Tell me about your vision, target audience, and any specific requirements…"
                                                rows={4}
                                                required
                                            />
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* STEP 3 ── Logistics */}
                            {step === 3 && (
                                <>
                                    <StepHeader num="03" title="Logistics" sub="The finer details." />
                                    <div className={styles.fields}>
                                        <div className={styles.fieldGroup}>
                                            <label className={styles.fieldLabel}>Budget range <span className={styles.req}>*</span></label>
                                            <div className={styles.budgetGrid}>
                                                {BUDGET_OPTIONS.map(opt => (
                                                    <button
                                                        type="button"
                                                        key={opt.value}
                                                        className={`${styles.budgetCard} ${formData.budget === opt.value ? styles.budgetCardActive : ""}`}
                                                        onClick={() => setFormData(prev => ({ ...prev, budget: opt.value }))}
                                                    >
                                                        <span className={styles.budgetLabel}>{opt.label}</span>
                                                        <span className={styles.budgetSub}>{opt.sub}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <FloatField label="Desired Launch Date" name="launchDate" type="date" value={formData.launchDate} onChange={handleChange} required />

                                        <div className={styles.fieldGroup}>
                                            <label htmlFor="referralSource" className={styles.fieldLabel}>How did you hear about me?</label>
                                            <select
                                                id="referralSource"
                                                name="referralSource"
                                                value={formData.referralSource}
                                                onChange={handleChange}
                                                className={styles.select}
                                            >
                                                <option value="">Select an option</option>
                                                <option value="Instagram">Instagram</option>
                                                <option value="Referral">Referral</option>
                                                <option value="LinkedIn">LinkedIn</option>
                                                <option value="Twitter/X">Twitter / X</option>
                                                <option value="Behance">Behance</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            {formData.referralSource === "Other" && (
                                                <FloatField
                                                    label="Please tell us where you heard about us"
                                                    name="otherReferral"
                                                    value={formData.otherReferral}
                                                    onChange={handleChange}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Error */}
                            {error && <p className={styles.errorMsg} role="alert">{error}</p>}

                            {/* Navigation */}
                            <div className={styles.navRow}>
                                {step > 1 && (
                                    <button type="button" className={styles.backBtn} onClick={handleBack}>
                                        ← Back
                                    </button>
                                )}
                                <div className={styles.navSpacer} />
                                {step < 3 ? (
                                    <button type="button" className={styles.nextBtn} onClick={handleNext}>
                                        Continue <span className={styles.btnArrow}>→</span>
                                    </button>
                                ) : (
                                    <button type="submit" className={styles.submitBtn} disabled={loading}>
                                        {loading ? <span className={styles.spinner} /> : null}
                                        {loading ? "Sending…" : "Send my brief →"}
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
}

// ── Sub-components ────────────────────────────────────────────────

function Orbs() {
    return (
        <div className={styles.orbs} aria-hidden="true">
            <div className={styles.orb1} />
            <div className={styles.orb2} />
            <div className={styles.orb3} />
            <div className={styles.noiseTex} />
        </div>
    );
}

function StepHeader({ num, title, sub }: { num: string; title: string; sub: string }) {
    return (
        <div className={styles.stepHeader}>
            <span className={styles.stepNum}>{num}</span>
            <h2 className={styles.stepTitle}>{title}</h2>
            <p className={styles.stepSub}>{sub}</p>
        </div>
    );
}

interface FloatFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    required?: boolean;
}

function FloatField({ label, name, value, onChange, type = "text", required }: FloatFieldProps) {
    return (
        <div className={`${styles.floatWrap} ${value ? styles.floatFilled : ""}`}>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className={styles.floatInput}
                required={required}
                aria-label={label}
                placeholder=" "
            />
            <label htmlFor={name} className={styles.floatLabel}>
                {label}{required && <span className={styles.req}> *</span>}
            </label>
        </div>
    );
}