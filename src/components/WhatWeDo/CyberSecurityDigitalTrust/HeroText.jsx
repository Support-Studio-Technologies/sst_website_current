"use client";

import { motion } from "framer-motion";

export default function HeroText() {
    return (
        <div className="absolute inset-x-0 top-[18%] sm:top-[23%] px-6 sm:px-10 md:ml-7 lg:px-[57px]">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full max-w-[1057px]"
            >
                <p className="text-white/90 text-sm sm:text-lg lg:text-xl uppercase tracking-wide font-light">
                    Cybersecurity &amp; Digital Trust
                </p>
                <div className="mt-3 sm:mt-4 h-px w-full bg-white/40" />
                <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-medium capitalize mt-6 sm:mt-8 leading-tight">
                    Protecting enterprise assets while enabling secure digital innovation
                </h1>
            </motion.div>
        </div>
    );
}
