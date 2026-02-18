import type { Metadata } from "next";
import ProjectDetailLayout from "@/components/ProjectDetailLayout";
import type { ProjectDetailData } from "@/components/ProjectDetailLayout";

export const metadata: Metadata = {
    title: "Visual Marketing | TheFOC Portfolio",
    description:
        "Eye-catching flyers, social graphics, and promotional materials that cut through the noise and drive real engagement.",
};

const project: ProjectDetailData = {
    slug: "visual-marketing",
    title: "Visual Marketing",
    category: "Graphics",
    accentColor: "#8d04e4",
    description:
        "Eye-catching flyers, social graphics, and promotional materials that cut through the noise and drive real engagement.",
    hero: {
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=800&fit=crop",
    },
    overview: {
        challenge:
            "Brands struggle to stand out in an oversaturated digital landscape. Generic templates and inconsistent visuals dilute brand recognition and fail to convert audiences into customers.",
        solution:
            "We developed a scalable visual system tailored to each platform — from high-impact social media graphics to print-ready promotional flyers — ensuring every touchpoint reinforces the brand's identity and drives action.",
    },
    process: [
        {
            number: "01",
            title: "Discovery",
            description:
                "Deep-dive into the brand's audience, competitors, and existing visual assets to identify gaps and opportunities.",
        },
        {
            number: "02",
            title: "Concept Development",
            description:
                "Exploring visual directions through moodboards, colour palettes, and typography pairings before committing to execution.",
        },
        {
            number: "03",
            title: "Design Execution",
            description:
                "Producing a full suite of on-brand assets — social templates, flyers, banners — optimised for each platform and format.",
        },
        {
            number: "04",
            title: "Delivery & Support",
            description:
                "Handing over production-ready files with usage guidelines, plus ongoing support for future asset creation.",
        },
    ],
    gallery: [
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1000&fit=crop",
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=1000&fit=crop",
    ],
    results: [
        { stat: "48h", label: "Average Turnaround" },
        { stat: "3×", label: "Engagement Uplift" },
        { stat: "100%", label: "Brand Consistency" },
        { stat: "50+", label: "Assets Delivered" },
    ],
};

export default function VisualMarketingPage() {
    return <ProjectDetailLayout project={project} />;
}
