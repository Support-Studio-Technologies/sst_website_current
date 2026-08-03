"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import highlightBg from "@/assets/WhatWeDo/Experience Design/Section7_UserResearch_Bg.png";

const COLUMNS = [
    {
        title: "Accessibility Audits",
        items: ["Inclusive user experiences", "Regulatory compliance", "Expanded audience reach", "Improved usability for all users"],
    },
    {
        title: "User Research",
        items: ["Understanding user needs", "Identifying pain points", "Validating design decisions", "Enhancing product functionality"],
    },
    {
        title: "Prototyping",
        items: ["Rapid iteration", "User testing feedback", "Cost-effective design validation", "Clear communication of ideas"],
    },
    {
        title: "Visual Design",
        items: ["Brand identity alignment", "Emotional connection with users", "Enhanced aesthetics and engagement", "Consistency across platforms"],
    },
];

export default function Accessibility() {
    return (
        <section className="w-full py-10 sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-[46px] px-6"
            >
                <h2 className="text-[#0d0c22] text-2xl font-medium">Accessibility</h2>
                <p className="text-black text-base sm:text-lg font-light">
                    We create inclusive digital experiences that are accessible to users of all abilities while
                    meeting international accessibility standards.
                </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 border border-black/70 w-full  mx-auto">
                {COLUMNS.map((col, index) => (
                    <motion.div
                        key={col.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                        className="group relative border border-black/70  px-6 py-10 sm:py-14 min-h-[380px] sm:min-h-[620px] overflow-hidden text-black transition-colors duration-300 hover:text-white"
                    >
                        <div
                            aria-hidden
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        >
                            <div className="absolute inset-0 bg-[#0a2b3e]/90" />
                        </div>
                        <div className="relative md:mt-15 flex flex-col gap-12 sm:gap-16">
                            <p className="text-xl sm:text-[32px] font-normal">{col.title}</p>
                            <ul className="list-disc pl-5 flex flex-col gap-2 text-sm sm:text-lg font-light">
                                {col.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
