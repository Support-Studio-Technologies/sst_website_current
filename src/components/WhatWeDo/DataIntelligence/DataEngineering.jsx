"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import cloudDataEngineeringPhoto from "@/assets/WhatWeDo/Data Inteligent/Section3_card1_cloud_data_engineering.svg";
import etlEltPhoto from "@/assets/WhatWeDo/Data Inteligent/Section3_card2_ETL_ELT.svg";
import dataLakePhoto from "@/assets/WhatWeDo/Data Inteligent/Section3_card3_Data_Lake_Implementation.svg";
import dataIntegrationPhoto from "@/assets/WhatWeDo/Data Inteligent/Section3_card4_Data_Integration.svg";

const CARDS = [
    {
        title: "Cloud Data Engineering",
        desc: "Design and build scalable cloud-native data pipelines that collect, process, and prepare enterprise data for analytics and AI.",
        image: cloudDataEngineeringPhoto,
    },
    {
        title: "ETL & ELT Solutions",
        desc: "Automate the extraction, transformation, and loading of data across systems with reliable, high-performance pipelines.",
        image: etlEltPhoto,
    },
    {
        title: "Data Lake Implementation",
        desc: "Build centralized data lakes that store structured and unstructured data at scale, ready for advanced analytics.",
        image: dataLakePhoto,
    },
    {
        title: "Data Integration",
        desc: "Connect disparate systems and sources into a unified data layer that keeps every application in sync.",
        image: dataIntegrationPhoto,
    },
];

export default function DataEngineering() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-[50px]"
            >
                <h2 className="text-[#0d0c22] text-2xl font-medium">Data Engineering</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Design and implement modern data pipelines that collect, process, integrate, and prepare
                    enterprise data for analytics and AI.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[60px] max-w-screen mx-auto">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                        className="group relative h-[280px] sm:h-[500px] overflow-hidden"
                    >
                        <Image
                            src={card.image}
                            alt=""
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/70" />
                        <div className="absolute inset-0 flex items-top justify-right px-6 py-10 text-center">
                            <p className="text-white text-xl sm:text-3xl font-normal">{card.title}</p>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 px-6 pb-6 grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                            <div className="overflow-hidden">
                                <p className="text-white/85 text-xl font-light pt-2">{card.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
