"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

const CARDS = [
    {
        title: "Digital Maturity Assessment",
        desc: "Benchmark your current digital capabilities against industry standards to identify gaps and prioritize investment.",
    },
    {
        title: "Digital Transformation Strategy",
        desc: "Chart a phased transformation path that modernizes systems and processes without disrupting day-to-day operations.",
    },
    {
        title: "Customer Experience Strategy",
        desc: "Design digital touchpoints that meet customers where they are and deepen engagement across every channel.",
    },
    {
        title: "Technology Roadmap",
        desc: "Sequence technology investments against business priorities so every initiative compounds toward long-term goals.",
    },
    {
        title: "Innovation Planning",
        desc: "Build a structured pipeline for evaluating and piloting emerging technologies before committing at scale.",
    },
];

export default function DigitalStrategy() {
    const trackRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [isScrollable, setIsScrollable] = useState(false);

    const updateProgress = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        setProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
    }, []);

    const checkScrollable = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;
        setIsScrollable(el.scrollWidth > el.clientWidth);
    }, []);

    useEffect(() => {
        checkScrollable();
        window.addEventListener("resize", checkScrollable);
        return () => window.removeEventListener("resize", checkScrollable);
    }, [checkScrollable]);

    const scrollByCard = (direction) => {
        const el = trackRef.current;
        if (!el) return;
        const card = el.querySelector("[data-card]");
        const cardWidth = card ? card.getBoundingClientRect().width + 25 : 275;
        el.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
    };

    return (
        <section className="w-full py-10 sm:py-[46px] px-6 sm:px-[50px] flex flex-col items-center gap-8 sm:gap-[46px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[1011px] text-center"
            >
                <h2 className="text-black text-2xl font-medium">Digital Strategy</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Accelerate Your Digital Transformation
                    <br />
                    <br />
                    Create comprehensive digital strategies that leverage modern technologies to improve customer
                    experiences, operational efficiency, and business agility.
                </p>
            </motion.div>

            <div className="flex flex-col gap-6 sm:gap-[30px] w-full">
                <div
                    ref={trackRef}
                    onScroll={updateProgress}
                    className={`flex gap-4 sm:gap-[25px] w-full overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
                        !isScrollable ? "lg:justify-center" : ""
                    }`}
                >
                    {CARDS.map((card) => (
                        <div
                            key={card.title}
                            data-card
                            className="snap-start shrink-0 w-[220px] sm:w-[250px] aspect-[250/338] border-x border-b border-black/70 border-t-[5px] border-t-black flex flex-col gap-8 sm:gap-[141px] items-start px-4 pt-[18px]"
                        >
                            <p className="text-black text-lg sm:text-2xl font-normal w-full">{card.title}</p>
                            <p className="text-[#3d3d4e] text-sm sm:text-lg font-light">{card.desc}</p>
                        </div>
                    ))}
                </div>

                {isScrollable && (
                    <div className="flex items-center gap-4 sm:gap-6 w-full">
                        <div className="relative flex-1 h-[10px] rounded-full bg-[#d9d9d9] overflow-hidden">
                            <div
                                className="absolute inset-y-0 left-0 rounded-full bg-[#2d8ec5] transition-all duration-300"
                                style={{ width: `${Math.max(progress * 100, 8)}%` }}
                            />
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                            <button
                                type="button"
                                aria-label="Previous"
                                onClick={() => scrollByCard(-1)}
                                className="flex items-center justify-center size-[31px] rounded-full border border-[#6c6c6c] text-[#6c6c6c] hover:bg-black hover:text-white hover:border-black transition-colors"
                            >
                                ←
                            </button>
                            <button
                                type="button"
                                aria-label="Next"
                                onClick={() => scrollByCard(1)}
                                className="flex items-center justify-center size-[31px] rounded-full border border-[#6c6c6c] text-[#6c6c6c] hover:bg-black hover:text-white hover:border-black transition-colors"
                            >
                                →
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
