"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import serviceDesignPhoto from "@/assets/WhatWeDo/Experience Design/Section8_ServiceDesign_Image.jpg";

const SERVICES = [
    "We design CRM implementations around how your sales and service teams actually work, not a generic template, so adoption happens naturally instead of by mandate.",
];

const BENEFITS = [
    "We build omnichannel experiences where context follows the customer, from a marketing campaign through to a service call, so no interaction starts from zero",
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
                <h2 className="text-[#0d0c22] text-2xl font-medium">Team Adoption & Seamless Context</h2>
                <p className="text-black text-base sm:text-lg font-light">Why our approach to customer experience drives long-term adoption.</p>
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
                        <p className="text-black text-2xl font-normal">
                            CRM That Sales Teams Actually Use                        </p>
                        <ul className="list-disc pl-5 flex flex-col gap-2 text-[#7f7f7f] text-lg font-light">
                            {SERVICES.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-[#f3f1f1] w-full sm:w-[307px] min-h-[331px] p-8 flex flex-col gap-6">
                        <p className="text-black text-2xl font-normal">
                            Connected Journeys Across Every Channel                        </p>
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
