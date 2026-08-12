"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import workflowPhoto from "@/assets/WhatWeDo/Intelligent Automation/Section4_image.svg";

const SERVICES = [
    "Process Mining Before Automation",
    "SAP-Integrated Automation Delivery",
    "Hyper Automation Capability",
    "Governance and Monitoring Built In",
    "Exception Handling by Design",
    "Proven High-Volume Deployments",
];

export default function WhyPartnerWithUs() {
    return (
        <section className="relative w-full h-auto lg:h-[697px] sm:my-10 overflow-hidden">

            {/* ===== Desktop / Tablet ===== */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[1055px] mx-auto text-center mb-10 sm:mb-[45px]"
            >
                <h2 className="text-black text-2xl font-medium">Why Partner With Us</h2>
                <p className="text-[#6c6c6c] text-base sm:text-lg font-light">
                    Our proven methods for building automation that remains
                    maintainable at scale.
                </p>
            </motion.div>

            {/* Right Gray Content Panel */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="
                    hidden sm:block
                    absolute
                    right-0
                    top-0
                    w-[calc(100%-32%)]
                    lg:w-[68%]
                    h-[500px]
                    bg-[#e2e2e2]
                    sm:mt-30
                    overflow-hidden
                "
            >


                <div className="absolute left-[17%] top-[160px] sm:ml-5">
                    <ul className="space-y-2">
                        {SERVICES.map((item) => (
                            <li
                                key={item}
                                className="text-[#6c6c6c] text-xl  font-light leading-7 list-disc list-inside"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            {/* Left Image */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="hidden sm:block absolute left-0 top-[161px] w-[40%] lg:w-[41%] h-[536px] z-10 overflow-hidden"
            >
                <Image
                    src={workflowPhoto}
                    alt=""
                    fill
                    className="object-cover"
                />
            </motion.div>

            {/* Accent lines */}
            <div className="hidden sm:block absolute left-[8%] top-[92px] w-px h-[114px] bg-[#2d8ec5] z-20" />

            <div className="hidden sm:block absolute left-[7.5%] top-[650px] w-[43%] h-px bg-[#2d8ec5]" />

            {/* ===== Mobile ===== */}

            <div className="sm:hidden w-full flex flex-col">
                <div className="relative w-full h-[260px]">
                    <Image
                        src={workflowPhoto}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative bg-[#e2e2e2] px-6 py-10 flex flex-col gap-8"
                >
                    <h2 className="text-black text-2xl font-normal">
                        Why Partner With Us
                    </h2>

                    <p className="text-[#6c6c6c] text-base font-light">
                        Our proven methods for building automation that remains
                        maintainable at scale.
                    </p>

                    <ul className="list-disc list-inside space-y-1">
                        {SERVICES.map((item) => (
                            <li
                                key={item}
                                className="text-[#6c6c6c] text-base font-light"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}

