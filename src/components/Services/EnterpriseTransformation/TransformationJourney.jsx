"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import journeyBg from "@/assets/Service/Enterprise Transformation/source/bd43aed1425680c9db0527fbe22edf87.jpg";

// Design canvas: every size/position below is authored in a fixed 1280x960
// space that matches the reference mock. `cq()` converts a design-px value
// into a container-query width unit, so the circles, the line, and the type
// all scale together as one unit — pixel-accurate to the reference no matter
// how wide the actual container ends up being (not just at exactly 1280px).
const CANVAS_W = 1280;
const CANVAS_H = 960;
const cq = (px) => `${+((px / CANVAS_W) * 100).toFixed(4)}cqw`;

const STEPS = [
  {
    number: 1,
    title: "Discover",
    description: "Understand business goals, current challenges, and future opportunities.",
    x: 205,
    y: 790,
    diameter: 56,
    numberSize: 20,
  },
  {
    number: 2,
    title: "Strategize",
    description: "Develop a practical roadmap aligned with your business vision.",
    x: 299,
    y: 529,
    diameter: 56,
    numberSize: 20,
  },
  {
    number: 3,
    title: "Transform",
    description: "Implement modern technologies and optimize business processes.",
    x: 413,
    y: 349,
    diameter: 80,
    numberSize: 26,
  },
  {
    number: 4,
    title: "Enable",
    description: "Empower teams with the right tools, skills, and support to embrace change.",
    x: 637,
    y: 146,
    diameter: 80,
    numberSize: 26,
  },
  {
    number: 5,
    title: "Optimize",
    description: "Continuously measure, improve, and evolve to maximize business value.",
    x: 924,
    y: 66,
    diameter: 96,
    numberSize: 30,
  },
];

// Space between a circle's edge and the start of its text block (design px).
const TEXT_GAP = 24;

// Catmull-Rom -> cubic Bezier, so the path is one smooth, tangent-continuous
// curve through every dot (no kinks between segments).
function smoothPath(points) {
  const d = [`M ${points[0].x} ${points[0].y}`];
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d.push(`C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2.x} ${p2.y}`);
  }
  return d.join(" ");
}

const CURVE_PATH = smoothPath(STEPS.map((s) => ({ x: s.x, y: s.y })));

const TransformationJourney = () => {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <Image src={journeyBg} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-blue-950/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-3xl font-semibold text-white sm:text-4xl"
        >
          The Transformation Journey
        </motion.h2>

        {/* Mobile / tablet: simple stacked list, no curve */}
        <div className="flex flex-col gap-14 lg:hidden">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, scale: 0.85, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              className="flex flex-col items-start gap-4"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-white to-violet-400 text-xl font-bold leading-none text-blue-950 shadow-lg shadow-violet-500/20 transition-transform duration-300 hover:scale-110">
                {step.number}
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white sm:text-3xl">{step.title}</h3>
                <p className="mt-1.5 max-w-[240px] text-sm text-neutral-300 sm:text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: dots sit exactly on the curve. The whole diagram scales as
            one unit via container-query units (cqw), so circle size, number
            size, title/description size, and circle-to-text spacing all stay
            proportional to each other at any container width — instead of
            only lining up correctly at one specific design width. */}
        <div
          className="relative hidden w-full lg:block"
          style={{ containerType: "inline-size", aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
        >
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
            preserveAspectRatio="none"
            fill="none"
          >
            <motion.path
              d={CURVE_PATH}
              stroke="url(#journey-line)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="journey-line" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.95" />
              </linearGradient>
            </defs>
          </svg>

          {STEPS.map((step, index) => {
            const textOffset = step.diameter / 2 + TEXT_GAP;
            const left = `${(step.x / CANVAS_W) * 100}%`;
            const top = `${(step.y / CANVAS_H) * 100}%`;

            return (
              <React.Fragment key={step.number}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                  className="absolute flex items-center justify-center rounded-full bg-gradient-to-b from-white to-violet-400 font-bold leading-none text-blue-950 shadow-lg shadow-violet-500/20 transition-transform duration-300 hover:scale-110"
                  style={{
                    left,
                    top,
                    width: cq(step.diameter),
                    height: cq(step.diameter),
                    fontSize: cq(step.numberSize),
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {step.number}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.1, ease: "easeOut" }}
                  className="absolute"
                  style={{
                    left,
                    top,
                    transform: `translate(${cq(textOffset)}, -50%)`,
                  }}
                >
                  <h3 className="font-medium leading-tight text-white" style={{ fontSize: cq(34) }}>
                    {step.title}
                  </h3>
                  <p
                    className="text-neutral-300"
                    style={{
                      fontSize: cq(17),
                      lineHeight: 1.5,
                      marginTop: cq(8),
                      maxWidth: cq(300),
                    }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TransformationJourney;
