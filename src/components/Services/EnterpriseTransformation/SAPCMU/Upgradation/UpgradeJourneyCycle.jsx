"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import bgImage from "@/assets/Service/Enterprise Transformation/SAP CMU/Upgradation/image 62.jpg";

const NODES = [
  { label: "Observe", description: "Understand system behavior, usage patterns, and business priorities." },
  { label: "Improve", description: "Optimize applications, workflows, and business processes." },
  { label: "Enable", description: "Deliver new capabilities that increase productivity and efficiency." },
  { label: "Protect", description: "Maintain governance, security compliance, and operational resilience." },
  { label: "Transform", description: "Prepare your SAP landscape for future business growth and innovation." },
];

const RADIUS = 40;

const UpgradeJourneyCycle = () => (
  <section className="relative bg-white py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-14 max-w-2xl text-center"
      >
        <h2 className="text-3xl font-medium text-black sm:text-4xl">Our Upgrade Journey</h2>
        <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
          Transformation shouldn&apos;t end at Go-Live. The real impact begins afterward.
        </p>
      </motion.div>

      {/* Desktop circular diagram */}
      <div className="relative mx-auto hidden aspect-square max-w-xl lg:block">
        <div className="absolute inset-6 overflow-hidden rounded-full shadow-inner">
          <Image src={bgImage} alt="" fill className="object-cover opacity-90" />
          <div className="absolute inset-0 bg-white/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="absolute left-1/2 top-1/2 z-10 flex w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-full bg-white p-7 text-center shadow-xl"
        >
          <span className="text-xs font-medium uppercase tracking-wide text-cyan-600">The SST</span>
          <span className="text-sm font-medium leading-snug text-sky-950">
            Continuous Value Cycle
          </span>
        </motion.div>

        {NODES.map((node, index) => {
          const angle = (-90 + index * (360 / NODES.length)) * (Math.PI / 180);
          const left = 50 + RADIUS * Math.cos(angle);
          const top = 50 + RADIUS * Math.sin(angle);
          return (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22, delay: index * 0.1 }}
              whileHover={{ scale: 1.08 }}
              className="group absolute z-20 flex w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 text-center"
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-950 text-sm font-medium text-white shadow-lg ring-4 ring-white transition-colors duration-300 group-hover:bg-cyan-600">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-sky-950">{node.label}</span>
              <p className="pointer-events-none absolute top-full z-30 mt-1 w-40 scale-95 text-xs leading-snug text-neutral-500 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                {node.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile / tablet vertical fallback */}
      <div className="flex flex-col gap-3 lg:hidden">
        {NODES.map((node, index) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex items-start gap-4 rounded-2xl border border-neutral-100 bg-neutral-50 p-4"
          >
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-950 text-sm font-medium text-white">
              {index + 1}
            </span>
            <div>
              <p className="text-base font-medium text-sky-950">{node.label}</p>
              <p className="mt-1 text-sm text-neutral-500">{node.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UpgradeJourneyCycle;
