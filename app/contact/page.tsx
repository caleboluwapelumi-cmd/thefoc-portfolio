"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import styles from "./page.module.css";
import contentData from "@/src/data/content.json";
import SocialIcons from "@/components/SocialIcons";

interface SocialLink {
    name: string;
    url: string;
}

const socials: SocialLink[] = contentData.footer.social;

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

    // Handle form submission
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        try {
            // TODO: Send to Google Sheets API
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call

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
        } catch (error) {
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    // Dynamic fields logic
    const showFlyerCount = formData.projectScope.includes("Flyer designs");
    const showBusinessGoals = formData.projectScope.includes("Full Brand Identity") ||
        formData.projectScope.includes("Brand Refresh / Evolution");

    return (
        <main className={styles.page}>
            {/* Background */}
            <div className={styles.meshBg} aria-hidden="true">
                <div className={styles.bgImage} />
                <div className={styles.bgOverlay} style={{
                    background: 'linear-gradient(180deg, rgba(10,5,20,0.9) 0%, rgba(26,15,46,0.85) 50%, rgba(10,10,10,0.9) 100%)'
                }} />
                <div className={styles.meshOrb1} />
                <div className={styles.meshOrb2} />
                <div className={styles.meshOrb3} />
            </div>

            <div className={styles.container}>
                {/* Header */}
                <header className={styles.header}>
                    <h1 className={styles.heading}>Let&apos;s Work Together</h1>
                    <p className={styles.subheading}>
                        Fill out the form below and I&apos;ll get back to you within 24 hours.
                    </p>
                </header>

                {/* Form */}
                <form className={styles.form} onSubmit={handleSubmit} noValidate>

                    {/* SECTION 1: THE BASICS */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>The Basics</h2>

                        <div className={styles.field}>
                            <label htmlFor="fullName" className={styles.label}>
                                Full Name <span className={styles.required}>*</span>
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Your full name"
                                required
                            />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="email" className={styles.label}>
                                Email Address <span className={styles.required}>*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="your@email.com"
                                required
                            />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="companyName" className={styles.label}>
                                Company/Project Name <span className={styles.required}>*</span>
                            </label>
                            <input
                                id="companyName"
                                name="companyName"
                                type="text"
                                value={formData.companyName}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Your company or project name"
                                required
                            />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="websiteLinks" className={styles.label}>
                                Website / Social Media Links
                            </label>
                            <input
                                id="websiteLinks"
                                name="websiteLinks"
                                type="text"
                                value={formData.websiteLinks}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Your website or Instagram/Twitter handle"
                            />
                        </div>
                    </div>

                    {/* SECTION 2: PROJECT SCOPE */}
                    <div className={styles.section}>
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
                            <div className={styles.field}>
                                <label htmlFor="flyerCount" className={styles.label}>
                                    How many flyers do you need?
                                </label>
                                <input
                                    id="flyerCount"
                                    name="flyerCount"
                                    type="number"
                                    value={formData.flyerCount}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="e.g., 5"
                                    min="1"
                                />
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
                    <div className={styles.section}>
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

                        <div className={styles.field}>
                            <label htmlFor="launchDate" className={styles.label}>
                                Desired Launch Date <span className={styles.required}>*</span>
                            </label>
                            <input
                                id="launchDate"
                                name="launchDate"
                                type="date"
                                value={formData.launchDate}
                                onChange={handleChange}
                                className={styles.input}
                                required
                            />
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
                        {loading ? "Sending..." : submitted ? "Message Sent ✓" : "Send Message"}
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