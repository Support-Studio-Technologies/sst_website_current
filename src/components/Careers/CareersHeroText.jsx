"use client";

import { motion } from "framer-motion";

export default function CareersHeroText() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
        >
            <p className="text-[#a4a9ac] text-base sm:text-xl">Career</p>
            <h1 className="text-[#c7cbcd] text-2xl sm:text-3xl font-medium mt-1">
                Opportunities don&apos;t happen, you create them.
            </h1>
            <p className="text-[#a8adb1] text-xs sm:text-sm mt-3">
                We are always interested in receiving and reviewing resumes from talented people.
            </p>
        </motion.div>
    );
}
