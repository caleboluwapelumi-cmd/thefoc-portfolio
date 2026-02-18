import styles from "./ContactSection.module.css";
import contentData from "@/src/data/content.json";
import SocialIcons from "./SocialIcons";

interface ContactContent {
    label: string;
    headline: string;
    subtext: string;
    email: string;
    cta: string;
}

interface SocialLink {
    name: string;
    url: string;
}

const contact: ContactContent = contentData.contact;
const socials: SocialLink[] = contentData.footer.social;

export default function ContactSection() {
    return (
        <section className={styles.section} id="contact">
            <div className={styles.inner}>
                <p className={styles.sectionLabel}>{contact.label}</p>
                <h2 className={styles.headline}>{contact.headline}</h2>
                <p className={styles.subtext}>{contact.subtext}</p>
                <a href="/contact" className={styles.cta}>
                    {contact.cta}
                </a>

                {/* Social Icons */}
                <SocialIcons links={socials} className={styles.socialRow} />
            </div>
        </section>
    );
}
