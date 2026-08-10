"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import migrationBg from "@/assets/WhatWeDo/Cloud and Infrastructure/Section3_Bg.svg";
import hoverImg from "@/assets/WhatWeDo/Cloud and Infrastructure/Section3_Image.svg";

const STEPS = [
    {
        title: "Cloud Consulting",
        desc: "Move business-critical applications to the cloud with minimal downtime and disruption.",
    },
    {
        title: "Infrastructure Services",
        desc: "Implement preventive controls across applications, infrastructure, users, and data.Implement preventive controls across applications, infrastructure, users, and data.",
    },
    {
        title: " DevSecOps",
        desc: "Relocate on-premise servers and workloads to scalable, cloud-native infrastructure.",
    },
    {
        title: "Backup & Disaster Recovery",
        desc: "Transfer files, backups, and archives to durable, cost-effective cloud storage.",
    },
    {
        title: "Infrastructure Automation",
        desc: "Lift-and-shift existing workloads to the cloud quickly, with modernization to follow.",
    },
];

export default function CloudMigration() {
    // null = nothing hovered/focused. This is the key fix: the old code
    // defaulted to `1` and never had a path back to "no card active",
    // so the highlighted state could never turn off on mouse-out.
    const [hovered, setHovered] = useState(null);

    return (
        <section className="w-full pb-10 sm:pb-0 flex flex-col items-center gap-8 sm:gap-[62px]">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] text-center px-6"
            >
                <h2 className="text-[#0d0c22] text-2xl font-medium">Cloud Migration</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Move workloads to the cloud in the right order, at the right pace, with business continuity
                    protected at every step.
                </p>
            </motion.div>

            {/* Mobile: stacked list — the 5-column image banner has no room to breathe
                this narrow, so swap it for the same card-list pattern used by
                Change Management on Business Advisory. */}
            <div className="flex sm:hidden w-full flex-col gap-3 px-6">
                {STEPS.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="flex gap-4 rounded-[10px] bg-[#f3f3f3] px-5 py-4"
                    >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2d8ec5] text-sm font-medium text-white">
                            {index + 1}
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-black text-base font-medium">{step.title}</p>
                            <p className="text-[#3d3d4e] text-sm font-light leading-snug">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop / tablet: pixel-accurate Figma composition — cards float over the
                bottom band of the hero image, full-bleed edge to edge. Aspect-locked to
                the source art (1280x682) so the hero keeps the same proportions as Figma
                at every viewport width, instead of a fixed px height that crops it differently
                per breakpoint. */}
            <div className="relative hidden sm:block w-full aspect-[1280/682] min-h-[460px] overflow-hidden">
                <Image src={migrationBg} alt="" fill className="object-cover" priority />

                {/* Card row sits at the same top/bottom offsets as the Figma frame
                    (244px / 138px of a 682px-tall frame => 35.8% / 20.2%), full-bleed
                    edge to edge with no side gutters. */}
                <div
                    className="absolute inset-x-0 top-[35.8%] bottom-[20.2%] flex"
                    onMouseLeave={() => setHovered(null)}
                >
                    {STEPS.map((step, index) => {
                        const isActive = hovered === index;
                        return (
                            <div key={step.title} className="relative h-full flex-1">
                                {/* Number badge: floats above the card, straddling the hero/card boundary */}
                                {isActive && (
                                    <div className="absolute -top-[30px] left-1/2 z-20 flex size-[60px] -translate-x-1/2 items-center justify-center bg-white">
                                        <span className="text-black text-[32px] font-light leading-none">
                                            {index + 1}
                                        </span>
                                    </div>
                                )}
                                <button
                                    type="button"
                                    onMouseEnter={() => setHovered(index)}
                                    onFocus={() => setHovered(index)}
                                    onBlur={() => setHovered(null)}
                                    className={`relative h-full w-full flex flex-col items-center justify-center text-center gap-3 px-4 lg:px-6 overflow-hidden transition-colors duration-300 ${isActive ? "bg-black" : "bg-white"
                                        }`}
                                >
                                    {/* Hover artwork: an actual image swap, not a color tint */}
                                    {isActive && (
                                        <>
                                            <Image
                                                src={hoverImg}
                                                alt=""
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/55" />
                                        </>
                                    )}

                                    <p
                                        className={`relative z-10 text-lg lg:text-xl font-medium leading-tight ${isActive ? "text-white" : "text-black"
                                            }`}
                                    >
                                        {step.title}
                                    </p>
                                    {isActive && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="relative z-10 text-white text-sm font-light leading-snug"
                                        >
                                            {step.desc}
                                        </motion.p>
                                    )}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
