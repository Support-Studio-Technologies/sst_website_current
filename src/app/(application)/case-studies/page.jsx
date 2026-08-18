"use client";

import React from "react";
import InsightsListing from "@/components/Insights/InsightsListing";
import backgroundImage from "@/assets/Insights/Case_Studies.jpg";
import { caseStudiesData } from "@/data/caseStudiesData";
import Hero from "@/components/Insights/Hero";
import HeroText from "@/components/Insights/HeroText";
import Navbar from "@/components/Navbar/Navbar";

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            {/* Hero Section */}
            <div className="relative -mt-[64px] lg:-mt-[68px] h-[680px] sm:h-[200vh]">
                {/* Sticky background */}
                <div className="sticky top-0 h-[340px] sm:h-screen z-0">
                    <Hero backgroundImage={backgroundImage} />
                </div>

                {/* Hero content */}
                <div className="absolute inset-x-0 top-0 h-[340px] sm:h-screen z-[5]">
                    <HeroText
                        subtitle="Proven Outcomes"
                        title="Case Studies"
                        description="Real Solutions. Measurable Impact. Built For Enterprise Transformation."
                    />
                </div>
            </div>

            {/* Listing Section */}
            <div className="relative z-10 bg-white">
                <InsightsListing
                    items={caseStudiesData}
                    basePath="/case-studies"
                    backgroundImage={backgroundImage}
                    subtitle="Proven Outcomes"
                    title="Case Studies"
                    description="Real Solutions. Measurable Impact. Built For Enterprise Transformation."
                    highlights={[
                        "Real-world SAP transformations",
                        "Measurable business outcomes",
                        "Cross-industry expertise",
                        "Proven migration frameworks",
                        "Client-validated results",
                    ]}
                    emptyStateText="No case studies published yet. Please check back soon."
                />
            </div>
        </div>
    );
}
