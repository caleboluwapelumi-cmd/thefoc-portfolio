import styles from "./ProjectsSection.module.css";
import projectsData from "@/src/data/projects.json";

interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    color: string;
    link: string;
}

const projects: Project[] = projectsData;

export default function ProjectsSection() {
    return (
        <section className={styles.section} id="work">
            <div style={{ maxWidth: 1400, margin: "0 auto" }}>
                <p className={styles.sectionLabel}>Selected Work</p>
            </div>

            <div className={styles.grid}>
                {projects.map((project) => (
                    <article key={project.id} className={styles.card}>
                        <div className={styles.imageContainer} style={{ backgroundColor: project.color }}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className={styles.image}
                            />
                        </div>
                        <h3 className={styles.title}>{project.title}</h3>
                        <p className={styles.description}>{project.description}</p>
                    </article>
                ))}
            </div>

            <div className={styles.viewAll}>
                <a href="/portfolio" className={styles.viewAllLink}>
                    View all projects <span className={styles.arrow}>→</span>
                </a>
            </div>
        </section>
    );
}
