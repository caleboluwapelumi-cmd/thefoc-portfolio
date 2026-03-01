"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import styles from "@/app/portfolio/[slug]/page.module.css";

export interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

export interface ResultStat {
    stat: string;
    label: string;
}

export interface ProjectDetailData {
    slug: string;
    title: string;
    category: string;
    accentColor: string;
    description: string;
    hero: { image: string };
    overview: { challenge: string; solution: string };
    process: ProcessStep[];
    gallery: string[];
    results: ResultStat[];
}

interface Props {
    project: ProjectDetailData;
}

export default function ProjectDetailLayout({ project }: Props) {
    const accent = project.accentColor;
    const [lightbox, setLightbox] = useState<number | null>(null);

    return (
        <main className={styles.page}>
            {/* ── HERO ─────────────────────────────────────── */}
            <section
                className={styles.hero}
                style={{ "--accent": accent } as React.CSSProperties}
            >
                <div
                    className={styles.heroBg}
                    style={{ backgroundImage: `url(${project.hero.image})` }}
                    aria-hidden="true"
                />
                <div className={styles.heroOverlay} aria-hidden="true" />

                <div className={styles.heroContent}>
                    {/* Breadcrumb */}
                    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                        <a href="/" className={styles.breadcrumbLink}>Home</a>
                        <span className={styles.breadcrumbSep} aria-hidden="true">→</span>
                        <a href="/portfolio" className={styles.breadcrumbLink}>Portfolio</a>
                        <span className={styles.breadcrumbSep} aria-hidden="true">→</span>
                        <span className={styles.breadcrumbCurrent}>{project.title}</span>
                    </nav>

                    <span className={styles.categoryTag}>{project.category}</span>
                    <h1 className={styles.heroTitle}>{project.title}</h1>
                    <p className={styles.heroDesc}>{project.description}</p>
                </div>
            </section>

            {/* ── OVERVIEW ─────────────────────────────────── */}
            <section className={styles.overview}>
                <div className={styles.container}>
                    <div className={styles.overviewGrid}>
                        <div className={styles.overviewCol}>
                            <span className={styles.overviewLabel} style={{ color: accent }}>
                                The Challenge
                            </span>
                            <h2 className={styles.overviewHeading}>What we were up against</h2>
                            <p className={styles.overviewText}>{project.overview.challenge}</p>
                        </div>
                        <div className={styles.overviewCol}>
                            <span className={styles.overviewLabel} style={{ color: accent }}>
                                The Solution
                            </span>
                            <h2 className={styles.overviewHeading}>How we solved it</h2>
                            <p className={styles.overviewText}>{project.overview.solution}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROCESS ──────────────────────────────────── */}
            <section className={styles.process}>
                <div className={styles.container}>
                    <p className={styles.sectionLabel} style={{ color: accent }}>
                        Our Approach
                    </p>
                    <h2 className={styles.sectionHeading}>How we work</h2>

                    <div className={styles.processGrid}>
                        {project.process.map((step) => (
                            <div key={step.number} className={styles.processCard}>
                                <span className={styles.processNumber} style={{ color: accent }}>
                                    {step.number}
                                </span>
                                <h3 className={styles.processTitle}>{step.title}</h3>
                                <p className={styles.processDesc}>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── GALLERY ──────────────────────────────────── */}
            <section className={styles.gallery}>
                <div className={styles.container}>
                    <p className={styles.sectionLabel} style={{ color: accent }}>
                        Showcase
                    </p>
                    <h2 className={styles.sectionHeading}>Selected work</h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                        gap: '1rem',
                        marginTop: '2rem'
                    }}>
                        {project.gallery.map((src, i) => (
                            <button
                                key={i}
                                onClick={() => setLightbox(i)}
                                style={{
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                    borderRadius: '0.5rem',
                                    border: 'none',
                                    padding: 0,
                                    background: 'transparent'
                                }}
                            >
                                <Image
                                    src={src}
                                    alt={`${project.title} work sample ${i + 1}`}
                                    width={800}
                                    height={600}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                        transition: 'transform 0.3s, opacity 0.3s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                        e.currentTarget.style.opacity = '0.8';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.opacity = '1';
                                    }}
                                    loading={i === 0 ? "eager" : "lazy"}
                                    quality={85}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            {/* ── RESULTS ──────────────────────────────────── */}
            <section className={styles.results}>
                <div className={styles.container}>
                    <p className={styles.sectionLabel} style={{ color: accent }}>
                        Impact
                    </p>
                    <h2 className={styles.sectionHeading}>Key outcomes</h2>

                    <div className={styles.resultsGrid}>
                        {project.results.map((r, i) => (
                            <div key={i} className={styles.resultCard}>
                                <span className={styles.resultStat} style={{ color: accent }}>
                                    {r.stat}
                                </span>
                                <span className={styles.resultLabel}>{r.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────── */}
            <section className={styles.cta}>
                <div className={styles.ctaInner}>
                    <p className={styles.ctaEyebrow}>Ready to start your project?</p>
                    <h2 className={styles.ctaHeading}>
                        Let&apos;s build something remarkable together.
                    </h2>
                    <p className={styles.ctaText}>
                        Every great brand starts with a conversation. Tell us about your vision.
                    </p>
                    <a href="/contact" className={styles.ctaButton}>
                        Get in Touch
                    </a>
                    <a href="/portfolio" className={styles.ctaSecondary}>
                        ← Back to Portfolio
                    </a>
                </div>
            </section>

            {lightbox !== null && <Lightbox images={project.gallery} initialIndex={lightbox} onClose={() => setLightbox(null)} />}
        </main >
    );
}
