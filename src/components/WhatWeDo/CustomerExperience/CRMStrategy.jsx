"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import crmAssessmentImg from "@/assets/WhatWeDo/Customer Experience/Section2_Card1.svg";
import crmRoadmapImg from "@/assets/WhatWeDo/Customer Experience/Section2_Card2.svg";
import customerDataStrategyImg from "@/assets/WhatWeDo/Customer Experience/Section2_Card3.svg";
import prevArrow from "@/assets/WhatWeDo/Customer Experience/Icons/Section2_arrow.svg";
import nextArrow from "@/assets/WhatWeDo/Customer Experience/Icons/Section2_arrow2.svg";

const CARDS = [
    {
        title: "CRM Assessment",
        desc: "Evaluate your current CRM maturity, adoption, and data quality to uncover quick wins and structural gaps.",
        image: crmAssessmentImg,
    },
    {
        title: "CRM Roadmap",
        desc: "Build a phased CRM roadmap that sequences capabilities, integrations, and change management for lasting adoption.",
        image: crmRoadmapImg,
    },
    {
        title: "Customer Data Strategy",
        desc: "Establish a single source of truth for customer data with clear governance, quality standards, and access controls.",
        image: customerDataStrategyImg,
    },
];

export default function CRMStrategy() {
    const scrollerRef = useRef(null);

    const scrollByCard = (direction) => {
        const node = scrollerRef.current;
        if (!node) return;
        node.scrollBy({ left: direction * 312, behavior: "smooth" });
    };

    return (
        <section className="w-full py-14 sm:py-20 px-6 sm:px-[50px]">
            <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 max-w-[374px] shrink-0"
                >
                    <h2 className="text-[#0d0c22] text-2xl font-medium">CRM Strategy</h2>
                    <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                        Develop customer relationship management strategies that align sales, marketing, and
                        service operations to deliver consistent customer experiences.
                    </p>
                </motion.div>

                <div className="relative flex-1 flex items-stretch gap-4">
                    <div className="hidden lg:block w-[10px] shrink-0 bg-[#2d8ec5]" />

                    <div className="flex-1 flex flex-col gap-6">
                        <div
                            ref={scrollerRef}
                            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                        >
                            {CARDS.map((card, index) => (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group snap-start shrink-0 w-[280px] bg-white shadow-[1px_1px_18px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-2"
                                >
                                    <div className="relative w-full h-[164px] overflow-hidden">
                                        <Image
                                            src={card.image}
                                            alt=""
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 px-6 py-6">
                                        <p className="text-black text-lg font-medium">{card.title}</p>
                                        <p className="text-[#3d3d4e] text-base font-light">{card.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                type="button"
                                aria-label="Previous"
                                onClick={() => scrollByCard(-1)}
                                className="flex items-center justify-center size-[52px] transition-transform duration-300 hover:scale-110 hover:opacity-80"
                            >
                                <Image src={prevArrow} alt="" width={52} height={52} />
                            </button>
                            <button
                                type="button"
                                aria-label="Next"
                                onClick={() => scrollByCard(1)}
                                className="flex items-center justify-center size-[52px] transition-transform duration-300 hover:scale-110 hover:opacity-80"
                            >
                                <Image src={nextArrow} alt="" width={52} height={52} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
