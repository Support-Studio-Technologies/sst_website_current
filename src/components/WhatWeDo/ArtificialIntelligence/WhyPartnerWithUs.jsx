"use client";

import { motion } from "framer-motion";

export default function WhyPartnerWithUs() {
    return (
        <section className="w-full">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start max-w-[1152px] mx-auto px-6 sm:px-[50px] py-10 lg:py-[40px]">
                <div className="grid w-full lg:grid-cols-[1fr_auto_1fr] items-center gap-10">

                    {/* Left */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="justify-self-start text-2xl font-medium text-black"
                        >
                            Why Partner With Us
                        </motion.h2>
                        <p className="mb-4">
                            Key advantages of partnering with us for AI transformation.
                        </p>
                    </div>


                    {/* Middle Line */}
                    <div className="hidden lg:flex justify-center">
                        <div className="w-0.5 h-40 bg-gradient-to-b from-[#58d2ff] via-[#2d8ec5] to-[#1e6ea1]" />
                    </div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="justify-self-end max-w-[467px] text-left text-[#3d3d4e] text-base sm:text-lg font-light"
                    >

                        <p className="mb-4">
                            SAP-certified delivery teams
                        </p>

                        <p className="mb-4">
                            GCC regulatory awareness

                            Governance built into every deployment

                            Proven enterprise integration experience

                            Outcome-based engagement models

                            Cross-industry delivery track record
                        </p>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
