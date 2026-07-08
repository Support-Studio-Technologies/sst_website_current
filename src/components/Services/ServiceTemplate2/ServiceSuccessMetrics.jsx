"use client";
import React from "react";
import { motion } from "framer-motion";

const ServiceSuccessMetrics = ({
  id = "metrics",
  title = "Business Impact",
  subtitle = "Success Metrics",
  items = [],
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 18 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 16 },
    },
  };

  return (
    <section id={id} className="relative overflow-hidden border-b border-slate-900 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_38%),linear-gradient(135deg,_#020617_0%,_#0f172a_65%,_#111827_100%)] py-24 text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/8 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="text-sm text-blue-400">✦</span>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-300 sm:text-sm">{subtitle}</p>
          </div>
          <h2 className="text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {items.map((metric, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group flex flex-col items-center justify-between rounded-[28px] border border-white/10 bg-slate-900/60 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_20px_70px_-30px_rgba(59,130,246,0.55)]"
            >
              <div className="mb-4">
                <span className="inline-block bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 bg-clip-text text-5xl font-bold text-transparent transition-transform duration-300 group-hover:scale-105 sm:text-6xl">
                  {metric.value}
                </span>
              </div>
              <div className="mb-4 h-0.5 w-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-20"></div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold tracking-wide text-white">{metric.label}</h3>
                <p className="mx-auto max-w-[220px] text-xs leading-relaxed text-slate-400">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSuccessMetrics;