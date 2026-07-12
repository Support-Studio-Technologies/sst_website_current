"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Server, ListChecks, Cloud, BrainCircuit } from "lucide-react";

const ITEMS = [
  {
    icon: Server,
    title: "Legacy Systems",
    description: "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap.",
    image: "/ServicePage/rise/Legacy.jpg",
  },
  {
    icon: ListChecks,
    title: "Standardized Processes",
    description: "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap.",
    image: "/ServicePage/rise/Standardized.jpg",
  },
  {
    icon: Cloud,
    title: "Cloud ERP",
    description: "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap.",
    image: "/ServicePage/rise/Legacy.jpg",
  },
  {
    icon: BrainCircuit,
    title: "Intelligent Enterprise",
    description: "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap.",
    image: "/ServicePage/rise/Standardized.jpg",
  },
];

const LegacyToIntelligent = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-medium text-black sm:text-4xl">
            From Legacy ERP to Intelligent Enterprise
          </h2>

          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Evaluate your current ERP landscape and prepare your business for
            future challenges with a modern cloud transformation strategy.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="group relative overflow-hidden rounded-[20px] p-6 min-h-[350px] flex flex-col justify-end shadow-[4px_4px_10px_5px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[4px_4px_20px_8px_rgba(8,47,73,0.18)]"
            >
              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300 group-hover:from-sky-950/90" /> */}

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-black backdrop-blur-sm">
                  <item.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>

                <h3 className="text-xl font-semibold text-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/90">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacyToIntelligent;