import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "TheFOC | Brand Identity Specialist",
  description:
    "Creative designer turned brand identity specialist. Helping brands stand out and scale with purpose through strategic branding and compelling design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}