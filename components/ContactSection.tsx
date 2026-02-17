import styles from "./ContactSection.module.css";
import contentData from "@/src/data/content.json";

interface ContactContent {
    label: string;
    headline: string;
    subtext: string;
    email: string;
    cta: string;
}

const contact: ContactContent = contentData.contact;

export default function ContactSection() {
    return (
        <section className={styles.section} id="contact">
            <div className={styles.inner}>
                <p className={styles.sectionLabel}>{contact.label}</p>
                <h2 className={styles.headline}>{contact.headline}</h2>
                <p className={styles.subtext}>{contact.subtext}</p>
                <a href={`mailto:${contact.email}`} className={styles.cta}>
                    {contact.cta}
                </a>
            </div>
        </section>
    );
}
