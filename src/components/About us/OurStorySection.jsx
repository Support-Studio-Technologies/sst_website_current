"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import background from "../../assets/aboutus/Aboutus_bg_lineart.svg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const fadeAndScaleUp = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "backOut" },
  },
};

const lineVariants = {
  hidden: { height: 0, y: 100 },
  visible: {
    height: "100%",
    y: 0,
    transition: { duration: 1.8, ease: "easeInOut" },
  },
};

const OurStorySection = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden overflow-x-hidden ">
      {/* Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src={background}
          alt="Background Waves"
          fill
          sizes="100vw"
          priority
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeAndScaleUp}
        >
          <div className="flex items-center justify-center gap-2 ">
            <motion.div
              className="text-blue-500 text-base sm:text-lg"
              initial={{ rotate: -90, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              ✦
            </motion.div>
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase">
              Our Story
            </span>
          </div>
          <h2 className="text-3xl lg:text-6xl xl:text-4xl font-normal leading-tight mb-8">
            From Local Expertise to{" "}
            <span className="gradient-text bg-clip-text text-transparent">
              Global Impact
            </span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
            Support Studio Technologies (SST) began with a vision to bring
            world-class enterprise solutions to businesses of all sizes.
            Starting as a specialized SAP implementation partner in Pondicherry,
            we have grown into a global player with a strong presence across the
            Middle East. Our journey has been guided by a commitment to
            innovation, customer success, and delivering value that goes beyond
            technology.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={lineVariants}
          ></motion.div>

          {/* Timeline container with stagger effect */}
          <motion.div
            className="space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* First milestone (Left) */}
            <motion.div
              className="relative flex items-center"
              variants={fadeLeft}
            >
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Founded in Pondicherry
                </h3>
                <p className="text-gray-600">with a focus on SAP services</p>
              </div>
              <motion.div
                className="absolute left-1/2 -translate-x-[5px] w-3 h-3 gradient-primary rounded-full"
                variants={dotVariants}
              ></motion.div>
              <div className="w-1/2 pl-8"></div>
            </motion.div>

            {/* Second milestone (Right) */}
            <motion.div
              className="relative flex items-center"
              variants={fadeRight}
            >
              <div className="w-1/2 pr-8"></div>
              <motion.div
                className="absolute left-1/2 -translate-x-[5px] w-3 h-3 gradient-primary rounded-full"
                variants={dotVariants}
              ></motion.div>
              <div className="w-1/2 pl-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Expanded to Middle East
                </h3>
                <p className="text-gray-600">
                  Establishing offices in Oman, UAE, Qatar, KSA, and Kuwait
                </p>
              </div>
            </motion.div>

            {/* Third milestone (Left) */}
            <motion.div
              className="relative flex items-center"
              variants={fadeLeft}
            >
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  SAP-Certified Partner
                </h3>
                <p className="text-gray-600">
                  Recognized for excellence in enterprise solutions
                </p>
              </div>
              <motion.div
                className="absolute left-1/2 -translate-x-[5px] w-3 h-3 gradient-primary rounded-full"
                variants={dotVariants}
              ></motion.div>
              <div className="w-1/2 pl-8"></div>
            </motion.div>

            {/* Fourth milestone (Right) */}
            <motion.div
              className="relative flex items-center"
              variants={fadeRight}
            >
              <div className="w-1/2 pr-8"></div>
              <motion.div
                className="absolute left-1/2 -translate-x-[5px] w-3 h-3 gradient-primary rounded-full"
                variants={dotVariants}
              ></motion.div>
              <div className="w-1/2 pl-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Diversified Expertise
                </h3>
                <p className="text-gray-600">
                  Extending services into Microsoft, Salesforce, Cloud, and
                  Emerging Tech
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurStorySection;
