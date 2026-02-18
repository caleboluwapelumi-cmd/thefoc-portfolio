import type { Metadata } from "next";
import ProjectDetailLayout from "@/components/ProjectDetailLayout";
import type { ProjectDetailData } from "@/components/ProjectDetailLayout";

export const metadata: Metadata = {
    title: "Brand Identity Systems | TheFOC Portfolio",
    description:
        "Complete brand systems — from logo design to comprehensive visual guidelines — that resonate across every touchpoint.",
};

const project: ProjectDetailData = {
    slug: "brand-identity-systems",
    title: "Brand Identity Systems",
    category: "Branding",
    accentColor: "#00e4ff",
    description:
        "Complete brand systems — from logo design to comprehensive visual guidelines — that resonate across every touchpoint.",
    hero: {
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1920&h=800&fit=crop",
    },
    overview: {
        challenge:
            "Many businesses operate with fragmented visual identities — mismatched logos, inconsistent colours, and no clear guidelines — leading to a brand that feels amateur and forgettable.",
        solution:
            "We build cohesive brand identity systems from the ground up: a distinctive logo, a refined colour palette, purposeful typography, and a comprehensive brand guide that empowers teams to stay on-brand at every touchpoint.",
    },
    process: [
        {
            number: "01",
            title: "Brand Strategy",
            description:
                "Defining the brand's purpose, values, positioning, and personality before a single pixel is designed.",
        },
        {
            number: "02",
            title: "Visual Exploration",
            description:
                "Presenting multiple design directions — logo concepts, colour stories, and type systems — to find the right visual voice.",
        },
        {
            number: "03",
            title: "System Development",
            description:
                "Refining the chosen direction into a complete, scalable identity system with all primary and secondary assets.",
        },
        {
            number: "04",
            title: "Documentation",
            description:
                "Delivering a comprehensive brand guide covering usage rules, do's and don'ts, and application examples.",
        },
    ],
    gallery: [
        "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1000&fit=crop",
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=1000&fit=crop",
    ],
    results: [
        { stat: "1", label: "Unified Visual Language" },
        { stat: "Clear", label: "Brand Positioning" },
        { stat: "Full", label: "Asset Toolkit" },
        { stat: "∞", label: "Lasting Impact" },
    ],
};

export default function BrandIdentitySystemsPage() {
    return <ProjectDetailLayout project={project} />;
}
