"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bgImg from "@/assets/WhatWeDo/Customer Experience/Section8_Bottom_Image.svg";

const CARDS = [
    {
        title: "Omnichannel Strategy Cross-Channel Integration",
        desc: "Create connected customer journeys across web, mobile, social media, email, contact centers, and physical locations.",
    },
    {
        title: "Unified Customer Profiles",
        desc: "Consolidate customer data from every channel into a single, real-time profile that travels with them everywhere.",
    },
    {
        title: "Channel Performance Optimization",
        desc: "Measure and continuously improve performance across every channel to maximize engagement and ROI.",
    },
    {
        title: "Personalized Engagement Digital Experience Platforms",
        desc: "Deliver tailored content and offers in real time through modern digital experience platforms.",
    },
];

export default function OmnichannelExperience() {
    return (
        <section className="relative w-full py-14 sm:py-20 overflow-hidden">
            <div className="absolute inset-0">
                <Image src={bgImg} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-white/90" />
            </div>

            <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-[50px] flex flex-col gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 max-w-[400px]"
                >
                    <h2 className="text-black text-2xl font-medium">Omnichannel Experience</h2>
                    <p className="text-black text-base sm:text-lg font-light">
                        Create connected customer journeys across web, mobile, social media, email, contact
                        centers, and physical locations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-[700px] sm:ml-auto">
                    {CARDS.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="flex flex-col gap-5 bg-white border border-[#404040]/30 px-6 py-8 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <p className="text-black text-xl sm:text-2xl font-light">{card.title}</p>
                            <div className="h-px w-full bg-black/15" />
                            <p className="text-[#7f7f7f] text-base sm:text-lg font-light">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
