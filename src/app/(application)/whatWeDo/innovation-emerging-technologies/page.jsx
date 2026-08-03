"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhoWeAre/ReadyToTransform";

import Hero from "@/components/WhatWeDo/InnovationEmergingTechnologies/Hero";
import HeroText from "@/components/WhatWeDo/InnovationEmergingTechnologies/HeroText";
import Intro from "@/components/WhatWeDo/InnovationEmergingTechnologies/Intro";
import IoT from "@/components/WhatWeDo/InnovationEmergingTechnologies/IoT";
import DigitalTwins from "@/components/WhatWeDo/InnovationEmergingTechnologies/DigitalTwins";
import ScenarioAnalysis from "@/components/WhatWeDo/InnovationEmergingTechnologies/ScenarioAnalysis";
import ExtendedReality from "@/components/WhatWeDo/InnovationEmergingTechnologies/ExtendedReality";
import EdgeComputing from "@/components/WhatWeDo/InnovationEmergingTechnologies/EdgeComputing";
import QuantumReadiness from "@/components/WhatWeDo/InnovationEmergingTechnologies/QuantumReadiness";
import Industry4 from "@/components/WhatWeDo/InnovationEmergingTechnologies/Industry4";
import SmartEnterpriseSolutions from "@/components/WhatWeDo/InnovationEmergingTechnologies/SmartEnterpriseSolutions";
import OurInnovationFramework from "@/components/WhatWeDo/InnovationEmergingTechnologies/OurInnovationFramework";

const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            {/*
              Navbar lives outside the sticky wrapper below for the same reason as the
              cybersecurity-digital-trust page: position:sticky creates its own stacking
              context, which would trap the Navbar's fixed positioning under later,
              higher z-index sections if nested inside it.
            */}
            <Navbar />

            {/* Fixed hero reveal: background stays pinned while the Intro section curtains
                over it, matching whatWeDo/cybersecurity-digital-trust's hero pattern */}
            <div className="relative -mt-[64px] lg:-mt-[68px] h-[680px] sm:h-[200vh]">
                <div className="sticky top-0 h-[340px] sm:h-screen z-0">
                    <Hero />
                </div>

                <div className="absolute inset-x-0 top-0 h-[340px] sm:h-screen z-[5]">
                    <HeroText />
                </div>
            </div>

            <div className="relative z-10 -mt-[340px] sm:-mt-[100vh] bg-white">
                <Intro />
                <IoT />
            </div>


            <DigitalTwins />
            <ScenarioAnalysis />
            <ExtendedReality />
            <EdgeComputing />
            <QuantumReadiness />
            <Industry4 />
            <SmartEnterpriseSolutions />
            <OurInnovationFramework />

            <FutureFocusedInsights />
            <ReadyToTransform />
            <Footer />
        </div>
    );
};

export default page;
