"use client";
import { useState, useEffect } from "react";
import type { Metadata } from "next";
import styles from "./page.module.css";

const brands = [
    {
        name: "Aura",
        slug: "Aura",
        image: "/portfolio/brand-identity-systems/aura/Artboard%201.png",
    },
    {
        name: "Pureglow",
        slug: "Pureglow",
        image: "/portfolio/brand-identity-systems/pureglow/Artboard%201.png",
    },
    {
        name: "Enjoy Food",
        slug: "enjoy-food",
        image: "/portfolio/brand-identity-systems/enjoy-food/Artboard%201.png",
    },
    {
        name: "Very Peng",
        slug: "very-peng",
        image: "/portfolio/brand-identity-systems/very-peng/Artboard%201.png",
    },
];

export default function BrandIdentitySystemsPage() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % brands.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className={styles.page} style={{ "--accent": "#00e4ff" } as React.CSSProperties}>
            {/* ── HERO ── */}
            <section className={styles.hero}>
                <div
                    className={styles.heroBg}
                    style={{
                        backgroundImage: `url(${brands[currentImage].image})`,
                        transition: 'opacity 1s ease-in-out',
                    }}
                />
                <div className={styles.heroOverlay} />

                <div className={styles.heroContent}>
                    <nav className={styles.breadcrumb}>
                        <a href="/" className={styles.breadcrumbLink}>Home</a>
                        <span className={styles.breadcrumbSep}>›</span>
                        <a href="/portfolio" className={styles.breadcrumbLink}>Portfolio</a>
                        <span className={styles.breadcrumbSep}>›</span>
                        <span className={styles.breadcrumbCurrent}>Brand Identity Systems</span>
                    </nav>

                    <span className={styles.categoryTag}>Branding</span>
                    <h1 className={styles.heroTitle}>Brand Identity Systems</h1>
                    <p className={styles.heroDesc}>
                        Complete brand systems — from logo design to comprehensive visual guidelines — that resonate across every touchpoint.
                    </p>
                </div>
            </section>

            {/* ── OVERVIEW ── */}
            <section className={styles.overview}>
                <div className={styles.container}>
                    <div className={styles.overviewGrid}>
                        <div className={styles.overviewCol}>
                            <span
                                className={styles.overviewLabel}
                                style={{ color: "#00e4ff" }}
                            >
                                The Challenge
                            </span>
                            <h2 className={styles.overviewHeading}>
                                Fragmented visual identities dilute brand trust
                            </h2>
                            <p className={styles.overviewText}>
                                Many businesses operate with fragmented visual
                                identities — mismatched logos, inconsistent
                                colours, and no clear guidelines — leading to a
                                brand that feels amateur and forgettable.
                            </p>
                        </div>
                        <div className={styles.overviewCol}>
                            <span
                                className={styles.overviewLabel}
                                style={{ color: "#00e4ff" }}
                            >
                                Our Approach
                            </span>
                            <h2 className={styles.overviewHeading}>
                                Cohesive systems built from the ground up
                            </h2>
                            <p className={styles.overviewText}>
                                We build cohesive brand identity systems from
                                the ground up: a distinctive logo, a refined
                                colour palette, purposeful typography, and a
                                comprehensive brand guide that empowers teams to
                                stay on-brand at every touchpoint.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SELECTED WORKS ── */}
            <section className={styles.selectedWorks}>
                <div className={styles.container}>
                    <span
                        className={styles.sectionLabel}
                        style={{ color: "#00e4ff" }}
                    >
                        Selected Works
                    </span>
                    <h2 className={styles.sectionHeading}>Brand Showcase</h2>

                    <div className={styles.brandGrid}>
                        {brands.map((brand) => (
                            <a
                                key={brand.slug}
                                href={`/portfolio/brand-identity-systems/${brand.slug}`}
                                className={styles.brandCard}
                                aria-label={`View ${brand.name} brand identity`}
                            >
                                <div className={styles.brandImageWrap}>
                                    <img
                                        src={brand.image}
                                        alt={`${brand.name} brand preview`}
                                        className={styles.brandImage}
                                        loading="lazy"
                                    />
                                </div>
                                <div className={styles.brandOverlay}>
                                    <span className={styles.brandName}>
                                        {brand.name}
                                        <span className={styles.brandArrow}>
                                            →
                                        </span>
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className={styles.cta}>
                <div className={styles.ctaInner}>
                    <p className={styles.ctaEyebrow}>Start a Project</p>
                    <h2 className={styles.ctaHeading}>
                        Ready to build a brand that commands attention?
                    </h2>
                    <p className={styles.ctaText}>
                        Let&apos;s create a cohesive identity system that sets
                        you apart from the competition and resonates with your
                        audience.
                    </p>
                    <a href="/contact" className={styles.ctaButton}>
                        Get in Touch
                    </a>
                    <a href="/portfolio" className={styles.ctaSecondary}>
                        ← Back to all projects
                    </a>
                </div>
            </section>
        </main>
    );
}
