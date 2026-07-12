"use client";
import React from "react";
import { motion } from "framer-motion";

const INDUSTRIES = [
  "Manufacturing",
  "Automotive",
  "Retail",
  "Healthcare",
  "Logistics & Supply Chain",
  "Professional Services",
  "Banking & Financial Services",
  "Energy & Utilities",
];

const IndustriesWeTransform = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-medium tracking-tight text-black sm:text-4xl">
            Industries We Transform
          </h2>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Transformation shouldn&apos;t end at Go-Live.
            <br />
            The real impact begins afterward.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="flex flex-wrap justify-center gap-4"
        >
          {INDUSTRIES.map((industry) => (
            <motion.div
              key={industry}
              variants={{
                hidden: { opacity: 0, y: 16, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.4 }}
              className="group cursor-default rounded-[20px] border border-sky-950 bg-transparent px-8 py-5 text-lg text-sky-950 transition-colors duration-300 hover:bg-sky-950 hover:text-white hover:shadow-lg hover:shadow-sky-950/20"
            >
              {industry}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesWeTransform;
