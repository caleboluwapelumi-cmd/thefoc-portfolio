"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import styles from "@/app/portfolio/brand-identity-systems/BrandDetailPage.module.css";

interface BrandGalleryProps {
    images: string[];
    brandName: string;
}

export default function BrandGallery({ images, brandName }: BrandGalleryProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imgLoaded, setImgLoaded] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setImgLoaded(false);
        setIsOpen(true);
    };

    const closeLightbox = useCallback(() => {
        setIsOpen(false);
    }, []);

    const goNext = useCallback(() => {
        setImgLoaded(false);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const goPrev = useCallback(() => {
        setImgLoaded(false);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };

        // Lock body scroll
        document.body.style.overflow = "hidden";

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, closeLightbox, goNext, goPrev]);

    // Touch swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.changedTouches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX;
        const delta = touchStartX.current - touchEndX.current;
        const threshold = 50;

        if (Math.abs(delta) > threshold) {
            if (delta > 0) goNext();
            else goPrev();
        }
    };

    // Click backdrop to close
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeLightbox();
        }
    };

    return (
        <>
            {/* Masonry grid */}
            <div className={styles.masonry}>
                {images.map((src, index) => (
                    <div
                        key={src}
                        className={styles.masonryItem}
                        onClick={() => openLightbox(index)}
                        role="button"
                        tabIndex={0}
                        aria-label={`View ${brandName} asset ${index + 1}`}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                openLightbox(index);
                            }
                        }}
                    >
                        <img
                            src={src}
                            alt={`${brandName} — Asset ${index + 1}`}
                            className={styles.masonryImg}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            <div
                className={`${styles.lightbox} ${isOpen ? styles.lightboxOpen : ""}`}
                onClick={handleBackdropClick}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                role="dialog"
                aria-modal="true"
                aria-label={`${brandName} image gallery`}
            >
                {/* Close button */}
                <button
                    className={styles.lightboxClose}
                    onClick={closeLightbox}
                    aria-label="Close lightbox"
                >
                    ✕
                </button>

                {/* Prev arrow */}
                <button
                    className={`${styles.lightboxArrow} ${styles.lightboxPrev}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        goPrev();
                    }}
                    aria-label="Previous image"
                >
                    ‹
                </button>

                {/* Image */}
                <div className={styles.lightboxImageWrap}>
                    {isOpen && (
                        <img
                            src={images[currentIndex]}
                            alt={`${brandName} — Asset ${currentIndex + 1}`}
                            className={`${styles.lightboxImg} ${imgLoaded ? styles.lightboxImgVisible : styles.lightboxImgEnter}`}
                            onLoad={() => setImgLoaded(true)}
                            draggable={false}
                        />
                    )}
                </div>

                {/* Next arrow */}
                <button
                    className={`${styles.lightboxArrow} ${styles.lightboxNext}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        goNext();
                    }}
                    aria-label="Next image"
                >
                    ›
                </button>

                {/* Counter */}
                <span className={styles.lightboxCounter}>
                    {currentIndex + 1} / {images.length}
                </span>
            </div>
        </>
    );
}
