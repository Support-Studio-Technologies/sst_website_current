"use client";

import CareersLayout from "@/components/Careers/CareersLayout";
import CareersHeroText from "@/components/Careers/CareersHeroText";
import JobListing from "@/components/Careers/JobListing/JobListing";
import WhatYouWantToDo from "@/components/Careers/WhatYouWantToDo/WhatYouWantToDo";
import TeamStory from "@/components/Careers/TeamStory/TeamStory";
import LearningDevelopment from "@/components/Careers/LearningDevelopment/LearningDevelopment";
import CareersFAQ from "@/components/Careers/CareersFAQ/CareersFAQ";
import YourGrowthPartner from "@/components/Careers/YourGrowthPartner/YourGrowthPartner";

const page = () => {
    return (
        <CareersLayout
            cardBg="bg-white"
            heroContent={<CareersHeroText />}
            afterContent={
                <>
                    <WhatYouWantToDo />
                    <TeamStory />
                    <LearningDevelopment />
                    <YourGrowthPartner />
                    <CareersFAQ />
                </>
            }
        >
            <JobListing />
        </CareersLayout>
    );
};

export default page;
