import type { Metadata } from "next";
import styles from "./page.module.css";
import projectsData from "@/src/data/projects.json";

export const metadata: Metadata = {
    title: "Portfolio | TheFOC",
    description:
        "Explore selected projects and case studies by TheFOC — brand identity systems, visual strategy, digital presence, and more.",
};

interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    slug: string;
    image: string;
    color: string;
    link: string;
}

const projects: Project[] = projectsData as Project[];

export default function PortfolioPage() {
    return (
        <main className={styles.page}>
            <div className={styles.container}>
                {/* Page Header */}
                <header className={styles.header}>
                    <h1 className={styles.heading}>Portfolio</h1>
                    <p className={styles.subheading}>
                        Selected projects and case studies
                    </p>
                </header>

                {/* Project Grid */}
                <div className={styles.grid}>
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={project.link}
                            className={styles.card}
                            aria-label={`View ${project.title} case study`}
                        >
                            {/* Image */}
                            <div className={styles.imageContainer}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={styles.image}
                                />
                                <div
                                    className={styles.imageOverlay}
                                    style={{ backgroundColor: project.color }}
                                />
                            </div>

                            {/* Content */}
                            <div className={styles.cardContent}>
                                <span className={styles.category}>{project.category}</span>
                                <h2 className={styles.title}>{project.title}</h2>
                                <p className={styles.description}>{project.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
}
