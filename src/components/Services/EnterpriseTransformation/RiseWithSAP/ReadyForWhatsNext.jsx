"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import analyticsImage from "@/assets/Service/Enterprise Transformation/Rise with SAP/Image (2).jpg";

const STATS = [
  "Upgrade Success Rate",
  "Faster Upgrade Deployment Cycles",
  "Enterprise Challenges",
  "Average Performance Improvement Post Upgrade",
  "Business Continuity During Upgrade Activities",
];

const ReadyForWhatsNext = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-3xl font-medium text-black sm:text-4xl">
            Is Your Business Ready for <span className="text-cyan-600">What&apos;s Next</span>?
          </h2>

          <ul className="flex flex-col gap-1">
            {STATS.map((stat, index) => {
              const isActive = active === index;
              return (
                <li key={stat}>
                  <button
                    onClick={() => setActive(index)}
                    className="group relative flex w-full items-center gap-3 py-3 text-left"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="stat-indicator"
                        className="absolute -left-4 h-6 w-1 rounded-full bg-cyan-600"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span
                      className={`text-lg transition-colors duration-300 sm:text-2xl ${
                        isActive ? "font-medium text-black" : "text-neutral-400 group-hover:text-neutral-600"
                      }`}
                    >
                      {stat}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col justify-between gap-10"
        >
          <p className="text-xl leading-relaxed text-black sm:text-2xl">
            RISE with SAP helps organizations accelerate digital transformation by combining
            cloud ERP, business process optimization, and continuous innovation.
          </p>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
            <Image src={analyticsImage} alt="Business analytics" fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReadyForWhatsNext;
