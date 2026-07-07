"use client";

import React, { useEffect, useState } from "react";
import AboutHeader from "@/components/About us/Header";
import CommonConsultation from "@/components/CommonComponents/CommonConsulationCard";
import Footer from "@/components/Footer/Footer";
import EnterpriseCard from "@/components/About us/EnterpriseCard";
import FAQ from "@/components/Home/FAQ";
import InpageNavbar from "@/components/Navbar/inpagenavbar";

const sections = [
  { heading: "About" },
  { heading: "Enterprise" },
  { heading: "Consultation" },
  { heading: "FAQ" },
];

const Page = () => {
  const [activeSectionId, setActiveSectionId] = useState("section-0");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    const offset = 120;

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0.25,
      }
    );

    sections.forEach((_, index) => {
      const el = document.getElementById(`section-${index}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AboutHeader />

      <InpageNavbar
        sections={sections}
        activeSectionId={activeSectionId}
        scrollToSection={scrollToSection}
      />

      <section id="section-0" className="scroll-mt-32">
        <div className="max-w-7xl mx-auto py-12">
          <h2 className="text-3xl font-bold mb-6">About</h2>
        </div>
      </section>

      <section id="section-1" className="scroll-mt-32">
        <EnterpriseCard />
      </section>

      <section id="section-2" className="scroll-mt-32">
        <CommonConsultation
          backgroundImage="/AboutPage/aboutus.png"
          backgroundAlt="Business Solutions"
          title="Let’s Build the Future Together"
          description="Whether you're starting your digital transformation journey or scaling to the next level, SST is here to guide you with expertise, innovation, and trusted partnerships."
          buttonText="Schedule a demo"
          onButtonClick={() => console.log("Get Started clicked")}
        />
      </section>

      <section id="section-3" className="scroll-mt-32">
        <FAQ />
      </section>

      <Footer />
    </>
  );
};

export default Page;