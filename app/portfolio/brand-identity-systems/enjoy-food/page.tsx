import type { Metadata } from "next";
import styles from "../BrandDetailPage.module.css";
import BrandGallery from "@/components/BrandGallery";

export const metadata: Metadata = {
    title: "Enjoy Food | Brand Identity Systems | TheFOC",
    description:
        "A vibrant, appetite-driven brand identity for Enjoy Food — designed to make every dish unforgettable.",
};

const images = Array.from({ length: 27 }, (_, i) =>
    `/portfolio/brand-identity-systems/enjoy-food/Artboard ${i + 1}.png`
);

export default function EnjoyFoodPage() {
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
                        <span className={styles.breadcrumbCurrent}>Enjoy Food</span>
                    </nav>

                    <h1 className={styles.heroTitle}>Enjoy Food</h1>
                    <p className={styles.heroTagline}>
                        Flavourful branding that whets the appetite — bold, warm, and unmistakably delicious.
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
                        Enjoy Food is a food-service brand celebrating the joy of great meals shared with good people.
                        We built an energetic identity system — featuring warm, appetite-stimulating colours, a playful
                        yet professional logomark, menu design templates, and social media kits — that makes every
                        customer touchpoint feel inviting and memorable.
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
                    <BrandGallery images={images} brandName="Enjoy Food" />
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
