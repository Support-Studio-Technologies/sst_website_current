"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import introPhoto from "@/assets/WhatWeDo/Innovation & Emerging Technologies/Section2_image.svg";

export default function Intro() {
    return (
        <section className="w-full py-10 sm:py-10 px-6 sm:px-[50px] flex flex-col sm:flex-row items-center gap-10 sm:gap-[80px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-5 max-w-[760px]"
            >
                <h2 className="text-black text-2xl font-normal">Our Design Capabilities
                </h2>
                <p className="text-black text-lg font-light">
                    Key differentiators of our design practice
                </p>
                <p className="text-[#3d3d4e] text-lg font-light">
                    Research-led design process
                    Enterprise UX specialization
                    Reusable design systems
                    Accessibility built in
                    Engineering-ready handoff
                    Cross-platform design capability
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full lg:w-full h-[260px] lg:h-[360px] justify-self-end overflow-hidden"
            >
                <Image src={introPhoto} alt="" fill className="object-cover" />
            </motion.div>
        </section>
    );
}
