import type { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import projectDetails from "@/src/data/project-details.json";

interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

interface ResultStat {
    stat: string;
    label: string;
}

interface ProjectDetail {
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

const allProjects: ProjectDetail[] = projectDetails as ProjectDetail[];

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const project = allProjects.find((p) => p.slug === params.slug);
    if (!project) return { title: "Project Not Found | TheFOC" };
    return {
        title: `${project.title} | TheFOC Portfolio`,
        description: project.description,
    };
}

export default function ProjectDetailPage({ params }: Props) {
    const project = allProjects.find((p) => p.slug === params.slug);
    if (!project) notFound();

    const accent = project.accentColor;

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
                            <span
                                className={styles.overviewLabel}
                                style={{ color: accent }}
                            >
                                The Challenge
                            </span>
                            <h2 className={styles.overviewHeading}>
                                What we were up against
                            </h2>
                            <p className={styles.overviewText}>
                                {project.overview.challenge}
                            </p>
                        </div>
                        <div className={styles.overviewCol}>
                            <span
                                className={styles.overviewLabel}
                                style={{ color: accent }}
                            >
                                The Solution
                            </span>
                            <h2 className={styles.overviewHeading}>
                                How we solved it
                            </h2>
                            <p className={styles.overviewText}>
                                {project.overview.solution}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROCESS ──────────────────────────────────── */}
            <section className={styles.process}>
                <div className={styles.container}>
                    <p
                        className={styles.sectionLabel}
                        style={{ color: accent }}
                    >
                        Our Approach
                    </p>
                    <h2 className={styles.sectionHeading}>How we work</h2>

                    <div className={styles.processGrid}>
                        {project.process.map((step) => (
                            <div key={step.number} className={styles.processCard}>
                                <span
                                    className={styles.processNumber}
                                    style={{ color: accent }}
                                >
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
                    <p
                        className={styles.sectionLabel}
                        style={{ color: accent }}
                    >
                        Showcase
                    </p>
                    <h2 className={styles.sectionHeading}>Selected work</h2>

                    <div className={styles.galleryGrid}>
                        {project.gallery.map((src, i) => (
                            <div
                                key={i}
                                className={`${styles.galleryItem} ${i === 0 ? styles.galleryItemWide : ""
                                    }`}
                            >
                                <img
                                    src={src}
                                    alt={`${project.title} work sample ${i + 1}`}
                                    className={styles.galleryImg}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── RESULTS ──────────────────────────────────── */}
            <section className={styles.results}>
                <div className={styles.container}>
                    <p
                        className={styles.sectionLabel}
                        style={{ color: accent }}
                    >
                        Impact
                    </p>
                    <h2 className={styles.sectionHeading}>Key outcomes</h2>

                    <div className={styles.resultsGrid}>
                        {project.results.map((r, i) => (
                            <div key={i} className={styles.resultCard}>
                                <span
                                    className={styles.resultStat}
                                    style={{ color: accent }}
                                >
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
                    <p className={styles.ctaEyebrow}>Interested in similar work?</p>
                    <h2 className={styles.ctaHeading}>
                        Let&apos;s build something remarkable together.
                    </h2>
                    <p className={styles.ctaText}>
                        Every great brand starts with a conversation. Tell us about your project.
                    </p>
                    <a href="/contact" className={styles.ctaButton}>
                        Start a Conversation
                    </a>
                    <a href="/portfolio" className={styles.ctaSecondary}>
                        ← Back to Portfolio
                    </a>
                </div>
            </section>
        </main>
    );
}
