"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import integrationImage1 from "@/assets/WhatWeDo/Artificial Intelligence/Section8_AIIntegration_Image1.jpg";
import integrationImage2 from "@/assets/WhatWeDo/Artificial Intelligence/Section8_AIIntegration_Image2.jpg";


export default function ScalableAIDeployment() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[85px]">
            <div className="flex flex-col gap-10 sm:gap-[70px] max-w-screen mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-4 max-w-[560px] mx-auto text-center"
                >
                    <h2 className="text-black text-2xl sm:text-[28px] font-medium">
                        Scalable AI Deployment &amp; Operational Workflows
                    </h2>
                    <p className="text-[#515151] text-base sm:text-lg font-light">
                        Detailed look at moving AI from proof-of-concept to production and agent-led automation.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[100px]"
                >
                    <div className="flex flex-col gap-5 w-full">
                        <p className="text-black text-lg sm:text-2xl font-light">From Pilot to Production:</p>
                        <p className="text-[#4a5568] text-base sm:text-lg font-light">
                            Most AI initiatives stall between proof of concept and enterprise rollout. We close that gap with implementation discipline: data readiness, integration architecture, and change management planned from the start, so pilots become platforms, not shelfware.
                        </p>
                    </div>
                    <div className="relative w-full lg:w-[560px] h-[220px] lg:h-[297px] shrink-0 bg-[#565656]">
                        <Image src={integrationImage1} alt="" fill className="object-cover" />
                    </div>
                </motion.div>

                <div className="flex flex-col gap-8 sm:gap-11">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[100px]"
                    >
                        <div className="relative w-full lg:w-[560px] h-[220px] lg:h-[297px] shrink-0 bg-[#565656]">
                            <Image src={integrationImage2} alt="" fill className="object-cover" />
                        </div>
                        <div className="flex flex-col gap-5 w-full">
                            <p className="text-black text-lg sm:text-2xl font-light">
                                AI Agents That Work Inside Your Processes:
                            </p>
                            <p className="text-[#4a5568] text-base sm:text-lg font-light">
                                We design agents around real business workflows: approvals, exceptions,
                                reconciliations, service requests, with clear boundaries for what they execute
                                autonomously and what they escalate to your teams.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

