"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./page.module.css";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import contentData from "@/src/data/content.json";

interface HeroContent {
  name: string;
  title: string;
  tagline: string;
}

interface AboutContent {
  label: string;
  bio: string;
}

const hero: HeroContent = contentData.hero;
const about: AboutContent = contentData.about;

const ABOUT_IMAGE = "/FAB00367-Edit.jpg";

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = useCallback(() => setLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  // Escape key closes lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, closeLightbox]);

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero} id="hero">
        {/* Animated Particle Background */}
        <div className={styles.heroBackground} aria-hidden="true">
          {/* Mobile-visible particles (1–8) */}
          <div className={`${styles.particle} ${styles.p1}`} />
          <div className={`${styles.particle} ${styles.p2}`} />
          <div className={`${styles.particle} ${styles.p3}`} />
          <div className={`${styles.particle} ${styles.p4}`} />
          <div className={`${styles.particle} ${styles.p5}`} />
          <div className={`${styles.particle} ${styles.p6}`} />
          <div className={`${styles.particle} ${styles.p7}`} />
          <div className={`${styles.particle} ${styles.p8}`} />
          {/* Desktop-only particles (9–17) */}
          <div className={`${styles.particle} ${styles.p9}`} />
          <div className={`${styles.particle} ${styles.p10}`} />
          <div className={`${styles.particle} ${styles.p11}`} />
          <div className={`${styles.particle} ${styles.p12}`} />
          <div className={`${styles.particle} ${styles.p13}`} />
          <div className={`${styles.particle} ${styles.p14}`} />
          <div className={`${styles.particle} ${styles.p15}`} />
          <div className={`${styles.particle} ${styles.p16}`} />
          <div className={`${styles.particle} ${styles.p17}`} />
        </div>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{hero.name}</h1>
          <p className={styles.heroSubtitle}>{hero.title}</p>
          <p className={styles.heroTagline}>{hero.tagline}</p>
          <a href="/contact" className={styles.heroCta}>
            Start a Project
          </a>
        </div>
      </section>

      {/* About */}
      <section className={styles.about} id="about">
        <div className={styles.aboutInner}>
          <p className={styles.sectionLabel}>{about.label}</p>
          <div className={styles.aboutGrid}>
            {/* Image Column */}
            <div className={styles.aboutImageCol}>
              <button
                className={styles.aboutImageBtn}
                onClick={openLightbox}
                aria-label="View full image"
                type="button"
              >
                <img
                  src={ABOUT_IMAGE}
                  alt="TheFOC — Brand Identity Specialist"
                  className={styles.aboutImage}
                />
                <span className={styles.aboutImageOverlay} aria-hidden="true">
                  <span className={styles.aboutImageOverlayIcon}>⊕</span>
                </span>
              </button>
            </div>

            {/* Text Column */}
            <div className={styles.aboutTextCol}>
              <div className={styles.bioText}>
                {about.bio.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <ProjectsSection />

      {/* Services */}
      <ServicesSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />

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
