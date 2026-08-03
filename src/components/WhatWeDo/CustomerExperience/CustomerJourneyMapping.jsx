"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import journeyMapImg from "@/assets/WhatWeDo/Customer Experience/Section7_Image.svg";

const ITEMS = [
    {
        title: "Customer Persona Development",
        desc: "Build detailed personas grounded in real behavior, needs, and goals to guide every experience decision.",
    },
    {
        title: "Journey Stage Mapping",
        desc: "Chart every stage a customer moves through, from awareness to advocacy, to understand the full journey.",
    },
    {
        title: "Experience Optimization",
        desc: "Identify the moments that matter most and redesign them to remove friction and delight customers.",
    },
    {
        title: "Pain Point Identification",
        desc: "Pinpoint where customers struggle or drop off so you can prioritize the fixes that matter most.",
    },
    {
        title: "Touchpoint Assessment",
        desc: "Evaluate every channel and interaction for consistency, relevance, and impact on the overall journey.",
    },
];

export default function CustomerJourneyMapping() {
    return (
        <section className="w-full py-14 sm:py-20 px-6 sm:px-[50px] bg-[#ededed]">
            <div className="max-w-[1205px] mx-auto flex flex-col gap-12 sm:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-4 max-w-[1074px] mx-auto text-center"
                >
                    <h2 className="text-black text-2xl font-medium">Customer Journey Mapping</h2>
                    <p className="text-[#3d3d4e] text-lg font-normal">
                        Map Every Touchpoint That Shapes the Experience
                    </p>
                    <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                        Visualize how customers discover, evaluate, and engage with your business across every
                        channel — so you can design experiences that reduce friction and build loyalty at every
                        step.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-[111px] items-start">
                    <div className="flex flex-col gap-8 sm:gap-10 w-full lg:w-[546px] shrink-0">
                        {ITEMS.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="flex flex-col gap-5"
                            >
                                <div className="flex flex-col gap-3">
                                    <p className="text-black text-xl sm:text-2xl font-medium">{item.title}</p>
                                    <p className="text-[#3d3d4e] text-base sm:text-lg font-light">{item.desc}</p>
                                </div>
                                <div className="h-px w-[139px] bg-[#3d3d4e]/40" />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative w-full h-[320px] sm:h-[500px] lg:h-[803px] flex-1 overflow-hidden"
                    >
                        <Image src={journeyMapImg} alt="" fill className="object-cover" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
