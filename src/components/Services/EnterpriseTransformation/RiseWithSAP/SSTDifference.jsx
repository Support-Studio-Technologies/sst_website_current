"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import globeImage from "@/assets/Service/Enterprise Transformation/Rise with SAP/30bdae03a8ca633c4c3c7d050d0fadcfe81f917a.jpg";
import corridorImage from "@/assets/Service/Enterprise Transformation/Rise with SAP/6ed673b8e2dac70308addd7fa945f7428c2b665e.jpg";
import teamImage from "@/assets/Service/Enterprise Transformation/Rise with SAP/8d3d5bd8ec58fc68ac3a40bb3901569e8329093e.jpg";

const SSTDifference = () => {
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
          <h2 className="text-3xl font-medium text-black sm:text-4xl">The SST Difference</h2>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Evaluate your current ERP landscape, identify transformation opportunities, and
            create a roadmap
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[globeImage, corridorImage].map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={image}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-2 flex aspect-square flex-col justify-center gap-6 rounded-2xl bg-black/85 p-6 shadow-xl sm:p-8 lg:col-span-1"
          >
            <h3 className="text-xl font-medium leading-tight tracking-tight text-white">
              Regional Bank — AML Compliance Overhaul
            </h3>
            <p className="text-sm font-medium leading-relaxed text-neutral-200">
              Before: Facing repeated regulatory warnings and a looming audit failure due to
              outdated AML practices.
              <br />
              <br />
              After: We implemented a full AML compliance framework, trained 80+ staff, and
              supported the bank through a successful third-party audit.
            </p>
            <button className="group/btn flex w-fit items-center gap-2 rounded-3xl bg-white py-2.5 pl-4 pr-2.5 text-sm font-semibold text-blue-700 shadow-md transition-transform duration-300 hover:scale-105">
              Learn More
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-700 text-white transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative aspect-square overflow-hidden rounded-2xl"
          >
            <Image
              src={teamImage}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SSTDifference;
