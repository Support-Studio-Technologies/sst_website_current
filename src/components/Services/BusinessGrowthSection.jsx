import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Growth } from "../Constants/Service/BusinessGrowthData";

export default function BusinessGrowthLanding() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold: 0.1,
    margin: "0px 0px -50px 0px"
  });
  const mainControls = useAnimation();
  const cardControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      cardControls.start("visible");
    }
  }, [isInView, mainControls, cardControls]);

  // Enhanced Animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const leftColumnVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.15,
      },
    },
  };

  const headingVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      rotateX: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.2
      },
    },
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 25,
      x: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut",
        delay: 0.4
      },
    },
  };

  const cardContainerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.12,
        delayChildren: 0.3,
        ease: "easeOut"
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      scale: 0.85,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hover: {
      y: -12,
      scale: 1.03,
      rotateY: 2,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const cardContentVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  const shimmerVariants = {
    hidden: {
      x: "-100%",
      opacity: 0
    },
    visible: {
      x: "100%",
      opacity: [0, 0.5, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.8,
      }
    }
  };

  const gradientTextVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      scale: [1, 1.02, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className="pt-12 pb-0 px-4 sm:pt-18 sm:px-6 relative overflow-x-hidden"
      style={{
        margin: "0.5rem sm:1rem",
      }}
      initial="hidden"
      animate={mainControls}
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2, delay: 1 }}
      >
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-2xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-4 sm:space-y-6 order-1 lg:order-1 relative"
            variants={leftColumnVariants}
          >
            {/* Subtle accent line */}
            <motion.div
              className="absolute -left-4 top-0 w-1 h-20 rounded-full"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={isInView ? { scaleY: 1, opacity: 0.7 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            />

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-normal leading-tight mb-3 sm:mb-4 relative"
              variants={headingVariants}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                What We Can Do for Your
              </motion.span>
              <br />
              <motion.span 
                className="gradient-text relative inline-block"
                variants={gradientTextVariants}
                animate={isInView ? "visible" : "hidden"}
              >
                Business Growth Today
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={shimmerVariants}
                />
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-gray-600 leading-relaxed sm:leading-loose mb-4 sm:mb-6 relative"
              variants={textVariants}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                We go beyond providing a service. We partner with you to achieve
                sustainable growth and competitive advantage by leveraging
                technology and data.
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Right Column - Services Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 order-2 lg:order-2 relative"
            variants={cardContainerVariants}
            animate={cardControls}
          >
            {Growth.map((service, index) => {
              return (
                <motion.div
                  key={index}
                  className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden 
                     border border-gray-200 shadow-md 
                     hover:shadow-2xl transition-all duration-500 
                     transform group cursor-pointer 
                     h-80 sm:h-72 md:h-80 w-full"
                  style={{
                    backgroundImage: `url(/ServicePage/GrowthToday5.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  variants={cardVariants}
                  whileHover="hover"
                  custom={index}
                >
                  {/* Overlay gradient for better text readability */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/30"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  />

                  {/* Floating elements for cards */}
                  {isInView && (
                    <>
                      <motion.div
                        className="absolute top-3 right-3 w-2 h-2 bg-white/40 rounded-full"
                        variants={floatingVariants}
                        animate="animate"
                        transition={{
                          duration: 2 + index * 0.3,
                          repeat: Infinity,
                          delay: 1 + index * 0.2
                        }}
                      />
                      <motion.div
                        className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400/50 rounded-full"
                        variants={floatingVariants}
                        animate="animate"
                        transition={{
                          duration: 3 + index * 0.2,
                          repeat: Infinity,
                          delay: 1.5 + index * 0.1
                        }}
                      />
                    </>
                  )}

                  {/* Professional shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    animate={isInView ? { x: "200%" } : {}}
                    transition={{
                      duration: 1.2,
                      ease: "easeInOut",
                      delay: 1 + index * 0.15,
                    }}
                  />

                  {/* Card Content */}
                  <motion.div
                    className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-between text-black"
                    variants={cardContentVariants}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <motion.h3
                          className="text-lg sm:text-xl text-white font-semibold mb-2 sm:mb-3 
                              transition-transform duration-300 
                             drop-shadow-lg leading-tight"
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                          // whileHover={{ 
                          //   scale: 1.05,
                          //   textShadow: "0 0 8px rgba(255,255,255,0.3)"
                          // }}
                        >
                          {service.title}
                        </motion.h3>
                        <motion.p
                          className="text-white text-xs sm:text-sm leading-relaxed 
                             group-hover:text-white transition-colors duration-300 
                             drop-shadow-md"
                          initial={{ opacity: 0, y: 15 }}
                          animate={isInView ? { opacity: 0.9, y: 0 } : {}}
                          transition={{ duration: 0.7, delay: 1 + index * 0.1 }}
                          whileHover={{ 
                            opacity: 1,
                            textShadow: "0 0 6px rgba(255,255,255,0.2)"
                          }}
                        >
                          {service.description}
                        </motion.p>
                      </div>
                    </div>

                    {/* Subtle corner accent */}
                    <motion.div
                      className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-full"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      
      </div>
    </motion.div>
  );
}