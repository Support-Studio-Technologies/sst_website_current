"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import contentGenPhoto from "@/assets/WhatWeDo/Artificial Intelligence/Section3_Card1_ContentGeneration.jpg";
import documentIntelPhoto from "@/assets/WhatWeDo/Artificial Intelligence/Section3_Card2_DocumentIntelligence.jpg";
import knowledgeMgmtPhoto from "@/assets/WhatWeDo/Artificial Intelligence/Section3_Card3_KnowledgeManagement.jpg";
import codeGenPhoto from "@/assets/WhatWeDo/Artificial Intelligence/Section3_Card4_CodeGeneration.jpg";
import workflowAutoPhoto from "@/assets/WhatWeDo/Artificial Intelligence/Section3_Card5_WorkflowAutomation.jpg";

const CARDS = [
    {
        title: "AI Content Generation",
        desc: "Generate high-quality marketing copy, documentation, and creative content in a fraction of the time.",
        image: contentGenPhoto,
    },
    {
        title: "Document Intelligence",
        desc: "Extract, classify, and summarize information from contracts, forms, and reports automatically.",
        image: documentIntelPhoto,
    },
    {
        title: "AI-Powered Knowledge Management",
        desc: "Turn scattered institutional knowledge into instantly searchable, always up-to-date answers.",
        image: knowledgeMgmtPhoto,
    },
    {
        title: "Code Generation & Assistance",
        desc: "Accelerate development with AI pair-programming that writes, reviews, and debugs code.",
        image: codeGenPhoto,
    },
    {
        title: "AI Workflow Automation",
        desc: "Automate multi-step business processes end-to-end, from trigger to completion.",
        image: workflowAutoPhoto,
    },
];

export default function OurAIServices() {
    return (
        <section className="w-full py-10 sm:py-0 px-6 sm:px-[40px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-[50px]"
            >
                <h2 className="text-black text-2xl font-medium">Our Artificial Intelligence Services</h2>
                <p className="text-black text-base sm:text-lg font-light">Create Smarter Content, Code, and Business Solutions</p>
                <p className="text-[#6c6c6c] text-base sm:text-lg font-light">
                    Leverage Generative AI to automate content creation, accelerate software development, improve
                    knowledge management, and enhance employee productivity.
                </p>
            </motion.div>

            {/* Mobile: simple static stacked cards — no hover, description always visible */}
            <div className="flex sm:hidden flex-col gap-4 max-w-[1280px] mx-auto">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative w-full h-[220px] overflow-hidden"
                    >
                        <Image src={card.image} alt="" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute inset-0 flex flex-col justify-start gap-2 px-4 pt-5">
                            <p className="text-white text-xl font-normal">{card.title}</p>
                            <p className="text-white/85 text-sm font-light max-w-[280px]">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: hover-to-grow row */}
            <div className="hidden sm:flex sm:items-end gap-3 sm:gap-[13px] max-w-screen mx-auto">
                {CARDS.map((card, index) => (
                    <div key={card.title} className="relative h-[322px] flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="
                                group
                                absolute
                                bottom-0
                                inset-x-0
                                h-[200px]
                                overflow-hidden
                                transition-[height]
                                duration-500
                                ease-out
                                hover:h-[322px]
                                z-10
                                hover:z-20
                            "
                        >
                            <Image
                                src={card.image}
                                alt=""
                                fill
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/70" />

                            <div className="absolute inset-0 flex flex-col justify-start gap-3 px-4 pt-5">
                                <p className="text-white text-xl sm:text-2xl font-normal max-w-[170px]">{card.title}</p>
                                        <p className="text-white/85 text-sm font-light max-w-[144px] max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-out group-hover:delay-500 group-hover:max-h-32 group-hover:opacity-100">
                                            {card.desc}
                                        </p>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
