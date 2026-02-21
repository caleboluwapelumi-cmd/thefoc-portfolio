import type { Metadata } from "next";
import styles from "../BrandDetailPage.module.css";
import BrandGallery from "@/components/BrandGallery";

export const metadata: Metadata = {
    title: "Pureglow | Brand Identity Systems | TheFOC",
    description:
        "A clean, radiant brand identity for Pureglow — built for clarity, trust, and standout shelf presence.",
};

const images = Array.from({ length: 20 }, (_, i) =>
    `/portfolio/brand-identity-systems/pureglow/Artboard ${i + 1}.png`
);

export default function PureglowPage() {
    return (
        <main className={styles.page} style={{ "--accent": "#00e4ff" } as React.CSSProperties}>
            {/* ── HERO ── */}
            <section className={styles.hero} style={{
                backgroundImage: 'url(/portfolio/brand-identity-systems/Pureglow/Artboard%201.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    zIndex: 1
                }} />
                <div className={`${styles.container} ${styles.heroContent}`} style={{ position: 'relative', zIndex: 2 }}>
                    <nav className={styles.breadcrumb}>
                        <a href="/" className={styles.breadcrumbLink}>Home</a>
                        <span className={styles.breadcrumbSep}>›</span>
                        <a href="/portfolio" className={styles.breadcrumbLink}>Portfolio</a>
                        <span className={styles.breadcrumbSep}>›</span>
                        <a href="/portfolio/brand-identity-systems" className={styles.breadcrumbLink}>Brand Identity Systems</a>
                        <span className={styles.breadcrumbSep}>›</span>
                        <span className={styles.breadcrumbCurrent}>Pureglow</span>
                    </nav>

                    <h1 className={styles.heroTitle}>Pureglow</h1>
                    <p className={styles.heroTagline}>
                        Pureglow is a skincaare and wellness brand rooted in transparency and natural beauty.    </p>
                </div>
            </section>


            {/* ── BRIEF ── */}
            <section className={styles.brief}>
                <div className={styles.container}>
                    <span className={styles.briefLabel} style={{ color: "#00e4ff" }}>
                        About the Brand
                    </span>
                    <p className={styles.briefText}>
                        Pureglow is a skincare and wellness brand rooted in transparency and natural beauty.
                        We developed a luminous, minimal identity system — featuring a soft yet distinctive logo,
                        an earthy-meets-modern colour palette, and packaging guidelines — that builds instant
                        trust while standing out in a crowded beauty market.
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
                    <BrandGallery images={images} brandName="Pureglow" />
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
