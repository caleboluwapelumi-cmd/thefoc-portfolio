import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

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
      <body
        className={`${spaceGrotesk.className} ${spaceGrotesk.variable} ${inter.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
