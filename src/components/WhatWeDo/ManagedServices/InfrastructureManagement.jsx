"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import serverManagementPhoto from "@/assets/WhatWeDo/Managed Services/Section4_Card1.svg";
import networkAdminPhoto from "@/assets/WhatWeDo/Managed Services/Section4_Card2.svg";
import cloudInfraPhoto from "@/assets/WhatWeDo/Managed Services/Section4_Card3.svg";
import backupRecoveryPhoto from "@/assets/WhatWeDo/Managed Services/Section4_Card4.svg";
import storageManagementPhoto from "@/assets/WhatWeDo/Managed Services/Section4_Card5.svg";
import capacityPlanningPhoto from "@/assets/WhatWeDo/Managed Services/Section4_Card6.svg";

const CARDS = [
    { title: "Server Management", image: serverManagementPhoto },
    { title: "Network Administration", image: networkAdminPhoto },
    { title: "Cloud Infrastructure Management", image: cloudInfraPhoto },
    { title: "Backup & Disaster Recovery", image: backupRecoveryPhoto },
    { title: "Storage Management", image: storageManagementPhoto },
    { title: "Capacity Planning", image: capacityPlanningPhoto },
];

export default function InfrastructureManagement() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[1116px] mx-auto text-center mb-10 sm:mb-[45px]"
            >
                <h2 className="text-black text-2xl font-medium">Infrastructure Management</h2>
                <p className="text-[#515151] text-base sm:text-lg font-light">
                    Transformation shouldn&apos;t end at Go-Live. The real impact begins afterward.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[23px] max-w-[1280px] mx-auto">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
                        className="relative h-[270px] overflow-hidden"
                    >
                        <Image src={card.image} alt="" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
                        <p className="absolute left-6 top-6 text-white text-xl sm:text-2xl max-w-[240px] tracking-tight">
                            {card.title}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
