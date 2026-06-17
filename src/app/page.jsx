"use client";
import Image from "next/image";
import Home from "./../components/Home/Home";
import Footer from "./../components/Footer/Footer";
import TestimonialsPage from "./../components/Home/Testinomials";
import HowItWork from "./../components/Home/HowItWork";
import OurProject from "./../components/Home/OurProject";
import WhoWeAre from "./../components/Home/WhoWeAre";
import Feauture from "./../components/Home/OurFeatures";
import OurService from "./../components/Home/OurService";
import Navbar from "../components/Navbar/Navbar";
import { motion } from "framer-motion";
import CyclingMarquee from "../components/Home/MarqueContainer";
import FAQ from "../components/Home/FAQ";
import HomeCard from "../components/Cards/MeetingCard";
import Animation from "@/components/Home/Logo";
export default function Page() {
  const partnerLogos = [
    { src: "/PartnerLogos/sap.png", alt: "SAP" },
    { src: "/PartnerLogos/appian.png", alt: "Appian" },
    { src: "/PartnerLogos/automation.png", alt: "Automation Anywhere" },
    { src: "/PartnerLogos/confluence.png", alt: "Confluence" },
    { src: "/PartnerLogos/couchbase.png", alt: "Couchbase" },
    { src: "/PartnerLogos/databricks.png", alt: "Databricks" },
    { src: "/PartnerLogos/google.png", alt: "Google" },
    { src: "/PartnerLogos/kafka.png", alt: "Kafka" },
    { src: "/PartnerLogos/mcafee.png", alt: "McAfee" },
    { src: "/PartnerLogos/microsoft.png", alt: "Microsoft" },
    { src: "/PartnerLogos/mongo.png", alt: "MongoDB" },
    { src: "/PartnerLogos/odoo.png", alt: "Odoo" },
    { src: "/PartnerLogos/opon.png", alt: "OpenText" },
    { src: "/PartnerLogos/redis.png", alt: "Redis" },
    { src: "/PartnerLogos/salesforce.png", alt: "Salesforce" },
    { src: "/PartnerLogos/sophos.png", alt: "Sophos" },
    { src: "/PartnerLogos/uipath.png", alt: "UiPath" },
  ];
 
  return (
    <div className="relative overflow-x-hidden">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="relative h-screen w-full flex flex-col">
          <Image
            src="/Home/HomeBG.webp"
            alt="Background"
            fill
            priority
            className="object-cover object-top z-0"
          />
 
          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2))`,
              backgroundBlendMode: "overlay",
            }}
          />
 
          <Navbar />
 
          <div className="flex min-h-screen items-center justify-center px-4 sm:px-8 lg:px-16 relative z-20 mt-8">
            <div className="flex-1 flex flex-col md:flex-row items-start justify-center">
              {/* Text Content */}
              <div className="flex-1 flex items-start justify-center py-8 md:py-0 -mt-2">
                <div className="text-center md:text-left max-w-5xl mx-auto">
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-white
                                text-[clamp(1.6rem,3vw,2.4rem)]
                                md:text-[clamp(2rem,3.5vw,2.8rem)]
                                lg:text-[clamp(2.4rem,4vw,3.2rem)]
                                xl:text-[clamp(2.8rem,4.5vw,3.6rem)]
                                tracking-wide md:leading-tight
                                drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
                  >
                    <span>From</span>{" "}
                    <span className="font-semibold">Challenges</span> to
                    <br />
                    Solutions - <span className="font-semibold">SAP </span>{" "}
                    Services Perfected
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="mt-4 text-white text-[clamp(0.9rem,1.5vw,1.1rem)] md:text-[clamp(1rem,1.6vw,1.2rem)] lg:text-[clamp(1.1rem,1.7vw,1.3rem)] xl:text-[clamp(1.2rem,1.8vw,1.4rem)]
            drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
                  >
                    From innovative marketing strategies to operational
                    excellence, we provide expert guidance to help your business
                    grow, scale, and thrive.
                  </motion.p>
                </div>
              </div>
 
              {/* Home Card */}
              <div className="flex-1 flex justify-center items-start py-8 md:py-0">
                <HomeCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Animation /> */}
      <Home />
      <CyclingMarquee
        logos={partnerLogos}
        logosPerSet={6}
        intervalTime={2000}
      />
      <OurService />
      <Feauture />
      <WhoWeAre />
      <OurProject />
      <HowItWork />
      <TestimonialsPage />
      <FAQ />
      <Footer />
    </div>
  );
}
 
 