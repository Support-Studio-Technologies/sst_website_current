"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import BGFILL from "../../assets/Home/BGFILL.svg";
import SAP from "../../assets/Home/OurServiceIcons/SAPServices.svg";
import MicroServices from "../../assets/Home/OurServiceIcons/MicroService.svg";
import DesignServices from "../../assets/Home/OurServiceIcons/DesignServices.svg";
import CloudServices from "../../assets/Home/OurServiceIcons/CloudServices.svg";

const services = [
  {
    image: SAP,
    alt: "SAP Services",
  },
  {
    image: MicroServices,
    alt: "Micro Services",
  },
  {
    image: CloudServices,
    alt: "Cloud Services",
  },
  {
    image: DesignServices,
    alt: "Design Services",
  },
];

const OurService = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHorizontalScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth = el.clientWidth * 0.82 + 20;
    const index = Math.round(el.scrollLeft / cardWidth);

    setActiveIndex(Math.min(index, services.length - 1));
  };

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

  return (
    <section className="py-4 sm:py-8 lg:py-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-8 sm:mb-12 lg:mb-16 sm:-mt-20">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src={BGFILL}
            alt="Background Waves"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 w-full py-8 sm:py-24 lg:py-50 px-4 sm:px-24 lg:px-24">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
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

            <motion.h1
              variants={heroVariants}
              className="text-2xl lg:text-6xl xl:text-4xl font-normal leading-tight"
            >
              Future-ready Services for
              <br className="hidden sm:block" />
              <span className="gradient-text">
                {" "}
                Enterprise Growth
              </span>
            </motion.h1>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-4 sm:px-8 lg:px-24 sm:-mt-30">

        {/* MOBILE SLIDER */}
        <div className="block sm:hidden relative overflow-hidden">
          <motion.div
            ref={scrollRef}
            onScroll={handleHorizontalScroll}
            className="
              flex
              gap-5
              overflow-x-auto
              snap-x
              snap-mandatory
              scrollbar-hide
              py-4
            "
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 snap-center"
                variants={gridItemVariants}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3 + index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div
                  className="
                    relative
                    w-[82vw]
                    max-w-[320px]
                    h-[400px]
                    rounded-3xl
                    overflow-hidden
                    border border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                    shadow-[0_0_40px_rgba(45,142,197,0.15)]
                  "
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 z-10" />

                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="80vw"
                    className="object-contain p-5"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;

                  const cardWidth = el.clientWidth * 0.82 + 20;

                  el.scrollTo({
                    left: index * cardWidth,
                    behavior: "smooth",
                  });

                  setActiveIndex(index);
                }}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index
                    ? "w-6 h-2 bg-blue-500"
                    : "w-2 h-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* TABLET + DESKTOP GRID */}
        <motion.div
          className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
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
              variants={gridItemVariants}
              className="relative overflow-hidden h-96"
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width:1024px) 50vw, 25vw"
                className="object-contain p-2"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurService;