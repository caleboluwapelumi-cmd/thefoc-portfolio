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
        image: "/portfolio/visual-marketing/19th%20Jan.jpg",
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
        "/portfolio/visual-marketing/19th Jan.jpg",
        "/portfolio/visual-marketing/28th jan.jpg",
        "/portfolio/visual-marketing/Crest-1.png",
        "/portfolio/visual-marketing/Crest-2.png",
        "/portfolio/visual-marketing/Crest-3.png",
        "/portfolio/visual-marketing/Crest-4.png",
        "/portfolio/visual-marketing/F1.jpg",
        "/portfolio/visual-marketing/F2.jpg",
        "/portfolio/visual-marketing/F3.jpg",
        "/portfolio/visual-marketing/F4.jpg",
        "/portfolio/visual-marketing/F5.jpg",
        "/portfolio/visual-marketing/F6.jpg",
        "/portfolio/visual-marketing/F7.jpg",
        "/portfolio/visual-marketing/F8.jpg",
        "/portfolio/visual-marketing/F9.jpg",
        "/portfolio/visual-marketing/F10.jpg",
        "/portfolio/visual-marketing/F11.jpg",
        "/portfolio/visual-marketing/F12.jpg",
        "/portfolio/visual-marketing/F13.jpg",
        "/portfolio/visual-marketing/F14.jpg",
        "/portfolio/visual-marketing/F15.jpg",
        "/portfolio/visual-marketing/F16.jpg",
        "/portfolio/visual-marketing/Fage 1.jpg",
        "/portfolio/visual-marketing/Fage 2.jpg",
        "/portfolio/visual-marketing/Fage 3.jpg",
        "/portfolio/visual-marketing/Fage 4.jpg",
        "/portfolio/visual-marketing/Fage 5.jpg",
        "/portfolio/visual-marketing/Fage 6.jpg",
        "/portfolio/visual-marketing/Fage 7.jpg",
        "/portfolio/visual-marketing/Fage 8.jpg",
        "/portfolio/visual-marketing/Fage 9.jpg",
        "/portfolio/visual-marketing/Fage 10.jpg",
        "/portfolio/visual-marketing/Fage 11.jpg",
        "/portfolio/visual-marketing/Fage 12.jpg",
        "/portfolio/visual-marketing/Fage 13.jpg",
        "/portfolio/visual-marketing/Fage 14.jpg",
        "/portfolio/visual-marketing/Feb 1.jpg",
        "/portfolio/visual-marketing/Feb 1st.jpg",
        "/portfolio/visual-marketing/Feb 2.jpg",
        "/portfolio/visual-marketing/Feb 2 (1).jpg",
        "/portfolio/visual-marketing/Feb 3.jpg",
        "/portfolio/visual-marketing/Feb 3 (1).jpg",
        "/portfolio/visual-marketing/Feb 4.jpg",
        "/portfolio/visual-marketing/Feb 6.jpg",
        "/portfolio/visual-marketing/Feb 9.jpg",
        "/portfolio/visual-marketing/Feb 14th.jpg",
        "/portfolio/visual-marketing/Feb 14th (1).jpg",
        "/portfolio/visual-marketing/Feb 16TH.jpg",
        "/portfolio/visual-marketing/Feb 17th.jpg",
        "/portfolio/visual-marketing/Feb 18th.jpg",
        "/portfolio/visual-marketing/Jan 1.jpg",
        "/portfolio/visual-marketing/Jan 2.jpg",
        "/portfolio/visual-marketing/Jan 3.jpg",
        "/portfolio/visual-marketing/Jan 12.jpg",
        "/portfolio/visual-marketing/Jan 13.jpg",
        "/portfolio/visual-marketing/Jan 19.jpg",
        "/portfolio/visual-marketing/Jan 20.jpg",
        "/portfolio/visual-marketing/Jan 23.jpg",
        "/portfolio/visual-marketing/Jan 24.jpg",
        "/portfolio/visual-marketing/Jan 26th.jpg",
        "/portfolio/visual-marketing/Jan 28th.jpg",
        "/portfolio/visual-marketing/Jan 30th.jpg",
        "/portfolio/visual-marketing/January 12.jpg",
        "/portfolio/visual-marketing/Meathaus family subscription sq.jpg",
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
