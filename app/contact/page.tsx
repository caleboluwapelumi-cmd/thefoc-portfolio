"use client";

import { useState, FormEvent, ChangeEvent, useRef, useCallback } from "react";
import styles from "./page.module.css";
import contentData from "@/src/data/content.json";
import SocialIcons from "@/components/SocialIcons";

interface SocialLink {
    name: string;
    url: string;
}

const socials: SocialLink[] = contentData.footer.social;

/* ─── Required fields for progress calculation ─────────────────────────── */
const REQUIRED_FIELDS = ["fullName", "email", "companyName", "projectScope", "projectDescription", "budget", "launchDate"] as const;

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        companyName: "",
        websiteLinks: "",
        projectScope: [] as string[],
        flyerCount: "",
        businessGoals: "",
        projectDescription: "",
        budget: "",
        launchDate: "",
        referralSource: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    // Handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle checkbox changes
    const handleCheckbox = (value: string) => {
        setFormData(prev => ({
            ...prev,
            projectScope: prev.projectScope.includes(value)
                ? prev.projectScope.filter(item => item !== value)
                : [...prev.projectScope, value]
        }));
    };

    // Calculate form completion percentage
    const calcProgress = useCallback(() => {
        let filled = 0;
        const total = REQUIRED_FIELDS.length;
        for (const field of REQUIRED_FIELDS) {
            const val = formData[field];
            if (Array.isArray(val) ? val.length > 0 : val.trim() !== "") filled++;
        }
        return Math.round((filled / total) * 100);
    }, [formData]);

    const progress = calcProgress();

    // Scroll to first invalid field on submit
    const scrollToFirstError = () => {
        const firstInvalid = formRef.current?.querySelector(":invalid") as HTMLElement | null;
        if (firstInvalid) {
            firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
            firstInvalid.focus();
        }
    };

    // Handle form submission
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Native validity check
        if (!formRef.current?.checkValidity()) {
            scrollToFirstError();
            return;
        }

        setLoading(true);
        try {
            // TODO: Send to Google Sheets API
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitted(true);
            alert("Thank you! I'll be in touch soon.");

            // Reset form
            setFormData({
                fullName: "",
                email: "",
                companyName: "",
                websiteLinks: "",
                projectScope: [],
                flyerCount: "",
                businessGoals: "",
                projectDescription: "",
                budget: "",
                launchDate: "",
                referralSource: "",
            });
        } catch {
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    // Dynamic fields logic
    const showFlyerCount = formData.projectScope.includes("Flyer designs");
    const showBusinessGoals = formData.projectScope.includes("Full Brand Identity") ||
        formData.projectScope.includes("Brand Refresh / Evolution");

    // Helper: has a field value (for floating label)
    const filled = (val: string) => val.trim() !== "" ? styles.filled : "";

    return (
        <main className={styles.page}>
            {/* Background — pure CSS, no photo */}
            <div className={styles.meshBg} aria-hidden="true">
                <div className={styles.bgOverlay} />
                <div className={styles.meshOrb1} />
                <div className={styles.meshOrb2} />
                <div className={styles.meshOrb3} />
                <div className={styles.meshOrb4} />
            </div>

            <div className={styles.container}>
                {/* Header */}
                <header className={styles.header}>
                    <h1 className={styles.heading}>Let&apos;s Work Together</h1>
                    <p className={styles.subheading}>
                        Fill out the form below and I&apos;ll get back to you within 24 hours.
                    </p>
                </header>

                {/* Progress Bar */}
                <div className={styles.progressWrap} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Form completion">
                    <div className={styles.progressHeader}>
                        <span className={styles.progressLabel}>Form Progress</span>
                        <span className={styles.progressPct}>{progress}%</span>
                    </div>
                    <div className={styles.progressTrack}>
                        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
                    </div>
                </div>

                {/* Form */}
                <form className={styles.form} onSubmit={handleSubmit} ref={formRef} noValidate>

                    {/* SECTION 1: THE BASICS */}
                    <div
                        className={`${styles.section} ${styles.sectionAnimate}`}
                        style={{ animationDelay: '0.45s' }}
                    >
                        <h2 className={styles.sectionTitle}>The Basics</h2>

                        {/* Full Name — floating label */}
                        <div className={styles.floatField}>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={`${styles.input} ${styles.floatInput} ${filled(formData.fullName)}`}
                                required
                                aria-label="Full Name"
                            />
                            <label htmlFor="fullName" className={styles.floatLabel}>
                                Full Name <span className={styles.required}>*</span>
                            </label>
                        </div>

                        {/* Email — floating label */}
                        <div className={styles.floatField}>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`${styles.input} ${styles.floatInput} ${filled(formData.email)}`}
                                required
                                aria-label="Email Address"
                            />
                            <label htmlFor="email" className={styles.floatLabel}>
                                Email Address <span className={styles.required}>*</span>
                            </label>
                        </div>

                        {/* Company Name — floating label */}
                        <div className={styles.floatField}>
                            <input
                                id="companyName"
                                name="companyName"
                                type="text"
                                value={formData.companyName}
                                onChange={handleChange}
                                className={`${styles.input} ${styles.floatInput} ${filled(formData.companyName)}`}
                                required
                                aria-label="Company/Project Name"
                            />
                            <label htmlFor="companyName" className={styles.floatLabel}>
                                Company / Project Name <span className={styles.required}>*</span>
                            </label>
                        </div>

                        {/* Website/Social Links — floating label */}
                        <div className={styles.floatField}>
                            <input
                                id="websiteLinks"
                                name="websiteLinks"
                                type="text"
                                value={formData.websiteLinks}
                                onChange={handleChange}
                                className={`${styles.input} ${styles.floatInput} ${filled(formData.websiteLinks)}`}
                                aria-label="Website / Social Media Links"
                            />
                            <label htmlFor="websiteLinks" className={styles.floatLabel}>
                                Website / Social Media Links
                            </label>
                        </div>
                    </div>

                    {/* SECTION 2: PROJECT SCOPE */}
                    <div
                        className={`${styles.section} ${styles.sectionAnimate}`}
                        style={{ animationDelay: '0.6s' }}
                    >
                        <h2 className={styles.sectionTitle}>Project Scope</h2>

                        <div className={styles.field}>
                            <label className={styles.label}>
                                What are you looking for? <span className={styles.required}>*</span>
                            </label>
                            <p className={styles.fieldHint}>Select all that apply</p>

                            <div className={styles.checkboxGroup}>
                                {[
                                    "Full Brand Identity",
                                    "Logo Design Only",
                                    "Brand Refresh / Evolution",
                                    "Brand Guidelines / Style Guide",
                                    "Stationery & Marketing Collateral",
                                    "Flyer designs"
                                ].map((option) => (
                                    <label key={option} className={styles.checkbox}>
                                        <input
                                            type="checkbox"
                                            checked={formData.projectScope.includes(option)}
                                            onChange={() => handleCheckbox(option)}
                                        />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Dynamic: Flyer Count */}
                        {showFlyerCount && (
                            <div className={styles.floatField}>
                                <input
                                    id="flyerCount"
                                    name="flyerCount"
                                    type="number"
                                    value={formData.flyerCount}
                                    onChange={handleChange}
                                    className={`${styles.input} ${styles.floatInput} ${filled(formData.flyerCount)}`}
                                    placeholder=""
                                    min="1"
                                    aria-label="How many flyers do you need?"
                                />
                                <label htmlFor="flyerCount" className={styles.floatLabel}>
                                    How many flyers do you need?
                                </label>
                            </div>
                        )}

                        {/* Dynamic: Business Goals */}
                        {showBusinessGoals && (
                            <div className={styles.field}>
                                <label htmlFor="businessGoals" className={styles.label}>
                                    Tell me about your business goals
                                </label>
                                <textarea
                                    id="businessGoals"
                                    name="businessGoals"
                                    value={formData.businessGoals}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                    placeholder="What do you hope to achieve with this rebrand or new identity?"
                                    rows={4}
                                />
                            </div>
                        )}

                        <div className={styles.field}>
                            <label htmlFor="projectDescription" className={styles.label}>
                                Tell me about your business and what you hope to achieve <span className={styles.required}>*</span>
                            </label>
                            <textarea
                                id="projectDescription"
                                name="projectDescription"
                                value={formData.projectDescription}
                                onChange={handleChange}
                                className={styles.textarea}
                                placeholder="Share your vision, goals, and any specific requirements..."
                                rows={5}
                                required
                            />
                        </div>
                    </div>

                    {/* SECTION 3: LOGISTICS */}
                    <div
                        className={`${styles.section} ${styles.sectionAnimate}`}
                        style={{ animationDelay: '0.75s' }}
                    >
                        <h2 className={styles.sectionTitle}>Logistics</h2>

                        <div className={styles.field}>
                            <label className={styles.label}>
                                Budget <span className={styles.required}>*</span>
                            </label>
                            <div className={styles.radioGroup}>
                                {[
                                    "₦15,000 – ₦100,000",
                                    "₦200,000 – ₦400,000",
                                    "₦400,000 – ₦700,000",
                                    "₦700,000 – ₦1,000,000",
                                    "₦1,000,000+"
                                ].map((option) => (
                                    <label key={option} className={styles.radio}>
                                        <input
                                            type="radio"
                                            name="budget"
                                            value={option}
                                            checked={formData.budget === option}
                                            onChange={handleChange}
                                            required
                                        />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Launch Date — floating label */}
                        <div className={styles.floatField}>
                            <input
                                id="launchDate"
                                name="launchDate"
                                type="date"
                                value={formData.launchDate}
                                onChange={handleChange}
                                className={`${styles.input} ${styles.floatInput} ${filled(formData.launchDate)}`}
                                required
                                aria-label="Desired Launch Date"
                            />
                            <label htmlFor="launchDate" className={styles.floatLabel}>
                                Desired Launch Date <span className={styles.required}>*</span>
                            </label>
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="referralSource" className={styles.label}>
                                How did you hear about me?
                            </label>
                            <select
                                id="referralSource"
                                name="referralSource"
                                value={formData.referralSource}
                                onChange={handleChange}
                                className={styles.select}
                            >
                                <option value="">Select an option</option>
                                <option value="Instagram">Instagram</option>
                                <option value="Referral">Referral</option>
                                <option value="LinkedIn">LinkedIn</option>
                                <option value="Twitter/X">Twitter/X</option>
                                <option value="Behance">Behance</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className={styles.submit}
                        disabled={loading || submitted}
                    >
                        {loading ? "Sending…" : submitted ? "Message Sent ✓" : "Send Message →"}
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