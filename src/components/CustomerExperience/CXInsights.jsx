"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import insightImage from "@/assets/Service/Enterprise Transformation/Card 1 (insihjts ).jpg";

const INSIGHTS = [
  {
    type: "image",
    eyebrow: "Research Report",
    title: "Rethinking ERP for a Digital-First World",
    image: insightImage,
    href: "#",
  },
  {
    type: "dark",
    eyebrow: "Research Report",
    title: "Rethinking ERP for a Digital-First World",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    href: "#",
  },
  {
    type: "image",
    eyebrow: "Trend",
    title: "Rethinking ERP for a Digital-First World",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const CXInsights = () => {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Enterprise Transformation Insights
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap
          </p>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INSIGHTS.map((insight, i) => {
            if (insight.type === "image") {
              return (
                <motion.div
                  key={insight.title + i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="group relative overflow-hidden rounded-2xl"
                  style={{ minHeight: 360 }}
                >
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                      {insight.eyebrow}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold leading-snug text-white">
                      {insight.title}
                    </h3>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={insight.title + i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col justify-between rounded-2xl bg-slate-900 p-8"
                style={{ minHeight: 360 }}
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                    {insight.eyebrow}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold leading-snug text-white">
                    {insight.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    {insight.description}
                  </p>
                </div>

                <a
                  href={insight.href}
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  Learn More
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CXInsights;
