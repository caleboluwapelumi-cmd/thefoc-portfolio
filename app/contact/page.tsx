"use client";

import { useState, FormEvent } from "react";
import styles from "./page.module.css";
import contentData from "@/src/data/content.json";
import SocialIcons from "@/components/SocialIcons";

interface SocialLink {
    name: string;
    url: string;
}

const socials: SocialLink[] = contentData.footer.social;

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitted(true);
        alert("Thank you! I'll be in touch soon.");
    }

    return (
        <main className={styles.page}>
            <div className={styles.container}>
                {/* Page Header */}
                <header className={styles.header}>
                    <h1 className={styles.heading}>Let&apos;s Work Together</h1>
                    <p className={styles.subheading}>
                        Ready to elevate your brand? Fill out the form below and I&apos;ll
                        get back to you within 24 hours.
                    </p>
                </header>

                {/* Contact Form */}
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                    {/* Name */}
                    <div className={styles.field}>
                        <label htmlFor="name" className={styles.label}>
                            Name <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className={styles.input}
                            placeholder="Your name"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className={styles.field}>
                        <label htmlFor="email" className={styles.label}>
                            Email <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className={styles.input}
                            placeholder="your@email.com"
                            required
                        />
                    </div>

                    {/* Company / Brand Name */}
                    <div className={styles.field}>
                        <label htmlFor="company" className={styles.label}>
                            Company / Brand Name
                        </label>
                        <input
                            id="company"
                            name="company"
                            type="text"
                            className={styles.input}
                            placeholder="Your company or brand"
                        />
                    </div>

                    {/* Project Type */}
                    <div className={styles.field}>
                        <label htmlFor="projectType" className={styles.label}>
                            Project Type <span className={styles.required}>*</span>
                        </label>
                        <select
                            id="projectType"
                            name="projectType"
                            className={styles.select}
                            required
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select a project type
                            </option>
                            <option value="Brand Identity">Brand Identity</option>
                            <option value="Brand Strategy">Brand Strategy</option>
                            <option value="Visual Design">Visual Design</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Project Details */}
                    <div className={styles.field}>
                        <label htmlFor="details" className={styles.label}>
                            Project Details <span className={styles.required}>*</span>
                        </label>
                        <textarea
                            id="details"
                            name="details"
                            className={styles.textarea}
                            placeholder="Tell me about your project, goals, and timeline..."
                            rows={4}
                            required
                        />
                    </div>

                    {/* Budget Range */}
                    <div className={styles.field}>
                        <label htmlFor="budget" className={styles.label}>
                            Budget Range
                        </label>
                        <select
                            id="budget"
                            name="budget"
                            className={styles.select}
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select a budget range
                            </option>
                            <option value="Under $5k">Under $5k</option>
                            <option value="$5k-$10k">$5k – $10k</option>
                            <option value="$10k-$25k">$10k – $25k</option>
                            <option value="$25k+">$25k+</option>
                            <option value="Not sure yet">Not sure yet</option>
                        </select>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className={styles.submit}
                        disabled={submitted}
                    >
                        {submitted ? "Message Sent ✓" : "Send Message"}
                    </button>
                </form>

                {/* Social Links */}
                <section className={styles.socialSection}>
                    <h2 className={styles.socialHeading}>Or connect with me</h2>
                    <SocialIcons links={socials} className={styles.socialLinks} />
                </section>
            </div>
        </main>
    );
}
