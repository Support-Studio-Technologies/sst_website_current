"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhoWeAre/ReadyToTransform";
import Hero from "@/components/WhatWeDo/CloudInfrastructure/Hero";
import HeroText from "@/components/WhatWeDo/CloudInfrastructure/HeroText";
import CloudConsulting from "@/components/WhatWeDo/CloudInfrastructure/CloudConsulting";
import CloudMigration from "@/components/WhatWeDo/CloudInfrastructure/CloudMigration";
import CloudModernization from "@/components/WhatWeDo/CloudInfrastructure/CloudModernization";
import HybridCloud from "@/components/WhatWeDo/CloudInfrastructure/HybridCloud";
import CoreEngineeringPillars from "@/components/WhatWeDo/CloudInfrastructure/CoreEngineeringPillars";
import InfrastructureServices from "@/components/WhatWeDo/CloudInfrastructure/InfrastructureServices";
import DevSecOps from "@/components/WhatWeDo/CloudInfrastructure/DevSecOps";
import BackupDisasterRecovery from "@/components/WhatWeDo/CloudInfrastructure/BackupDisasterRecovery";
import DigitalTwins from "@/components/WhatWeDo/CloudInfrastructure/DigitalTwins";
import DataVisualization from "@/components/WhatWeDo/CloudInfrastructure/DataVisualization";
import ProductDesign from "@/components/WhatWeDo/CloudInfrastructure/ProductDesign";

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
                <CoreEngineeringPillars />
                <DevSecOps />
            </div>
            <DataVisualization />
            <ProductDesign />
            <CloudMigration />
            <ReadyToTransform />
            <Footer />

            {/* <CloudConsulting />
            <CloudModernization />
            <HybridCloud />
            <InfrastructureServices />
            <DevSecOps />
            <BackupDisasterRecovery />
            <DigitalTwins />
            <FutureFocusedInsights /> */}
        </div>
    );
};

export default page;
