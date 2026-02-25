import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About | TheFOC",
    description:
        "Learn about TheFOC — a creative designer turned brand identity specialist with a passion for helping brands stand out and scale with purpose.",
};

export default function AboutPage() {
    return <AboutClient />;
}