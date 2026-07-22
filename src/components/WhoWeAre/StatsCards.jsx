"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import card1Bg from "@/assets/WhoWeAre/Card1_Bg.jpg";
import card2Bg from "@/assets/WhoWeAre/Card2_Bg.jpg";
import card3Bg from "@/assets/WhoWeAre/Card3_Bg.jpg";
import card4Bg from "@/assets/WhoWeAre/Card4_Bg.jpg";

const CARDS = [
    { bg: card1Bg, textColor: "text-black" },
    { bg: card2Bg, textColor: "text-white" },
    { bg: card3Bg, textColor: "text-black" },
    { bg: card4Bg, textColor: "text-white" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function StatsCards() {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-[52px] py-12 sm:py-16">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-[1300px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-[43px]"
            >
                {CARDS.map((card, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`relative aspect-[258/335] flex flex-col justify-between p-6 ${card.textColor}`}
                    >
                        <Image src={card.bg} alt="" fill className="object-cover" />
                        <p className="relative text-base sm:text-lg font-light max-w-[196px]">
                            Customer satisfaction rate, reflecting our dedication
                        </p>
                        <p className="relative text-3xl sm:text-5xl">95%</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
