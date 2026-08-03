"use client";

import React from "react";
import InsightsListing from "@/components/Insights/InsightsListing";
// import backgroundImage from "../../../../public/blog/hero.jpg";
import backgroundImage from "@/assets/Whitepapers.jpg";
import { whitepapersData } from "@/data/whitepapersData";

export default function WhitepapersPage() {
    return (
        <InsightsListing
            items={whitepapersData}
            basePath="/whitepapers"
            backgroundImage={backgroundImage}
            subtitle="Thought Leadership"
            title="Whitepapers"
            description="In-depth research and practical frameworks from our advisory teams covering SAP strategy, intelligent automation, cybersecurity, data intelligence, and customer experience."
            highlights={[
                "Executive-ready frameworks",
                "Research-backed recommendations",
                "Practical implementation guidance",
                "Cross-industry perspectives",
            ]}
            emptyStateText="No whitepapers published yet. Please check back soon."
        />
    );
}
