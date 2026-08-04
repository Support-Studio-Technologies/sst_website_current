"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhoWeAre/ReadyToTransform";

import Hero from "@/components/WhatWeDo/CustomerExperience/Hero";
import HeroText from "@/components/WhatWeDo/CustomerExperience/HeroText";
import CRMStrategy from "@/components/WhatWeDo/CustomerExperience/CRMStrategy";
import SalesAutomation from "@/components/WhatWeDo/CustomerExperience/SalesAutomation";
import CustomerServiceSolutions from "@/components/WhatWeDo/CustomerExperience/CustomerServiceSolutions";
import MarketingAutomation from "@/components/WhatWeDo/CustomerExperience/MarketingAutomation";
import SalesforceConsulting from "@/components/WhatWeDo/CustomerExperience/SalesforceConsulting";
import CustomerJourneyMapping from "@/components/WhatWeDo/CustomerExperience/CustomerJourneyMapping";
import OmnichannelExperience from "@/components/WhatWeDo/CustomerExperience/OmnichannelExperience";
import CustomerAnalytics from "@/components/WhatWeDo/CustomerExperience/CustomerAnalytics";
import LoyaltySolutions from "@/components/WhatWeDo/CustomerExperience/LoyaltySolutions";

const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <div className="relative -mt-[64px] lg:-mt-[68px] h-[500px] sm:h-[700px] lg:h-[800px]">
                <Hero />
                <HeroText />
            </div>

            <CRMStrategy />
            <SalesAutomation />
            <CustomerServiceSolutions />
            <div className="relative">
                {/* Grey bar spans from the top of Marketing Automation, behind its Services
                    image, down through Salesforce Consulting until the Salesforce
                    Implementation card begins (mirrors CloudModernization's grey-bar pattern). */}
                <div className="absolute inset-0 hidden lg:block pointer-events-none z-0">
                    <div className="absolute right-[350px] top-0 h-[770px] w-[178px] bg-[#e8e8e8]" />
                </div>
                <MarketingAutomation />
                <SalesforceConsulting />
            </div>
            <CustomerJourneyMapping />
            <OmnichannelExperience />
            <CustomerAnalytics />
            <LoyaltySolutions />
            <FutureFocusedInsights />
            <ReadyToTransform />
            <Footer />
        </div>
    );
};

export default page;

