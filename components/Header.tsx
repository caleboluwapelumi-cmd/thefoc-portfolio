"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const navItems = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
        >
            <div className={styles.inner}>
                <a href="#hero" className={styles.logo}>
                    TheFOC
                </a>

                {/* Desktop Nav */}
                <nav>
                    <ul className={styles.nav}>
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className={styles.navLink}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button className={styles.menuButton} aria-label="Open menu">
                    Menu
                </button>
            </div>
        </header>
    );
}
