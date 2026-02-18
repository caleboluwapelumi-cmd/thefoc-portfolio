"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <header
                className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
            >
                <div className={styles.inner}>
                    <a href="/" className={styles.logo} onClick={closeMenu}>
                        TheFOC
                    </a>

                    {/* Desktop Nav */}
                    <nav aria-label="Main navigation">
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

                    {/* Hamburger Button */}
                    <button
                        className={`${styles.menuButton} ${menuOpen ? styles.open : ""}`}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        <span className={styles.bar} />
                        <span className={styles.bar} />
                        <span className={styles.bar} />
                    </button>
                </div>
            </header>

            {/* Mobile Drawer */}
            <nav
                className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
                aria-label="Mobile navigation"
                aria-hidden={!menuOpen}
            >
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className={styles.drawerLink}
                        onClick={closeMenu}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </>
    );
}
