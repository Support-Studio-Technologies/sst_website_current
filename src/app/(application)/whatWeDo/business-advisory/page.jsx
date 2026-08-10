"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhoWeAre/ReadyToTransform";

import Hero from "@/components/WhatWeDo/BusinessAdvisory/Hero";
import HeroText from "@/components/WhatWeDo/BusinessAdvisory/HeroText";
import WhyBusinessAdvisoryMatters from "@/components/WhatWeDo/BusinessAdvisory/WhyBusinessAdvisoryMatters";
import BusinessStrategy from "@/components/WhatWeDo/BusinessAdvisory/BusinessStrategy";
import DigitalStrategy from "@/components/WhatWeDo/BusinessAdvisory/DigitalStrategy";
import EnterpriseArchitecture from "@/components/WhatWeDo/BusinessAdvisory/EnterpriseArchitecture";
import ITAdvisory from "@/components/WhatWeDo/BusinessAdvisory/ITAdvisory";
import BusinessProcessConsulting from "@/components/WhatWeDo/BusinessAdvisory/BusinessProcessConsulting";
import ProcessReengineering from "@/components/WhatWeDo/BusinessAdvisory/ProcessReengineering";
import ChangeManagement from "@/components/WhatWeDo/BusinessAdvisory/ChangeManagement";
import PMOAdvisory from "@/components/WhatWeDo/BusinessAdvisory/PMOAdvisory";
import TechnologyAssessment from "@/components/WhatWeDo/BusinessAdvisory/TechnologyAssessment";
import TransformationRoadmap from "@/components/WhatWeDo/BusinessAdvisory/TransformationRoadmap";
import APIDevelopment from "@/components/WhatWeDo/BusinessAdvisory/APIDevelopment";
import SalesforceConsulting from "@/components/WhatWeDo/BusinessAdvisory/SalesforceConsulting";

const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            {/* Fixed hero reveal: background stays pinned while the content curtains over it.
                The reveal distance below is sized to WhyBusinessAdvisoryMatters' own content
                height (not a full 100vh like the cybersecurity page's longer curtain section),
                so min-height doesn't force a big empty gap under it. That min-height on the
                curtain still has to stay >= the reveal distance, though — the sticky hero keeps
                unpinning (scrolling away) for the entire reveal distance, so if the curtain's
                own height came in shorter than that, it would finish scrolling past first and
                the hero would peek through in the leftover gap before the next section. */}
            <div className="relative -mt-[64px] lg:-mt-[68px] h-[680px] sm:h-[calc(100vh+420px)]">
                <div className="sticky top-0 h-[340px] sm:h-screen z-0">
                    <Hero />
                </div>
                <div className="absolute inset-x-0 top-0 h-[340px] sm:h-screen z-[5]">
                    <HeroText />
                </div>
            </div>
            <div className="relative z-10 -mt-[340px] sm:-mt-[420px] min-h-[340px] sm:min-h-[420px] bg-white">
                <DigitalStrategy />
                {/* <WhyBusinessAdvisoryMatters /> */}
            </div>

            <APIDevelopment />
            {/* <BusinessStrategy /> */}
            {/* <EnterpriseArchitecture /> */}
            {/* <ITAdvisory /> */}
            {/* <BusinessProcessConsulting /> */}
            {/* <ProcessReengineering /> */}
            {/* <ChangeManagement /> */}
            <PMOAdvisory />
            {/* <TechnologyAssessment /> */}
            {/* <TransformationRoadmap /> */}

            {/* <FutureFocusedInsights /> */}
            <SalesforceConsulting />
            <ReadyToTransform />
            <Footer />
        </div>
    );
};

export default page;
