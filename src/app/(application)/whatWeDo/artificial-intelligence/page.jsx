"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhoWeAre/ReadyToTransform";

import Hero from "@/components/WhatWeDo/ArtificialIntelligence/Hero";
import HeroText from "@/components/WhatWeDo/ArtificialIntelligence/HeroText";
import WhyAIMatters from "@/components/WhatWeDo/ArtificialIntelligence/WhyAIMatters";
import OurAIServices from "@/components/WhatWeDo/ArtificialIntelligence/OurAIServices";
import MachineLearning from "@/components/WhatWeDo/ArtificialIntelligence/MachineLearning";
import IntelligentAssistantsCards from "@/components/WhatWeDo/ArtificialIntelligence/IntelligentAssistantsCards";
import AIStrategy from "@/components/WhatWeDo/ArtificialIntelligence/AIStrategy";
import IntelligentAssistantsBanner from "@/components/WhatWeDo/ArtificialIntelligence/IntelligentAssistantsBanner";
import AIIntegration from "@/components/WhatWeDo/ArtificialIntelligence/AIIntegration";
import PredictiveIntelligence from "@/components/WhatWeDo/ArtificialIntelligence/PredictiveIntelligence";
import ConversationalAI from "@/components/WhatWeDo/ArtificialIntelligence/ConversationalAI";
import TechnologyStack from "@/components/WhatWeDo/ArtificialIntelligence/TechnologyStack";
import AIGovernance from "@/components/WhatWeDo/ArtificialIntelligence/AIGovernance";
import AILifecycle from "@/components/WhatWeDo/ArtificialIntelligence/AILifecycle";

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
                <WhyAIMatters />
                <OurAIServices />
            </div>
            <MachineLearning />
            <IntelligentAssistantsCards />
            <AIStrategy />
            <IntelligentAssistantsBanner />
            <AIIntegration />
            <PredictiveIntelligence />
            <ConversationalAI />
            <TechnologyStack />
            <AIGovernance />
            <AILifecycle />
            <FutureFocusedInsights />
            <ReadyToTransform />
            <Footer />
        </div>
    );
};

export default page;

