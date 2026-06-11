import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMission = () => {
  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Image animation variants
  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-10 px-4 overflow-x-hidden overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* OUR VISION & MISSION Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 "
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-blue-500 text-base sm:text-lg">✦</span>
            <p className="text-xs sm:text-sm font-medium tracking-widest uppercase">
              OUR VISION & MISSION
            </p>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-6xl xl:text-4xl font-normal leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Driving Growth with <span className='gradient-text'>Purpose</span>
          </motion.h2>
        </motion.div>

        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-0 items-center">
          {/* Image Section - First on mobile, First on desktop */}
          <motion.div 
            className="order-1 lg:col-span-1 w-full flex justify-center lg:justify-start"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative">
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="w-full"
              >
                <Image
                  src="/AboutPage/AboutMission.png"
                  alt="Team collaboration and growth"
                  width={350}
                  height={350}
                  className="rounded-2xl w-120 h-90 object-contain"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content - Second on mobile, Second on desktop */}
          <motion.div 
            className="order-2 lg:col-span-2  w-full"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Vision Section */}
            <motion.div
              className="lg:border-b-2 lg:border-gray-300 border-b-2 border-gray-300 lg:pb-6 mb-6 pb-6"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.h3 
                className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 lg:mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Vision
              </motion.h3>
              <motion.p 
                className="text-gray-600 leading-relaxed text-base sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our vision is to become the trusted global technology partner that empowers enterprises to achieve sustainable 
                growth. We do this by driving innovation, fostering collaboration, and delivering intelligent transformation that 
                prepares businesses for the future.
              </motion.p>
            </motion.div>

            {/* Mission Section */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.h3 
                className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 lg:mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Mission
              </motion.h3>
              <motion.p 
                className="text-gray-600 leading-relaxed text-base sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                To deliver scalable, future-ready enterprise solutions that connect people, processes, and technology by blending 
                certified expertise with innovation, we empower organizations to reimagine their business models, improve efficiency, 
                and stay competitive in a digital-first world.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;