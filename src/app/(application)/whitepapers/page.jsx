"use client";

import React from "react";
import InsightsListing from "@/components/Insights/InsightsListing";
import backgroundImage from "@/assets/Insights/Whitepapers_hero.webp";
import { whitepapersData } from "@/data/whitepapersData";
import Hero from "@/components/Insights/Hero";
import HeroText from "@/components/Insights/HeroText";
import Navbar from "@/components/Navbar/Navbar";

export default function WhitepapersPage() {
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
                        subtitle="Thought Leadership"
                        title="Whitepapers"
                        description="Deep Insights Built To Guide Smarter Enterprise Decisions."
                    />
                </div>
            </div>

            {/* Listing Section */}
            <div className="relative z-10 bg-white">
                <InsightsListing
                    items={whitepapersData}
                    basePath="/whitepapers"
                    backgroundImage={backgroundImage}
                    subtitle="Thought Leadership"
                    title="Whitepapers"
                    description="Deep Insights Built To Guide Smarter Enterprise Decisions."
                    highlights={[
                        "Executive-ready frameworks",
                        "Research-backed recommendations",
                        "Practical implementation guidance",
                        "Cross-industry perspectives",
                    ]}
                    emptyStateText="No whitepapers published yet. Please check back soon."
                />
            </div>
        </div>
    );
}