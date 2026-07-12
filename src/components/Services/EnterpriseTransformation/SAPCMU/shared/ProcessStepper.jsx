"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProcessStepper = ({ heading, description, steps, backgroundImage }) => {
  const gridColsClass =
    steps.length >= 6 ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6" : "md:grid-cols-5";
  const circleOffsetClass = steps.length >= 6 ? "mt-0 lg:-mt-[76px]" : "mt-0 md:-mt-[76px]";

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl tracking-tight">{heading}</h2>
          {description && (
            <p className="mt-4 text-base text-neutral-600 sm:text-lg">{description}</p>
          )}
        </motion.div>

        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-[32px] overflow-hidden bg-[#0c2533] shadow-[0_10px_50px_rgba(0,0,0,0.04)]"
        >
          {/* Metallic Wave Image at the top (covering the top 200px) */}
          {backgroundImage && (
            <div className="absolute top-0 left-0 right-0 h-[200px] z-0 pointer-events-none select-none">
              <Image
                src={backgroundImage}
                alt=""
                fill
                className="object-cover"
                priority
              />
              {/* Overlay shadow to transition into the solid color */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c2533]/20" />
            </div>
          )}

          {/* Stepper Grid Content */}
          <div className={`relative z-10 grid grid-cols-1 ${gridColsClass} gap-8 px-8 py-10 md:px-12 md:py-14`}>
            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center md:items-start gap-4 text-center md:text-left"
              >
                {/* Circle number sitting on the dividing line */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className={`w-14 h-14 rounded-full bg-white text-black font-extrabold text-2xl flex items-center justify-center shadow-lg transition-transform duration-300 cursor-pointer select-none mb-4 z-10 ${circleOffsetClass}`}
                >
                  {index + 1}
                </motion.div>

                {/* Title and Description sitting in the solid dark blue region */}
                <div className="flex flex-col gap-2 w-full">
                  <h4 className="text-lg sm:text-xl font-bold text-white font-sans tracking-tight">
                    {step.label}
                  </h4>
                  {step.description && (
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans font-light opacity-95">
                      {step.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessStepper;
