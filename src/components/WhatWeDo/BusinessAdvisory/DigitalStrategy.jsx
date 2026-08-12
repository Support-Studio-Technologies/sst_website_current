"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import card1 from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/card1.svg";
import card2 from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/card2.jpg";
import card3 from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/card3.svg";
import card4 from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/card4.svg";

const CARDS = [
    {
        image: card1,
        title: "Business Strategy",
        desc: "We help leadership define the strategic direction that technology and operations investment should follow.",
    },
    {
        image: card2,
        title: "Enterprise Architecture",
        desc: "We design the architecture that keeps your systems, processes, and data aligned to strategy as you scale.",
    },
    {
        image: card3,
        title: "Transformation Roadmap",
        desc: "We translate strategy into a sequenced, resourced roadmap that leadership can actually execute against.",
    },
    {
        image: card4,
        title: "Business Process Consulting",
        desc: "We assess how your business actually operates and identify where process change delivers real value.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function DigitalStrategy() {
    return (
        <div className="w-full h-full bg-[#F3F6F9] flex flex-col items-center justify-center gap-10 sm:gap-[82px] px-6 sm:px-[70px] py-10 sm:py-[40px] pb-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 text-center"
            >
                <h2 className="font-heading text-[#0d0c22] text-2xl font-medium">Digital Strategy</h2>
                <p className="text-[#6c6c6c] text-base sm:text-lg font-light">
                    Accelerate Your Digital Transformation
                    <br />
                    <br />
                    Create comprehensive digital strategies that leverage modern technologies to improve customer
                    experiences, operational efficiency, and business agility.
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
                        {/* Bottom-anchored text block: default state shows only the title sitting
                            low in the card (~12% inset); hover reveals the description below it.
                            Anchoring to `bottom` instead of `top` means the block grows upward as the
                            description expands, matching the Identity Management card behavior. */}
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
