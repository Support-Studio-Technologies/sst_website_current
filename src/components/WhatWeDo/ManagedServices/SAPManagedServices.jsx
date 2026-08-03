"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import buildingPhoto from "@/assets/WhatWeDo/Managed Services/Section3_Image.svg";

const ITEMS = [
    {
        n: "1",
        title: "SAP Basis Administration",
        desc: "Build a scalable data architecture aligned with your digital transformation roadmap and business objectives.",
        barOpacity: "opacity-100",
        textOpacity: "opacity-100",
    },
    {
        n: "2",
        title: "SAP Performance Monitoring",
        desc: "Build a scalable data architecture aligned with your digital transformation roadmap and business objectives.",
        barOpacity: "opacity-65",
        textOpacity: "opacity-60",
    },
    {
        n: "3",
        title: "SAP System Maintenance",
        desc: "Build a scalable data architecture aligned with your digital transformation roadmap and business objectives.",
        barOpacity: "opacity-25",
        textOpacity: "opacity-20",
    },
];

const AUTO_INTERVAL = 3000;
const ITEM_HEIGHT = 145;

export default function SAPManagedServices() {
    const [active, setActive] = useState(0);
    const pausedRef = useRef(false);

    useEffect(() => {
        const id = setInterval(() => {
            if (pausedRef.current) return;

            setActive((prev) => (prev + 1) % ITEMS.length);
        }, AUTO_INTERVAL);

        return () => clearInterval(id);
    }, []);

    return (
        <section className="w-full bg-[#efefef]">
            <div className="max-w-[1280px] mx-auto relative py-10 sm:py-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-black text-2xl sm:text-[32px] font-normal px-6 sm:px-[100px] leading-tight"
                >
                    SAP Managed
                    <br />
                    Services
                </motion.h2>

                <div className="relative mt-10 sm:mt-[60px]">
                    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[1520px] h-[220px] sm:h-[289px] border-y-4 border-white">
                        <Image src={buildingPhoto} alt="" fill className="object-cover" />
                        {/* <div className="absolute inset-0 bg-[#003756]/10" /> */}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative -mt-12 mx-6 sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-[70px] w-full sm:w-[600px] lg:w-[620px] bg-white shadow-xl px-10 py-12 z-20"
                    >
                        <div
                            className="relative flex flex-col"
                            onMouseEnter={() => (pausedRef.current = true)}
                            onMouseLeave={() => (pausedRef.current = false)}
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#b7dcf4]" />
                            <motion.div
                                className="absolute left-[-1px] w-[4px] rounded-full bg-[#1b8be0]"
                                animate={{
                                    top: active * ITEM_HEIGHT + 4,
                                    height: ITEM_HEIGHT - 8,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 250,
                                    damping: 28,
                                }}
                            />

                            {ITEMS.map((item, index) => {
                                const opacity = index === active
                                    ? 1
                                    : index === active + 1 || index === active - 1
                                        ? 0.45
                                        : 0.18;
                                // const opacity =
                                //     distance === 0
                                //         ? 1
                                //         : distance === 1
                                //             ? 0.55
                                //             : 0.22;

                                const isActive = index === active;

                                return (
                                    <button
                                        key={item.n}
                                        onClick={() => setActive(index)}
                                        style={{ height: ITEM_HEIGHT }}
                                        className="flex flex-col justify-center pl-6 text-left"
                                    >
                                        <motion.p
                                            animate={{
                                                opacity,
                                                color: isActive ? "#000000" : "#5a5a5a",
                                            }}
                                            transition={{ duration: 0.35 }}
                                            className="text-[30px] font-normal leading-tight"
                                        >
                                            {item.n}. {item.title}
                                        </motion.p>

                                        <motion.p
                                            animate={{
                                                opacity: opacity * 0.95,
                                            }}
                                            transition={{ duration: 0.35 }}
                                            className="mt-3 text-[16px] leading-7 text-[#7a7a7a]"
                                        >
                                            {item.desc}
                                        </motion.p>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
