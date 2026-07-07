"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";

const ServiceCapabilities = ({
  id = "capabilities",
  title = "Our Capabilities",
  subtitle = "What We Offer",
  items = [],
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id={id} className="py-20 bg-slate-50 text-slate-800 relative overflow-hidden border-b border-slate-200/60">
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-blue-500 text-sm">✦</span>
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-600">
              {subtitle}
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-slate-900">
            {title.split(" ").map((word, idx) => {
              const isLast = idx === title.split(" ").length - 1;
              return isLast ? (
                <span key={idx} className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  {word}
                </span>
              ) : (
                word + " "
              );
            })}
          </h2>
        </div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group relative bg-white border border-slate-200/80 hover:border-blue-500/20 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/5 cursor-pointer flex flex-col justify-between shadow-sm"
              >
                <div>
                  {/* Icon Block */}
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                    {Icon && <Icon className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />}
                  </div>

                  {/* Capability Title */}
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Capability Description */}
                  <p className="text-sm text-slate-550 leading-relaxed mb-6 group-hover:text-slate-650 transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Capability Link/Arrow */}
                {item.link && (
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors uppercase tracking-wider"
                  >
                    <span>Read More</span>
                    <HiOutlineArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCapabilities;
