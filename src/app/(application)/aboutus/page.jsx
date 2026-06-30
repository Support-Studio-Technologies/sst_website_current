"use client";
import React from "react";
import AboutHeader from "@/components/About us/Header";
import CommonConsultation from "@/components/CommonComponents/CommonConsulationCard";
import Footer from "@/components/Footer/Footer";
import EnterpriseCard from "@/components/About us/EnterpriseCard";
import OurStorySection from "@/components/About us/OurStorySection";
import AboutMap from "@/components/About us/AboutMap";
import GlobalPresenceMap from "@/components/sections/GlobalPresenceMap";
import AboutValues from "@/components/About us/AboutValues";
import MessageFromCEO from "@/components/About us/CEOSection";
import AboutMission from "@/components/About us/AboutMission";
const page = () => {
  return (
    <>
      <AboutHeader />
      <EnterpriseCard />
      <OurStorySection />
      <MessageFromCEO />
      <AboutMission />
       <AboutValues />
      {/* <AboutMap /> */}
      <GlobalPresenceMap />
      <CommonConsultation
        backgroundImage="/AboutPage/aboutus.png"
        backgroundAlt="Business Solutions"
        title="Let’s Build the Future Together"
        description="Whether you’re starting your digital transformation journey or scaling to the next level,
         SST is here to guide you with expertise, innovation, and trusted partnerships. Connect with us to explore
          how we can transform your enterprise."
        buttonText="Schedule a demo"
        onButtonClick={() => console.log("Get Started clicked")}
      />{" "}
      <Footer />
    </>
  );
};

export default page;
