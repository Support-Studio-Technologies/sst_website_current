"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import serviceDesignPhoto from "@/assets/WhatWeDo/Experience Design/Section8_ServiceDesign_Image.jpg";

const SERVICES = [
    "Service Blueprinting",
    "Customer Journey Mapping",
    "Process Design",
    "Experience Strategy",
    "Cross-Channel Optimization",
    "Stakeholder Workshop",
];

const BENEFITS = [
    "Consistent customer experiences",
    "Improved operational efficiency",
    "Better service delivery",
    "Enhanced customer loyalty",
];

export default function ServiceDesign() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[52px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-3 max-w-[1390px] mx-auto mb-10 sm:mb-[47px]"
            >
                <h2 className="text-[#0d0c22] text-2xl font-medium">Service Design</h2>
                <p className="text-black text-base sm:text-lg font-light">
                    Design Connected End-to-End Experiences
                    <br className="hidden sm:block" />
                    Service Design focuses on optimizing every customer interaction across digital and physical
                    touchpoints to deliver consistent and meaningful experiences.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-end gap-8 lg:gap-8 max-w-[1390px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full lg:w-auto shrink-0"
                >
                    <div className="bg-[#f3f1f1] w-full sm:w-[307px] min-h-[331px] p-8 flex flex-col gap-6">
                        <p className="text-black text-2xl font-normal">Services</p>
                        <ul className="list-disc pl-5 flex flex-col gap-2 text-[#7f7f7f] text-lg font-light">
                            {SERVICES.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-[#f3f1f1] w-full sm:w-[307px] min-h-[331px] p-8 flex flex-col gap-6">
                        <p className="text-black text-2xl font-normal">Benefits</p>
                        <ul className="list-disc pl-5 flex flex-col gap-2 text-[#7f7f7f] text-lg font-light">
                            {BENEFITS.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:w-[475px] h-[300px] sm:h-[420px] shrink-0 bg-[#e2dcdc] overflow-hidden"
                >
                    <Image src={serviceDesignPhoto} alt="" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
