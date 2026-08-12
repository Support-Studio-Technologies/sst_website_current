"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import card1 from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/card1.svg";
import card2 from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/card2.jpg";
import card3 from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/card3.svg";
import card4 from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/card4.svg";

const CARDS = [
    { image: card1, title: "Identity & Access Management", desc: "We design access controls that enforce least privilege across SAP and enterprise systems, including segregation of duties." },
    { image: card2, title: "Security Operations", desc: "We monitor, detect, and respond to threats continuously, not just during scheduled reviews." },
    { image: card3, title: "Governance, Risk & Compliance", desc: "We build GRC programs that meet regional regulatory requirements and give leadership real risk visibility." },
    { image: card4, title: " Zero Trust Architecture", desc: "We design access models that verify every request, so trust is never assumed by network location." },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function IdentityManagementContinuousOperations() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 sm:gap-[82px] px-6 sm:px-[70px] py-10 sm:py-[40px] pb-0c border-y-2 border-[#cac9c9]/70">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 text-center"
            >
                <h2 className="font-heading text-[#0d0c22] text-2xl font-medium">Identity Management & Continuous Operations</h2>
                <p className="text-[#6c6c6c] text-base sm:text-lg font-light">
                    Core protective pillars including IAM, GRC, SOC, and Zero Trust.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[18px] w-full"
            >
                {CARDS.map((card) => (
                    <motion.div
                        key={card.title}
                        variants={itemVariants}
                        className="group relative w-full aspect-[278/290] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.19)]"
                    >
                        <Image src={card.image} alt="" fill className="object-cover" />
                        {/* Bottom-anchored text block: Figma's default state shows only the title
                            sitting low in the card (~12% inset); the hover state (shown on one card
                            in the design as the "active" example) reveals the description below it.
                            Anchoring to `bottom` instead of `top` means the block grows upward as the
                            description expands, reproducing that shift without hand-tuned positions
                            per state. text-2xl/text-lg + font-light match Figma's actual type spec
                            (24px/18px, Manrope Light) — larger and lighter than the previous
                            text-lg font-medium, which read visually heavier/bigger than intended. */}
                        <div className="absolute left-[12%] right-[12%] bottom-[10%] sm:bottom-[12%] flex flex-col text-white">
                            <p className="text-2xl font-light">{card.title}</p>
                            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                                <div className="overflow-hidden">
                                    <p className="text-base font-light pt-2">{card.desc}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
