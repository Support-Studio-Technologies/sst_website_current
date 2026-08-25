"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhatWeDo/ReadyToTransform";

import Hero from "@/components/HomePage/Hero";
import HeroText from "@/components/HomePage/HeroText";
import CoreCapabilities from "@/components/HomePage/CoreCapabilities";
import TechnologyPartner from "@/components/HomePage/TechnologyPartner";
import WhyEnterprisePartnerWithUs from "@/components/HomePage/WhyEnterprisePartnerWithUs";
import BuiltForHowEnterprisesRun from "@/components/HomePage/BuiltForHowEnterprisesRun";
import EngagementModels from "@/components/HomePage/EngagementModels";
import HowWeWork from "@/components/HomePage/HowWeWork";
import IndustriesWeServe from "@/components/HomePage/IndustriesWeServe";
import OurProudPartners from "@/components/HomePage/OurProudPartners";
import ProofInNumbers from "@/components/HomePage/ProofInNumbers";

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
                <TechnologyPartner />
                <ProofInNumbers />
                <CoreCapabilities />
                <WhyEnterprisePartnerWithUs />
                <BuiltForHowEnterprisesRun />
                <HowWeWork />
                <IndustriesWeServe />
                <EngagementModels />
            </div>

            <OurProudPartners />
            <FutureFocusedInsights />
            <ReadyToTransform
                title="Ready to Build Enterprise Technology That Actually Moves You Forward?"
                description="Talk to our team about the SAP and technology environment your business actually needs."
                hasOverlapAbove
            />
            <Footer />
        </div>
    );
};

export default page;
