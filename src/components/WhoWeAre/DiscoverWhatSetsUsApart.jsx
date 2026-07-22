"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import discoverImage from "@/assets/WhoWeAre/LearnindAndDevelopment.jpg";

const CARDS = [
    {
        title: "Grow",
        heading: "Learning and Development",
        bullets: [
            "We believe continuous learning drives exceptional careers.",
            "Enhance your expertise through structured SAP training programs.",
            "Gain hands-on experience with real-world client projects.",
            "Learn from certified consultants and experienced industry mentors.",
        ],
    },
    {
        title: "Grow",
        heading: "Learning and Development",
        bullets: [
            "We believe continuous learning drives exceptional careers.",
            "Enhance your expertise through structured SAP training programs.",
            "Gain hands-on experience with real-world client projects.",
            "Learn from certified consultants and experienced industry mentors.",
        ],
    },
];

export default function DiscoverWhatSetsUsApart() {
    return (
        <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center max-w-3xl mx-auto mb-12"
            >
                <h2 className="text-2xl font-medium text-[#0d0c22]">Discover What Set Us apart</h2>
                <p className="mt-2 text-base sm:text-lg font-light text-[#3d3d4e]">
                    We are passionate about empowering individuals and businesses to take control of their finances
                    and achieve their financial goals.
                </p>
            </motion.div>

            <div className="max-w-[1300px] mx-auto flex flex-col lg:relative lg:w-full lg:aspect-[1220/592]">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full h-[280px] sm:h-[380px] lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-[49.75%] bg-[#5c5c5c]"
                >
                    <Image src={discoverImage} alt="" fill className="object-cover" />
                </motion.div>

                <div className="flex flex-col lg:contents gap-5">
                    {CARDS.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 + index * 0.1 }}
                            className={`w-full lg:absolute lg:top-[18.24%] lg:h-[63.68%] lg:w-[35.98%] bg-[#f4f3f9] flex flex-col justify-center gap-4 px-6 sm:px-8 py-10 ${
                                index === 0 ? "lg:left-[24.79%]" : "lg:left-[62.5%]"
                            }`}
                        >
                            <div>
                                <p className="text-lg text-black">{card.title}</p>
                                <h3 className="text-2xl font-medium text-black mt-1">{card.heading}</h3>
                            </div>
                            <div className="text-sm sm:text-base text-[#6c6c6c] leading-relaxed space-y-1">
                                {card.bullets.map((line) => (
                                    <p key={line}>{line}</p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
