import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { iconImages, textContent } from "../Constants/Home/AboutData";

const Home = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const fadeTextRef = useRef(null);
  const [visibleWords, setVisibleWords] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleHorizontalScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const progress =
      maxScroll > 0 ? (el.scrollLeft / maxScroll) * 100 : 0;

    setScrollProgress(progress);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = textContent.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px",
      }
    );

    const observeImages = () => {
      if (containerRef.current) {
        const images = containerRef.current.querySelectorAll(".image-card");
        images.forEach((img) => {
          observer.observe(img);
        });
      }
    };

    const handleScroll = () => {
      // Handle word-by-word reveal for SAP text
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;

        if (elementTop + elementHeight < 0) {
          setVisibleWords(words.length);
          return;
        }

        if (elementTop > viewportHeight) {
          setVisibleWords(0);
          return;
        }

        const scrollProgress = Math.max(
          0,
          Math.min(
            1,
            (viewportHeight - elementTop) /
              (viewportHeight + elementHeight * 0.5)
          )
        );

        const totalWords = words.length;
        const newVisibleWords = Math.floor(scrollProgress * totalWords);

        setVisibleWords(Math.max(newVisibleWords, 0));
      }
    };

    setTimeout(observeImages, 100);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      if (containerRef.current) {
        const images = containerRef.current.querySelectorAll(".image-card");
        images.forEach((img) => {
          observer.unobserve(img);
        });
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [words.length]);

  // Function to calculate fade effect based on element position
  const getFadeProgress = () => {
    if (!fadeTextRef.current) return 0;

    const rect = fadeTextRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const elementTop = rect.top;
    const elementHeight = rect.height;

    // Start fading when element enters viewport
    if (elementTop > viewportHeight) return 0;
    if (elementTop + elementHeight < 0) return 1;

    // Calculate progress based on element position
    const progress = Math.max(
      0,
      Math.min(
        1,
        (viewportHeight - elementTop) / (viewportHeight + elementHeight * 0.3)
      )
    );
    return progress;
  };

  const fadeProgress = getFadeProgress();

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const descriptionVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
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

  const gridContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <>
      <style>{`
        .holographic-card {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: filter 0.3s ease;
        }

        /* Default name overlay - always visible at bottom */
        .card-name {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 70%, transparent 100%);
          color: white;
          padding: 16px 20px 20px 20px;
          z-index: 5;
          transition: opacity 0.3s ease;
        }

        .card-name h2 {
          font-size: 1rem;
          font-weight: bold;
          margin: 0;
          color: white;
          text-align: left;
        }

        /* Hover description overlay - hidden by default */
        .card-description {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          // background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 20px;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
          z-index: 10;
        }

        .card-description p {
          font-size: 0.9rem;
          line-height: 1.4;
          color: white;
          text-align: center;
          margin: 0;
        }

        .holographic-card:hover .card-image {
          filter: blur(4px);
        }

        .holographic-card:hover .card-name {
          opacity: 0;
        }

        .holographic-card:hover .card-description {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .card-name h2 {
            font-size: 1.2rem;
          }
          .card-description p {
            font-size: 0.8rem;
          }
        }
          .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="h-[40px]"></div>

      <motion.div
        className="md:min-h-screen p-4 sm:p-6 lg:px-6 px-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto" ref={containerRef}>
          {/* Header Section */}
          <motion.div className="text-center mb-16" variants={textVariants}>
            <motion.div
              className="flex items-center justify-center gap-2"
              variants={textVariants}
            >
              <span className="text-blue-500 text-base sm:text-lg">✦</span>
              <p className="text-xs sm:text-sm font-medium tracking-widest uppercase">
                About us
              </p>
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl xl:text-4xl font-normal leading-tight mb-4"
              variants={headerVariants}
            >
              Our Enterprise
              <span className="gradient-text"> Solutions</span>
            </motion.h1>

            <motion.div
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12"
              variants={descriptionVariants}
            >
              {/* Split text into words for staggered animation */}
              {textContent
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-1"
                    variants={wordVariants}
                  >
                    {word}
                  </motion.span>
                ))}
            </motion.div>
          </motion.div>

         <motion.div
            className="hidden lg:block"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
              {iconImages.slice(0, 6).map((image, index) => (
                <motion.div
                  key={index}
                  className="image-card w-full h-72"
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="holographic-card h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="card-image object-cover"
                    />

                    <div className="card-name">
                      <h2>{image.name}</h2>
                    </div>

                    <div className="card-description">
                      <p>{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tablet Layout (md screens) */}
          <motion.div
            className="hidden md:block lg:hidden"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex justify-center items-end gap-4 mb-4">
              {iconImages.slice(0, 3).map((image, index) => (
                <motion.div
                  key={index}
                  className="w-60 h-60 image-card"
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="holographic-card">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 25vw, 20vw"
                      className="card-image object-cover"
                    />
                    <div className="card-name">
                      <h2>{image.name}</h2>
                    </div>
                    <div className="card-description">
                      <p>{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center items-start gap-4 mb-4">
              {iconImages.slice(3, 6).map((image, index) => (
                <motion.div
                  key={index + 3}
                  className="w-60 h-60 image-card"
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="holographic-card">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 25vw, 20vw"
                      className="card-image object-cover"
                    />
                    <div className="card-name">
                      <h2>{image.name}</h2>
                    </div>
                    <div className="card-description">
                      <p>{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* <div className="flex justify-center mb-4">
              <motion.div
                className="w-60 h-60 image-card"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="holographic-card">
                  <Image
                    src={iconImages[5].src}
                    alt={iconImages[5].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 25vw, 20vw"
                    className="card-image object-cover"
                  />
                  <div className="card-name">
                    <h2>{iconImages[5].name}</h2>
                  </div>
                  <div className="card-description">
                    <p>{iconImages[5].description}</p>
                  </div>
                </div>
              </motion.div>
            </div> */}
          </motion.div>

          

         {/* Mobile Layout */}
        <div
          className="relative block md:hidden overflow-hidden"
          style={{ clipPath: "inset(0)" }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Grid */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px",
              }}
            />

            {/* Aurora Glow 1 */}
            <motion.div
              className="absolute w-[320px] h-[320px] rounded-full bg-cyan-500/20 blur-[110px]"
              animate={{
                x: [0, 30, -20, 0],
                y: [0, -40, 20, 0],
                scale: [1, 1.15, 0.95, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                top: "-50px",
                left: "-100px",
              }}
            />

            {/* Aurora Glow 2 */}
            <motion.div
              className="absolute w-[280px] h-[280px] rounded-full bg-emerald-400/15 blur-[120px]"
              animate={{
                x: [0, -30, 20, 0],
                y: [0, 30, -20, 0],
                scale: [1, 0.9, 1.1, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                bottom: "-40px",
                right: "-80px",
              }}
            />
          </div>

          {/* Progress Bar */}
          <div className="relative z-20 px-4 pt-2">
            <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400"
                animate={{
                  width: `${scrollProgress}%`,
                }}
              />
            </div>
          </div>

          {/* Cards */}
          <motion.div
            ref={scrollRef}
            onScroll={handleHorizontalScroll}
            className="
              relative z-10
              flex gap-5
              overflow-x-auto
              snap-x snap-mandatory
              scrollbar-hide
              px-4
              py-6
            "
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {iconImages.map((image, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 snap-center"
                variants={cardVariants}
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
                    w-[78vw]
                    max-w-[290px]
                    h-[340px]
                    rounded-3xl
                    overflow-hidden
                    border border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    shadow-[0_0_40px_rgba(45,142,197,0.2)]
                  "
                >
                  {/* Border Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10 z-10" />

                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="80vw"
                    className="object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-20" />

                  {/* Auto Visible Content */}
                  <div className="absolute bottom-0 left-0 right-0 z-30 p-5">
                    <h2 className="text-white text-lg font-semibold mb-2">
                      {image.name}
                    </h2>

                    <p className="text-white/70 text-sm leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>         
        </div>
 
        </div>
      </motion.div>
    </>
  );
};

export default Home;
