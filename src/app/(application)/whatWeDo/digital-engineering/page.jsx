"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhoWeAre/ReadyToTransform";

import Hero from "@/components/WhatWeDo/DigitalEngineering/Hero";
import HeroText from "@/components/WhatWeDo/DigitalEngineering/HeroText";
import IntroSection from "@/components/WhatWeDo/DigitalEngineering/IntroSection";
import EnterpriseApplicationDevelopment from "@/components/WhatWeDo/DigitalEngineering/EnterpriseApplicationDevelopment";
import TechnologyFocus from "@/components/WhatWeDo/DigitalEngineering/TechnologyFocus";
import MobileApplications from "@/components/WhatWeDo/DigitalEngineering/MobileApplications";
import APIDevelopment from "@/components/WhatWeDo/DigitalEngineering/APIDevelopment";
import MicroservicesArchitecture from "@/components/WhatWeDo/DigitalEngineering/MicroservicesArchitecture";
import PenetrationTesting from "@/components/WhatWeDo/DigitalEngineering/PenetrationTesting";
import InternalDeveloperPlatforms from "@/components/WhatWeDo/DigitalEngineering/DevOpsSection";
import ApplicationModernization from "@/components/WhatWeDo/DigitalEngineering/ApplicationModernization";
import DevOpsSection from "@/components/WhatWeDo/DigitalEngineering/DevOpsSection";
import LegacyModernization from "@/components/WhatWeDo/DigitalEngineering/LegacyModernization";
import TechnologyStack from "@/components/WhatWeDo/DigitalEngineering/TechnologyStack";

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
                <IntroSection />
            </div>
            <LegacyModernization />
            <TechnologyFocus />
            <MobileApplications />
            <APIDevelopment />
            <MicroservicesArchitecture />
            <PenetrationTesting />
            <DevOpsSection />
            <ApplicationModernization />
            <EnterpriseApplicationDevelopment />
            <FutureFocusedInsights />
            <ReadyToTransform />
            <Footer />
        </div>
    );
};

export default page;
