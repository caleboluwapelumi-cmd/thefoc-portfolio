"use client";

import { FaInstagram, FaTwitter, FaBehance, FaLinkedinIn } from "react-icons/fa";
import { IconType } from "react-icons";
import styles from "./SocialIcons.module.css";

interface SocialLink {
    name: string;
    url: string;
}

interface SocialIconsProps {
    links: SocialLink[];
    className?: string;
}

const iconMap: Record<string, IconType> = {
    Instagram: FaInstagram,
    Twitter: FaTwitter,
    Behance: FaBehance,
    LinkedIn: FaLinkedinIn,
};

export default function SocialIcons({ links, className }: SocialIconsProps) {
    return (
        <div className={`${styles.row} ${className ?? ""}`}>
            {links.map((social) => {
                const Icon = iconMap[social.name];
                return (
                    <a
                        key={social.name}
                        href={social.url}
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                    >
                        {Icon ? <Icon size={24} /> : social.name}
                    </a>
                );
            })}
        </div>
    );
}
