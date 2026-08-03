"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhoWeAre/ReadyToTransform";

import Hero from "@/components/WhatWeDo/ManagedServices/Hero";
import HeroText from "@/components/WhatWeDo/ManagedServices/HeroText";
import ApplicationManagementServices from "@/components/WhatWeDo/ManagedServices/ApplicationManagementServices";
import SAPManagedServices from "@/components/WhatWeDo/ManagedServices/SAPManagedServices";
import InfrastructureManagement from "@/components/WhatWeDo/ManagedServices/InfrastructureManagement";
import L1L2L3Support from "@/components/WhatWeDo/ManagedServices/L1L2L3Support";
import ServiceDesk from "@/components/WhatWeDo/ManagedServices/ServiceDesk";
import MonitoringIncidentManagement from "@/components/WhatWeDo/ManagedServices/MonitoringIncidentManagement";
import DesignToolsTechnologies from "@/components/WhatWeDo/ManagedServices/DesignToolsTechnologies";
import ContinuousImprovement from "@/components/WhatWeDo/ManagedServices/ContinuousImprovement";
import OurManagedCloudServices from "@/components/WhatWeDo/ManagedServices/OurManagedCloudServices";

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
                <ApplicationManagementServices />
            </div>
            <SAPManagedServices />
            <InfrastructureManagement />
            <L1L2L3Support />
            <ServiceDesk />
            <MonitoringIncidentManagement />
            <DesignToolsTechnologies />
            <ContinuousImprovement />
            <OurManagedCloudServices />

            <FutureFocusedInsights />
            <ReadyToTransform />
            <Footer />
        </div>
    );
};

export default page;
