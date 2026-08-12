"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import introPhoto from "@/assets/WhatWeDo/Innovation & Emerging Technologies/Section2_image.svg";

export default function Intro() {
    return (
        <section className="w-full py-10 px-6 sm:mt-10 sm:px-[50px]">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 text-center mb-10 sm:mb-16"
            >
                <h2 className="text-black text-2xl font-medium">
                    Software Scalability
                </h2>

                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Positioning enterprise software as a driver of agility rather than operational constraint.
                </p>
            </motion.div>

            {/* Content + Image */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[80px]">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex flex-col gap-5"
                >
                    <h2 className="text-black text-2xl font-normal">
                        Positioning enterprise software as a driver of agility
                        rather than operational constraint.
                    </h2>

                    <p className="text-[#3d3d4e] text-lg font-light">
                        Introductory Focus: Enterprise applications age fast
                        when they are built without architecture discipline. We
                        engineer software, from customer-facing platforms to
                        internal enterprise systems, built for performance,
                        integration, and long-term maintainability, not just
                        launch day.
                    </p>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.1,
                    }}
                    className="relative w-full lg:w-1/2 h-[260px] lg:h-[360px] overflow-hidden"
                >
                    <Image
                        src={introPhoto}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
