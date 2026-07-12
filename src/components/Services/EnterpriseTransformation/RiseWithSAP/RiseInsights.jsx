"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import officeImage from "@/assets/Service/Enterprise Transformation/Rise with SAP/a668dd661d78ea8a3f426b2c59762caf6911b96f.jpg";
import eventImage from "@/assets/Service/Enterprise Transformation/Rise with SAP/a19032145be6a1b62eaf8fc8c065a613c093fe0c.jpg";

const CARDS = [
  {
    eyebrow: "Research Report",
    title: "Rethinking ERP for a Digital-First World",
    image: officeImage,
    variant: "image",
  },
  {
    eyebrow: "Research Report",
    title: "Rethinking ERP for a Digital-First World",
    description: "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    variant: "text",
  },
  {
    eyebrow: "Event",
    title: "Rethinking ERP for a Digital-First World",
    image: eventImage,
    variant: "image",
  },
];

const RiseInsights = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-medium text-black sm:text-4xl">
            RISE with SAP Transformation Insights
          </h2>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Evaluate your current ERP landscape, identify transformation opportunities, and
            create a roadmap
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-[20px] bg-black shadow-[5px_5px_11.6px_0px_rgba(217,217,217,0.18)]"
            >
              {card.image && (
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              <div
                className={`absolute inset-0 ${
                  card.variant === "text"
                    ? "bg-gradient-to-b from-stone-950/0 to-black"
                    : "bg-gradient-to-t from-black/85 via-black/20 to-black/10"
                }`}
              />

              <div className="relative z-10 flex h-full flex-col justify-end gap-3 p-6">
                <span className="text-base font-normal text-white/80">{card.eyebrow}</span>
                <h3 className="text-xl font-medium leading-snug text-white sm:text-2xl">
                  {card.title}
                </h3>
                {card.description && (
                  <>
                    <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
                      {card.description}
                    </p>
                    <span className="mt-2 w-fit text-sm font-normal text-white underline underline-offset-4 transition-opacity duration-300 group-hover:opacity-70">
                      Learn More
                    </span>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiseInsights;
