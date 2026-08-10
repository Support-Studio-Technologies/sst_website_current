"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import cloudMigrationIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/cloud-migration.svg";
import modernizationIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/modernization.svg";
import hybridCloudIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/hybrid-cloud.svg";
import multiCloudStrategyIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/multi-cloud-strategy.svg";

const ITEMS = [
    {
        icon: cloudMigrationIcon,
        title: "Cloud Migration",
        desc: "We move workloads to the cloud with a sequenced plan that protects uptime and data integrity throughout the transition.",
    },
    {
        icon: modernizationIcon,
        title: "Modernization",
        desc: "We re-architect legacy environments to take full advantage of cloud native performance, cost, and scalability.",
    },
    {
        icon: hybridCloudIcon,
        title: "Hybrid Cloud",
        desc: "We design environments that balance on-premise control with cloud flexibility, matched to your compliance requirements.",
    },
    {
        icon: multiCloudStrategyIcon,
        title: "Multi-Cloud Strategy",
        desc: "We build architectures that avoid vendor lock-in and route workloads to the platform best suited for each.",
    },
];

export default function CloudMigrationHybridStrategy() {
    return (
        <section className="w-full py-10 sm:py-[55px] px-6 sm:px-[50px]">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-[79px] max-w-[1390px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 w-full lg:w-[442px] shrink-0 lg:sticky lg:top-28"
                >
                    <h2 className="text-[#0d0c22] text-2xl font-medium">Cloud Migration &amp; Hybrid Strategy</h2>
                    <p className="text-black text-lg font-light">
                        Modernization, hybrid models, and multi-cloud environments.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col gap-8 sm:gap-14 w-full"
                >
                    {ITEMS.map((item) => (
                        <div key={item.title} className="flex flex-col gap-4 sm:gap-[22px]">
                            <div className="flex items-center gap-6 sm:gap-9">
                                <div className="relative size-[44px] sm:size-[72px] shrink-0">
                                    <Image src={item.icon} alt="" fill className="object-contain" />
                                </div>
                                <div className="hidden sm:block w-px self-stretch bg-[#7f7f7f]" />
                                <div className="flex-1 min-w-0 flex flex-col gap-2 sm:gap-3">
                                    <p className="text-black text-xl sm:text-[28px] font-normal">{item.title}</p>
                                    <p className="text-[#7f7f7f] text-base sm:text-xl font-light">{item.desc}</p>
                                </div>
                            </div>
                            <div className="h-px w-full bg-[#a4a7a5]" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
