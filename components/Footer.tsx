import styles from "./Footer.module.css";
import contentData from "@/src/data/content.json";

interface SocialLink {
    name: string;
    url: string;
}

interface FooterContent {
    brand: string;
    tagline: string;
    social: SocialLink[];
    copyright: string;
}

const footer: FooterContent = contentData.footer;

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                {/* Brand */}
                <div className={styles.brand}>
                    <span className={styles.logo}>{footer.brand}</span>
                    <span className={styles.tagline}>{footer.tagline}</span>
                </div>

                {/* Social */}
                <div className={styles.social}>
                    <span className={styles.socialLabel}>Connect</span>
                    <div className={styles.socialLinks}>
                        {footer.social.map((s) => (
                            <a
                                key={s.name}
                                href={s.url}
                                className={styles.socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {s.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <p className={styles.copyright}>{footer.copyright}</p>
            </div>
        </footer>
    );
}
