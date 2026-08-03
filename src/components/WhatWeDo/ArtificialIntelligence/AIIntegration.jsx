"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import integrationImage1 from "@/assets/WhatWeDo/Artificial Intelligence/Section8_AIIntegration_Image1.jpg";
import integrationImage2 from "@/assets/WhatWeDo/Artificial Intelligence/Section8_AIIntegration_Image2.jpg";

const CAPABILITIES = [
    "Custom Business Applications",
    "Web & Mobile Development",
    "Enterprise Applications",
    "Cloud-Native Development",
];

const STATS = [
    { value: "99.9%", label: "Availability" },
    { value: "< 2 Sec", label: "Average Response Time" },
    { value: "24×7", label: "Application Monitoring" },
    { value: "Zero", label: "Downtime Deployment Strategy" },
];

export default function AIIntegration() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[100px]">
            <div className="flex flex-col gap-10 sm:gap-[70px] max-w-screen mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[21px]"
                >
                    <div className="relative w-full lg:w-[468px] h-[220px] lg:h-[297px] shrink-0 bg-[#565656]">
                        <Image src={integrationImage1} alt="" fill className="object-cover" />
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <p className="text-[#2d8ec5] text-2xl sm:text-4xl font-normal">AI Integration</p>
                        <p className="text-black text-lg sm:text-2xl font-light">Connect AI Across Your Enterprise</p>
                        <p className="text-[#515151] text-base sm:text-2xl font-light">
                            Integrate AI capabilities seamlessly into existing business applications, workflows, and
                            enterprise platforms to maximize business impact.
                        </p>
                        <p className="text-[#515151] text-base sm:text-lg font-light">
                            Pre-built connectors and flexible APIs mean faster time-to-value without disrupting the
                            systems your teams already rely on.
                        </p>
                    </div>
                </motion.div>

                <div className="flex flex-col gap-8 sm:gap-11">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[23px]"
                    >
                        <div className="relative w-full lg:w-[628px] h-[220px] lg:h-[293px] shrink-0 bg-[#565656]">
                            <Image src={integrationImage2} alt="" fill className="object-cover" />
                        </div>
                        <ul className="list-disc pl-6 flex flex-col gap-2 text-[#515151] text-base sm:text-2xl font-light w-full">
                            {CAPABILITIES.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:flex lg:items-start lg:justify-between gap-x-6 gap-y-8 lg:gap-0">
                        {STATS.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`flex flex-col gap-1 pr-6 ${
                                    index !== STATS.length - 1 ? "lg:border-r lg:border-black" : ""
                                }`}
                            >
                                <p className="text-black text-2xl sm:text-4xl font-normal">{stat.value}</p>
                                <p className="text-black text-sm sm:text-base font-normal">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
