import styles from "./ServicesSection.module.css";
import servicesData from "@/src/data/services.json";

interface Service {
    id: number;
    number: string;
    title: string;
    description: string;
}

const services: Service[] = servicesData;

export default function ServicesSection() {
    return (
        <section className={styles.section} id="services">
            <div className={styles.inner}>
                <p className={styles.sectionLabel}>Services</p>
                <div className={styles.grid}>
                    {services.map((service) => (
                        <article key={service.id} className={styles.card}>
                            <p className={styles.number}>{service.number}</p>
                            <h3 className={styles.title}>{service.title}</h3>
                            <p className={styles.description}>{service.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
