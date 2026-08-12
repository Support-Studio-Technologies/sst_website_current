"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import integrationImage1 from "@/assets/WhatWeDo/Artificial Intelligence/Section8_AIIntegration_Image1.jpg";
import integrationImage2 from "@/assets/WhatWeDo/Artificial Intelligence/Section8_AIIntegration_Image2.jpg";

const STATS = [
    { value: "50+", label: "AI Solutions Delivered" },
    { value: "40%", label: "Faster Decision Cycles" },
    { value: "60%+", label: "Processes Automated" },
    { value: "99.9%", label: "AI Operations Availability" },
];

export default function ScalableAIDeployment() {
    return (
        <section className="w-full py-10 sm:py-10 px-6 sm:px-0 border-y-2 border-[#cac9c9]/70">
            {/* Outer container — this creates the Figma-style x-axis spacing */}
            <div className="w-full max-w-[1400px] mx-auto px-7 sm:px-8 lg:px-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-4 max-w-[600px] mx-auto text-center mb-14"
                >
                    <h2 className="text-black text-xl sm:text-2xl font-normal">
                        Scalable AI Deployment & Operational Workflows
                    </h2>

                    <p className="text-[#515151] text-sm sm:text-base font-light">
                        Detailed look at moving AI from proof-of-concept to production and agent-led automation.
                    </p>
                </motion.div>

                {/* Content */}
                <div className="flex flex-col gap-8 sm:gap-11">

                    {/* Row 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[100px]"
                    >
                        <div className="flex flex-col gap-5 w-full">
                            <p className="text-[#10161D] text-lg sm:text-2xl font-light">
                                From Pilot to Production
                            </p>

                            <p className="text-[#4A5568] text-base sm:text-lg font-light">
                                Most AI initiatives stall between proof of concept and enterprise rollout. We close that gap with implementation discipline: data readiness, integration architecture, and change management planned from the start, so pilots become platforms, not shelf ware.
                            </p>


                        </div>

                        <div className="relative w-full lg:w-[560px] h-[220px] lg:h-[297px] shrink-0 bg-[#565656]">
                            <Image
                                src={integrationImage1}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Row 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[100px]"
                    >
                        <div className="relative w-full lg:w-[560px] h-[220px] lg:h-[297px] shrink-0 bg-[#565656]">
                            <Image
                                src={integrationImage2}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-5 w-full">
                            <p className="text-[#10161D] text-lg sm:text-2xl font-light">
                                AI Agents That Work Inside Your Processes
                            </p>

                            <p className="text-[#4A5568] text-base sm:text-lg font-light">
                                We design agents around real business workflows: approvals, exceptions, reconciliations, service requests, with clear boundaries for what they execute autonomously and what they escalate to your teams.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 w-full pt-0 md:pt-6">
                        {STATS.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`
                                    flex flex-col items-center justify-center
                                    text-center
                                    px-4
                                    py-2
                                    min-h-[85px]
                                    ${index % 2 !== 0 ? "border-l border-black" : ""}
                                    ${index > 1 ? "border-t border-black lg:border-t-0" : ""}
                                    ${index > 0 ? "lg:border-l lg:border-black" : ""}
                                `}
                            >
                                <p className="text-black text-2xl sm:text-4xl font-normal leading-tight">
                                    {stat.value}
                                </p>

                                <p className="text-black text-sm sm:text-base font-normal leading-tight mt-2">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}