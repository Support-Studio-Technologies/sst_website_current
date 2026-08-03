"use client";

import Footer from "@/components/Footer/Footer";
import CareersHero from "@/components/Careers/CareersHero";
import JoinUsPanel from "@/components/Careers/JoinUsPanel";
import JoinUsSocialBand from "@/components/Careers/JoinUsSocialBand";
import JobListingSection from "@/components/Careers/JobListingSection";
import WhatYouWantToDo from "@/components/Careers/WhatYouWantToDo";
import TeamStory from "@/components/Careers/TeamStory";
import LearningDevelopment from "@/components/Careers/LearningDevelopment";
import OurCulture from "@/components/Careers/OurCulture";
import GrowthQuoteBand from "@/components/Careers/GrowthQuoteBand";
import WhatSetsUsApart from "@/components/Careers/WhatSetsUsApart";
import LinkedInCarousel from "@/components/WhoWeAre/LinkedInCarousel";

const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <CareersHero />
            <JoinUsPanel />
            <JobListingSection />
            <WhatYouWantToDo />
            <TeamStory />
            <LearningDevelopment />
            <GrowthQuoteBand />
            <OurCulture />
            <WhatSetsUsApart />
            <LinkedInCarousel />
            <JoinUsSocialBand />
            <Footer />
        </div>
    );
};

export default page;

