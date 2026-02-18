import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | TheFOC",
    description: "Get in touch to discuss your branding project.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
