"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import mdmBg from "@/assets/WhatWeDo/Data Inteligent/Section9_Bg.svg";

const STATS = [
    { value: "70+", label: "Data Sources Integrated" },
    { value: "100+", label: "Automated Data Pipelines" },
    { value: "56", label: "Governance Policies Enforced" },
    { value: "100%", label: "Data Accuracy SLA" },
];

export default function MasterDataManagement() {
    return (
        <section className="w-full py-10 sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[50px] max-w-[1180px] mx-auto px-6 sm:px-[50px] mb-10 sm:mb-[50px]"
            >
                <h2 className="text-black text-xl sm:text-2xl font-medium shrink-0 lg:w-[280px]">
                    Discover Opportunities Hidden in Your Data
                </h2>
                <div className="hidden lg:block w-px h-[100px] bg-[#a4a7a5] shrink-0" />
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Leverage advanced analytical techniques to predict trends, optimize operations, and support
                    strategic business planning across every function of the enterprise.
                </p>
            </motion.div>

            <div className="bg-[#ededed] py-10 sm:py-[50px] px-6">
                <p className="text-[#2d8ec5] text-2xl font-medium text-center mb-8 sm:mb-[50px]">
                    Data Intelligence
                </p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="grid grid-cols-2 lg:flex lg:items-center lg:justify-center gap-4 sm:gap-[20px] max-w-[1120px] mx-auto"
                >
                    {STATS.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-white flex flex-col items-center justify-center text-center gap-2 h-[140px] sm:h-[161px] w-full lg:w-[234px] px-4"
                        >
                            <p className="text-[#2d8ec5] text-2xl font-medium">{stat.value}</p>
                            <p className="text-black text-sm sm:text-base font-light">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full h-[360px] sm:h-[471px] overflow-hidden mt-10 sm:mt-0"
            >
                <Image src={mdmBg} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col justify-center gap-4 sm:gap-6 px-6 sm:px-[52px] max-w-[650px]">
                    <p className="text-white text-2xl sm:text-[32px] font-medium">
                        Master Data Management (MDM)
                    </p>
                    <p className="text-white text-lg sm:text-2xl font-normal">Ensure Trusted Enterprise Data</p>
                    <p className="text-white/90 text-base sm:text-xl font-light">
                        Create a single, trusted source for critical business data by standardizing, cleansing,
                        and governing enterprise information.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
