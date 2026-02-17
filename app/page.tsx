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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={`${styles.hero} ${styles.fadeIn}`} id="hero">
        <h1 className={styles.heroTitle}>{hero.name}</h1>
        <p className={styles.heroSubtitle}>{hero.title}</p>
        <p className={styles.heroTagline}>{hero.tagline}</p>
      </section>

      {/* About */}
      <section className={styles.about} id="about">
        <div className={styles.aboutInner}>
          <p className={styles.sectionLabel}>{about.label}</p>
          <div className={styles.bioText}>
            {about.bio.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
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
    </>
  );
}
