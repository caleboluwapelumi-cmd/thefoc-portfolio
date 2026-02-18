import type { Metadata } from "next";
import styles from "./page.module.css";
import contentData from "@/src/data/content.json";

export const metadata: Metadata = {
    title: "About | TheFOC",
    description:
        "Learn about TheFOC — a creative designer turned brand identity specialist with a passion for helping brands stand out and scale with purpose.",
};

interface AboutContent {
    label: string;
    bio: string;
}

const about: AboutContent = contentData.about;

export default function AboutPage() {
    return (
        <main className={styles.page}>
            <div className={styles.container}>
                {/* Breadcrumb */}
                <nav className={styles.breadcrumb}>
                    <a href="/" className={styles.breadcrumbLink}>
                        Home
                    </a>
                    <span className={styles.breadcrumbSep}>→</span>
                    <span className={styles.breadcrumbCurrent}>About</span>
                </nav>

                {/* Section Label */}
                <p className={styles.sectionLabel}>{about.label}</p>

                {/* Two-Column Layout */}
                <div className={styles.grid}>
                    {/* Image Column */}

                    <div className={styles.imageCol}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="/FAB00367-Edit.jpg"
                                alt="TheFOC — Brand Identity Specialist"
                                className={styles.image}
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className={styles.textCol}>
                        <div className={styles.bioText}>
                            {about.bio.split("\n\n").map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Back Link */}
                <div className={styles.backLink}>
                    <a href="/" className={styles.backAnchor}>
                        ← Back to Home
                    </a>
                </div>
            </div>
        </main>
    );
}
