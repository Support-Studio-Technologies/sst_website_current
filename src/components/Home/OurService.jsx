import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import BGFILL from "../../assets/Home/BGFILL.svg";
import SAP from "../../assets/Home/OurServiceIcons/SAPServices.svg";
import MicroServices from "../../assets/Home/OurServiceIcons/MicroService.svg";
import DesignServices from "../../assets/Home/OurServiceIcons/DesignServices.svg";
import CloudServices from "../../assets/Home/OurServiceIcons/CloudServices.svg";

const OurService = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const gridItemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const services = [
    { image: SAP, alt: "SAP Services" },
    { image: MicroServices, alt: "Micro Services" },
    { image: CloudServices, alt: "Cloud Services" },
    { image: DesignServices, alt: "Design Services" },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-8 sm:mb-12 lg:mb-16">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={BGFILL}
            alt="Background Waves"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-24 py-12 sm:py-20 md:py-24 lg:py-32">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            {/* Badge */}
            <motion.div
              className="flex items-center justify-center mb-4 sm:mb-6"
              variants={textVariants}
            >
              <span className="text-blue-500 mr-2 text-sm sm:text-base">
                ✦
              </span>
              <p className="text-gray-600 text-xs sm:text-sm font-medium tracking-wider uppercase">
                OUR SERVICES
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={heroVariants}
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-normal
                leading-tight
              "
            >
              Future-ready Services for
              <br className="hidden sm:block" />
              <span className="gradient-text"> Enterprise Growth</span>
            </motion.h1>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-24">
        <motion.div
          className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-3
            sm:gap-4
            md:gap-6
            lg:gap-8
          "
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="
                relative
                aspect-square
                w-full
                overflow-hidden
              "
              variants={gridItemVariants}
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="
                  (max-width: 640px) 50vw,
                  (max-width: 1024px) 50vw,
                  25vw
                "
                className="object-contain p-2 sm:p-3 md:p-4"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurService;