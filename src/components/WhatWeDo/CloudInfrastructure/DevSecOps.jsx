"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import devSecOpsBg from "@/assets/WhatWeDo/Cloud and Infrastructure/Section8_Bg.svg";

export default function DevSecOps() {
    return (
        <section className="w-full px-6 sm:px-0">
            <div className="relative w-full max-w-screen mx-auto h-[380px] sm:h-[440px] lg:h-[488px] overflow-hidden">
                <Image src={devSecOpsBg} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 sm:from-white/80 via-white/10 to-transparent" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative h-full flex flex-col justify-center gap-4 sm:gap-6 max-w-[500px] px-6 sm:px-[52px]"
                >
                    <p className="text-black text-2xl sm:text-[32px] font-medium">DevSecOps</p>
                    <p className="text-black text-xl sm:text-2xl font-normal">
                        Integrate Security into Every Stage of Delivery
                    </p>
                    <p className="text-black text-base sm:text-lg font-light">
                        Embed security throughout the software development lifecycle by combining development,
                        operations, and security into a unified delivery process.
                    </p>
                    <p className="text-[#2d8ec5] text-base sm:text-lg font-light">DevSecOps Services</p>
                </motion.div>
            </div>
        </section>
    );
}
