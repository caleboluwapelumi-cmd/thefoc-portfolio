import type { Metadata } from "next";
import ProjectDetailLayout from "@/components/ProjectDetailLayout";
import type { ProjectDetailData } from "@/components/ProjectDetailLayout";

export const metadata: Metadata = {
    title: "Brand Strategy Sessions | TheFOC Portfolio",
    description:
        "Strategic one-on-one consultation to clarify your brand's direction, messaging, and roadmap for sustainable growth.",
};

const project: ProjectDetailData = {
    slug: "brand-strategy-sessions",
    title: "Brand Strategy Sessions",
    category: "Strategy",
    accentColor: "#6b21a8",
    description:
        "Strategic one-on-one consultation to clarify your brand's direction, messaging, and roadmap for sustainable growth.",
    hero: {
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=800&fit=crop",
    },
    overview: {
        challenge:
            "Without a clear brand strategy, businesses make reactive decisions — chasing trends, speaking to everyone, and resonating with no one. The result is wasted budget and stalled growth.",
        solution:
            "Through focused one-on-one strategy sessions, we help founders and marketing leads define their brand's core positioning, craft a compelling message, and build a clear roadmap that aligns every future decision with their goals.",
    },
    process: [
        {
            number: "01",
            title: "Discovery Workshop",
            description:
                "An in-depth session exploring your business goals, target audience, competitive landscape, and current brand perception.",
        },
        {
            number: "02",
            title: "Market Analysis",
            description:
                "Researching your industry, identifying white space, and mapping competitor positioning to find your unique advantage.",
        },
        {
            number: "03",
            title: "Strategy Framework",
            description:
                "Building your brand's strategic foundation: purpose, positioning statement, messaging pillars, and tone of voice.",
        },
        {
            number: "04",
            title: "Action Plan",
            description:
                "Translating strategy into a prioritised, actionable roadmap with clear milestones and measurable outcomes.",
        },
    ],
    gallery: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1531498860502-7c67cf519b9e?w=800&h=1000&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=1000&fit=crop",
    ],
    results: [
        { stat: "Clear", label: "Brand Direction" },
        { stat: "Focused", label: "Messaging Framework" },
        { stat: "90-Day", label: "Growth Roadmap" },
        { stat: "100%", label: "Bespoke Strategy" },
    ],
};

export default function BrandStrategySessionsPage() {
    return <ProjectDetailLayout project={project} />;
}
