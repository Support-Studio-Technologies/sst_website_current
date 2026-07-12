"use client";
import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  { title: "Discover", description: "Understand business goals, operational priorities, and rollout readiness." },
  { title: "Standardize", description: "Align enterprise processes with your global SAP template and governance model." },
  { title: "Localize", description: "Configure country-specific legal, financial, and operational requirements." },
  { title: "Deploy", description: "Execute rollout activities through structured project management and quality assurance." },
  { title: "Enable", description: "Equip users with the knowledge, tools, and confidence to adopt new processes successfully." },
  { title: "Evolve", description: "Continuously optimize performance and prepare for future expansion initiatives." },
];

const TransformationBlueprint = () => {
  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-medium text-black sm:text-4xl">
            The SST Transformation Blueprint
          </h2>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Our proven transformation methodology helps you plan, implement, and optimize your
            RISE with SAP journey with confidence.
          </p>
        </motion.div>

        <div className="relative">
          <svg
            className="pointer-events-none absolute left-0 right-0 top-4 hidden w-full lg:block"
            viewBox="0 0 1200 20"
            preserveAspectRatio="none"
            fill="none"
          >
            <motion.line
              x1="0"
              y1="10"
              x2="1200"
              y2="10"
              stroke="#0891b2"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-4">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-start gap-3"
              >
                <span className="relative z-10 h-3 w-3 rounded-full bg-cyan-600 shadow-[0_0_0_4px_rgba(8,145,178,0.15)] transition-transform duration-300 group-hover:scale-125" />
                <h3 className="text-base font-medium text-black">{step.title}</h3>
                <p className="text-sm text-neutral-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationBlueprint;
