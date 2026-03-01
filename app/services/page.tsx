import type { Metadata } from "next";
import styles from "./page.module.css";
import servicesData from "@/src/data/services.json";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Services | TheFOC",
    description:
        "Comprehensive branding solutions tailored to your needs — brand identity development, strategic positioning, visual design, and creative direction.",
};

interface Service {
    id: number;
    number: string;
    title: string;
    description: string;
}

const services: Service[] = servicesData;

export default function ServicesPage() {
    return (
        <main className={styles.page}>
            <div style={{
                background: 'linear-gradient(180deg, #0a0514 0%, #1a0f2e 40%, #0a0a0a 100%)',
                paddingBottom: '4rem'
            }}>
                <div className={styles.container}>
                    {/* Page Header */}
                    <header className={styles.header}>
                        <h1 className={styles.heading}>Services</h1>
                        <p className={styles.intro}>
                            Comprehensive branding solutions tailored to your needs.
                        </p>
                    </header>

                    {/* Services List */}
                    <div className={styles.list}>
                        {services.map((service) => (
                            <article key={service.id} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.number}>{service.number}</span>
                                    <h2 className={styles.title}>{service.title}</h2>
                                </div>
                                <p className={styles.description}>{service.description}</p>
                                <div className={styles.divider} />
                            </article>
                        ))}
                    </div>
                </div>
            </div> {/* Close gradient wrapper - ADDED THIS */}

            {/* CTA Section — same as homepage */}
            <ContactSection />

            <Footer />
        </main>
    );
}