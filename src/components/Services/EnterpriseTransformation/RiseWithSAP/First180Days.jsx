"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import day1Image from "@/assets/Service/Enterprise Transformation/Rise with SAP/71bfa3487b1f0ce902ebcf68da38f02e4c64d529.jpg";
import day2Image from "@/assets/Service/Enterprise Transformation/Rise with SAP/7939ef78bdbb2d5f6bab9a30e84f12f40a4dd5e4.jpg";
import day3Image from "@/assets/Service/Enterprise Transformation/Rise with SAP/7c060ccc0b2c620d001c20df5ade6fbda20390aa.jpg";

const STAGES = [
  {
    day: "Day 1-30",
    title: "Upgrade with Purpose",
    description: "Every release is aligned with business objectives, not just technical requirements.",
    image: day1Image,
  },
  {
    day: "Day 31-90",
    title: "Upgrade with Purpose",
    description: "Every release is aligned with business objectives, not just technical requirements.",
    image: day2Image,
  },
  {
    day: "Day 91-150",
    title: "Upgrade with Purpose",
    description: "Every release is aligned with business objectives, not just technical requirements.",
    image: day3Image,
  },
];

const First180Days = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-medium text-black sm:text-4xl">
            The First <span className="text-cyan-600">180 Days</span> of Transformation
          </h2>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Evaluate your current ERP landscape, identify transformation opportunities, and
            create a roadmap aligned with your business objectives.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-4 top-0 hidden h-full w-0.5 bg-gradient-to-b from-cyan-600 via-sky-950 to-cyan-600 sm:block lg:left-1/2"
          />

          <div className="flex flex-col gap-16">
            {STAGES.map((stage, index) => {
              const reversed = index % 2 === 1;
              return (
                <motion.div
                  key={stage.day}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col items-center gap-8 sm:pl-12 lg:pl-0 ${
                    reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  <span className="absolute left-2.5 top-2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-cyan-600 shadow-[0_0_0_4px_rgba(8,145,178,0.2)] sm:block lg:left-1/2" />

                  <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-[28px] border-4 border-cyan-600 shadow-lg lg:w-1/2">
                    <Image src={stage.image} alt={stage.day} fill className="object-cover" />
                  </div>

                  <div className="flex w-full flex-col items-start gap-3 lg:w-1/2">
                    <span className="text-2xl font-bold text-black sm:text-3xl">{stage.day}</span>
                    <span className="text-xl text-black sm:text-2xl">{stage.title}</span>
                    <p className="text-base text-neutral-600 sm:text-lg">{stage.description}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col items-start gap-3 sm:pl-12 lg:items-center lg:pl-0 lg:text-center"
            >
              <span className="absolute left-2.5 top-2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-sky-950 shadow-[0_0_0_4px_rgba(8,47,73,0.2)] sm:block lg:left-1/2" />
              <h3 className="text-2xl font-bold text-black sm:text-3xl">Continuous Value</h3>
              <p className="max-w-xl text-base text-neutral-600 sm:text-lg">
                Transform upgrades from cost centers into drivers of business growth.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default First180Days;
