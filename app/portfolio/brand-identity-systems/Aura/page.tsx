import type { Metadata } from "next";
import styles from "../BrandDetailPage.module.css";
import BrandGallery from "@/components/BrandGallery";

export const metadata: Metadata = {
    title: "Aura | Brand Identity Systems | TheFOC",
    description:
        "A refined brand identity system for Aura — balancing elegance with bold presence across every touchpoint.",
};

const images = Array.from({ length: 21 }, (_, i) =>
    `/portfolio/brand-identity-systems/aura/Artboard ${i + 1}.png`
);

export default function AuraPage() {
    return (
        <main className={styles.page} style={{ "--accent": "#00e4ff" } as React.CSSProperties}>
            {/* ── HERO ── */}
            <section className={styles.hero}>
                <div className={`${styles.container} ${styles.heroContent}`}>
                    <nav className={styles.breadcrumb}>
                        <a href="/" className={styles.breadcrumbLink}>Home</a>
                        <span className={styles.breadcrumbSep}>›</span>
                        <a href="/portfolio" className={styles.breadcrumbLink}>Portfolio</a>
                        <span className={styles.breadcrumbSep}>›</span>
                        <a href="/portfolio/brand-identity-systems" className={styles.breadcrumbLink}>Brand Identity Systems</a>
                        <span className={styles.breadcrumbSep}>›</span>
                        <span className={styles.breadcrumbCurrent}>Aura</span>
                    </nav>

                    <h1 className={styles.heroTitle}>Aura</h1>
                    <p className={styles.heroTagline}>
                        Timeless elegance meets modern sophistication — a brand identity built to captivate.
                    </p>
                </div>
            </section>

            {/* ── BRIEF ── */}
            <section className={styles.brief}>
                <div className={styles.container}>
                    <span className={styles.briefLabel} style={{ color: "#00e4ff" }}>
                        About the Brand
                    </span>
                    <p className={styles.briefText}>
                        Aura is a premium lifestyle brand that marries understated luxury with contemporary design.
                        We crafted a complete visual identity system — from a distinctive logomark and refined colour
                        palette to custom typography pairings and comprehensive brand guidelines — ensuring every
                        touchpoint communicates the same effortless sophistication.
                    </p>
                </div>
            </section>

            {/* ── GALLERY ── */}
            <section className={styles.gallery}>
                <div className={styles.container}>
                    <span className={styles.galleryLabel} style={{ color: "#00e4ff" }}>
                        Brand Assets
                    </span>
                    <h2 className={styles.galleryHeading}>Complete Identity System</h2>
                    <BrandGallery images={images} brandName="Aura" />
                </div>
            </section>

            {/* ── BACK ── */}
            <section className={styles.backSection}>
                <a href="/portfolio/brand-identity-systems" className={styles.backLink}>
                    ← Back to Brand Identity Systems
                </a>
            </section>
        </main>
    );
}
