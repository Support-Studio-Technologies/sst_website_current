"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhoWeAre/ReadyToTransform";

import Hero from "@/components/WhatWeDo/DataIntelligence/Hero";
import HeroText from "@/components/WhatWeDo/DataIntelligence/HeroText";
import IntroSection from "@/components/WhatWeDo/DataIntelligence/IntroSection";
import DataEngineering from "@/components/WhatWeDo/DataIntelligence/DataEngineering";
import DataWarehousing from "@/components/WhatWeDo/DataIntelligence/DataWarehousing";
import BusinessIntelligence from "@/components/WhatWeDo/DataIntelligence/BusinessIntelligence";
import DataVisualization from "@/components/WhatWeDo/DataIntelligence/DataVisualization";
import MasterDataManagement from "@/components/WhatWeDo/DataIntelligence/MasterDataManagement";
import DataGovernance from "@/components/WhatWeDo/DataIntelligence/DataGovernance";
import RealTimeAnalytics from "@/components/WhatWeDo/DataIntelligence/RealTimeAnalytics";
import HybridCloud from "@/components/WhatWeDo/DataIntelligence/HybridCloud";
import AIIntegration from "@/components/WhatWeDo/DataIntelligence/AIIntegration";
import TechnologyStack from "@/components/WhatWeDo/DataIntelligence/TechnologyStack";
import LegacyModernization from "@/components/WhatWeDo/DataIntelligence/LegacyModernization";


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
                {/* <IntroSection /> */}
                <DataEngineering />
            </div>
            <HybridCloud />
            {/* <DataWarehousing /> */}
            {/* <BusinessIntelligence /> */}
            {/* <DataVisualization /> */}
            <AIIntegration />
            <TechnologyStack />
            <LegacyModernization />
            <MasterDataManagement />
            {/* <DataGovernance /> */}
            {/* <RealTimeAnalytics /> */}

            {/* <FutureFocusedInsights /> */}
            <ReadyToTransform />
            <Footer />
        </div>
    );
};

export default page;
