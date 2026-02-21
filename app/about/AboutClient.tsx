"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./page.module.css";
import contentData from "@/src/data/content.json";

interface AboutContent {
    label: string;
    bio: string;
}

const about: AboutContent = contentData.about;
const ABOUT_IMAGE = "/Images/FOC-6.jpg";

export default function AboutClient() {
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const openLightbox = useCallback(() => setLightboxOpen(true), []);
    const closeLightbox = useCallback(() => setLightboxOpen(false), []);

    // Escape key closes lightbox
    useEffect(() => {
        if (!lightboxOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [lightboxOpen, closeLightbox]);

    // Lock body scroll while open
    useEffect(() => {
        document.body.style.overflow = lightboxOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [lightboxOpen]);

    return (
        <>
            <main className={styles.page} style={{
                background: 'linear-gradient(180deg, #0a0514 0%, #1a0f2e 40%, #0a0a0a 100%)'
            }}>
                <div className={styles.container}>
                    {/* Breadcrumb */}
                    <nav className={styles.breadcrumb}>
                        <a href="/" className={styles.breadcrumbLink}>Home</a>
                        <span className={styles.breadcrumbSep}>→</span>
                        <span className={styles.breadcrumbCurrent}>About</span>
                    </nav>

                    {/* Section Label */}
                    <p className={styles.sectionLabel}>{about.label}</p>

                    {/* Two-Column Layout */}
                    <div className={styles.grid}>
                        {/* Image Column */}
                        <div className={styles.imageCol}>
                            <button
                                className={styles.imageBtn}
                                onClick={openLightbox}
                                aria-label="View full image"
                                type="button"
                            >
                                <div className={styles.imageWrapper}>
                                    <img
                                        src="/images/FOC-6.jpg"
                                        alt="TheFOC"
                                        className={styles.image}
                                    />
                                </div>
                                <span className={styles.imageOverlay} aria-hidden="true">
                                    <span className={styles.imageOverlayIcon}>⊕</span>
                                </span>
                            </button>
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
                        <a href="/" className={styles.backAnchor}>← Back to Home</a>
                    </div>
                </div>
            </main>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div
                    className={styles.lightboxBackdrop}
                    onClick={closeLightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image lightbox"
                >
                    <button
                        className={styles.lightboxClose}
                        onClick={closeLightbox}
                        aria-label="Close lightbox"
                        type="button"
                    >
                        ×
                    </button>
                    <div
                        className={styles.lightboxContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={ABOUT_IMAGE}
                            alt="TheFOC — Brand Identity Specialist"
                            className={styles.lightboxImage}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
