"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import rpaStrategyPhoto from "@/assets/WhatWeDo/Intelligent Automation/Section3_card1_RPA_Strategy_Consulting.svg";
import processAutomationPhoto from "@/assets/WhatWeDo/Intelligent Automation/Section3_card2_Process_Automation.svg";
import botDevelopmentPhoto from "@/assets/WhatWeDo/Intelligent Automation/Section3_card3_Bot_Development.svg";
import legacySystemPhoto from "@/assets/WhatWeDo/Intelligent Automation/Section3_card4_Legacy_System_Automation.svg";
import botMonitoringPhoto from "@/assets/WhatWeDo/Intelligent Automation/Section3_card5_Bot_Monitorin_Maintenance.svg";
import rpaGovernancePhoto from "@/assets/WhatWeDo/Intelligent Automation/Section3_card6_RPA_Governance.svg";

const CARDS = [
    {
        title: "RPA Strategy & Consulting",
        desc: "Identify the highest-value automation opportunities and build a roadmap before writing a single bot.",
        image: rpaStrategyPhoto,
    },
    {
        title: "Process Automation",
        desc: "Automate multi-step business processes end-to-end, from trigger to completion.",
        image: processAutomationPhoto,
    },
    {
        title: "Bot Development",
        desc: "Build and deploy software robots that handle repetitive, rules-based tasks reliably at scale.",
        image: botDevelopmentPhoto,
    },
    {
        title: "Legacy System Automation",
        desc: "Automate around legacy systems that can't be easily replaced, without disrupting what already works.",
        image: legacySystemPhoto,
    },
    {
        title: "Bot Monitoring & Maintenance",
        desc: "Keep your automation fleet healthy with proactive monitoring, exception handling, and upkeep.",
        image: botMonitoringPhoto,
    },
    {
        title: "RPA Governance",
        desc: "Establish the controls and standards that keep a growing bot fleet secure, auditable, and manageable.",
        image: rpaGovernancePhoto,
    },
];

export default function OurIntelligentAutomationServices() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[1055px] mx-auto text-center mb-10 sm:mb-[45px]"
            >
                <h2 className="text-black text-2xl font-medium">Our Intelligent Automation Services</h2>
                <p className="text-[#6c6c6c] text-base sm:text-lg font-light">
                    Use predictive analytics and AI models to forecast trends, reduce risks, optimize operations, and
                    support proactive decision-making.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[33px] max-w-[1400px] mx-auto">
                {CARDS.map((card, index) => {
                    const imageOnBottom = index % 3 === 1;
                    return (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
                            className={`bg-[#f5f5f5] flex flex-col gap-4 p-4 ${
                                imageOnBottom ? "flex-col-reverse" : ""
                            }`}
                        >
                            <div className="relative w-full h-[138px] border border-[#d4d3d3] shrink-0">
                                <Image src={card.image} alt="" fill className="object-cover" />
                            </div>
                            <div className="border border-[#d4d3d3] p-4 flex flex-col gap-4">
                                <p className="text-black text-xl sm:text-2xl font-normal">{card.title}</p>
                                <p className="text-[#7f7f7f] text-sm sm:text-base font-light">{card.desc}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}