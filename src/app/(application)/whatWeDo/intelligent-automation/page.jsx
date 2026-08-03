"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhoWeAre/ReadyToTransform";

import Hero from "@/components/WhatWeDo/IntelligentAutomation/Hero";
import HeroText from "@/components/WhatWeDo/IntelligentAutomation/HeroText";
import WhyIntelligentAutomationMatters from "@/components/WhatWeDo/IntelligentAutomation/WhyIntelligentAutomationMatters";
import OurIntelligentAutomationServices from "@/components/WhatWeDo/IntelligentAutomation/OurIntelligentAutomationServices";
import WorkflowAutomation from "@/components/WhatWeDo/IntelligentAutomation/WorkflowAutomation";
import IntelligentDocumentProcessing from "@/components/WhatWeDo/IntelligentAutomation/IntelligentDocumentProcessing";
import ProcessMining from "@/components/WhatWeDo/IntelligentAutomation/ProcessMining";
import BusinessRulesAutomationGrid from "@/components/WhatWeDo/IntelligentAutomation/BusinessRulesAutomationGrid";
import BusinessRulesAutomationZigzag from "@/components/WhatWeDo/IntelligentAutomation/BusinessRulesAutomationZigzag";
import HyperAutomation from "@/components/WhatWeDo/IntelligentAutomation/HyperAutomation";
import AIPoweredAutomation from "@/components/WhatWeDo/IntelligentAutomation/AIPoweredAutomation";
import OurAutomationApproach from "@/components/WhatWeDo/IntelligentAutomation/OurAutomationApproach";

const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <div className="relative -mt-[64px] lg:-mt-[68px] h-[680px] sm:h-[200vh]">
                <div className="sticky top-0 h-[340px] sm:h-screen z-0">
                    <Hero />
                </div>
 
                <div className="absolute inset-x-0 top-0 h-[340px] sm:h-screen z-[5]">
                    <HeroText />
                </div>
            </div>

            <div className="relative z-10 -mt-[340px] sm:-mt-[100vh] bg-white">
                <WhyIntelligentAutomationMatters />
                <OurIntelligentAutomationServices />
            </div>
            <WorkflowAutomation />
            <IntelligentDocumentProcessing />
            <ProcessMining />
            <BusinessRulesAutomationGrid />
            <BusinessRulesAutomationZigzag />
            <HyperAutomation />
            <AIPoweredAutomation />
            <OurAutomationApproach />
            <FutureFocusedInsights />
            <ReadyToTransform />
            <Footer />
        </div>
    );
};

export default page;
