"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import heroBg from "@/assets/WhoWeAre/WhoWeAre_Hero_Bg.jpg";

export default function WhoWeAreHero() {
    return (
        <div className="relative w-full h-[340px] sm:h-screen sm:aspect-[1280/669] overflow-hidden">
            <Image src={heroBg} alt="" fill priority className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

            <Navbar />

            <div className="absolute inset-x-0 bottom-0 md:bottom-65 z-10 px-6 sm:px-10 md:ml-7 lg:px-[165px] pb-10 sm:pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full"
                >
                    <div className="flex items-center gap-4 sm:gap-6">
                        <p className="text-white/70 text-base sm:text-2xl shrink-0">About us</p>
                    </div>
                    <div className="flex-1 h-px bg-white/30" />
                    <h1 className="text-white/90 text-3xl sm:text-5xl lg:text-5xl font-medium mt-3 max-w-4xl">
                        Opportunities don&apos;t happen, you create them.
                    </h1>
                    <p className="text-white/70 text-xs sm:text-lg mt-3 max-w-xl">
                        We are always interested in receiving and reviewing resumes
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
