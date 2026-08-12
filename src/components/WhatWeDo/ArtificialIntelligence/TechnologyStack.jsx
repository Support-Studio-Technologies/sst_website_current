"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import java from "@/assets/WhatWeDo/Artificial Intelligence/icons/java.png";
import mongodb from "@/assets/WhatWeDo/Artificial Intelligence/icons/mongodb.png";
import nodejs from "@/assets/WhatWeDo/Artificial Intelligence/icons/nodejs.png";
import postgresql from "@/assets/WhatWeDo/Artificial Intelligence/icons/postgresql.png";
import python from "@/assets/WhatWeDo/Artificial Intelligence/icons/python.png";
import react from "@/assets/WhatWeDo/Artificial Intelligence/icons/react.png";

const LOGOS = [
    { name: "Java", src: java, width: 87 },
    { name: "MongoDB", src: mongodb, width: 150 },
    { name: "Node.js", src: nodejs, width: 100 },
    { name: "PostgreSQL", src: postgresql, width: 182 },
    { name: "Python", src: python, width: 114 },
    { name: "React", src: react, width: 117 },
];

export default function DesignToolsTechnologies() {
    const marqueeLogos = [...LOGOS, ...LOGOS];

    return (
        <section className="relative w-full overflow-hidden py-10 sm:py-16 px-6">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[#0d0c22] text-2xl font-medium text-center mb-10 sm:mb-12"
            >
                Industry Impact
            </motion.h2>

            <div className="max-w-[1180px] mx-auto overflow-hidden">
                <motion.div
                    className="flex  items-center gap-8 sm:gap-12"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 18,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {marqueeLogos.map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="relative h-[60px] sm:h-[80px] flex-shrink-0"
                            style={{ width: logo.width * 1.2 }}
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
