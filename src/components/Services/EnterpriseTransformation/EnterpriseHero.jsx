"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";
import cardBg from "@/assets/Service/Enterprise Transformation/Background Image.jpg";

const MotionLink = motion.create(Link);

const PROGRAMS = [
  {
    title: "RISE With SAP",
    description: "Move to a cloud-based, AI-ready ERP core with a guided, low-risk migration path.",
    href: "/services/enterpriseTransformation/rise-with-sap",
  },
  {
    title: "GROW With SAP",
    description: "Purpose-built cloud ERP that scales fast-growing and mid-market enterprises.",
    href: "/services/enterpriseTransformation/grow-with-sap",
  },
  {
    title: "SAP CMU",
    description: "Modernize and consolidate your SAP landscape with Custom Migration & Upgrade.",
    href: "/services/enterpriseTransformation/sap-cmu",
  },
  {
    title: "SAP Rollout",
    description: "Standardize and deploy proven SAP templates across new markets and business units.",
    href: "/services/enterpriseTransformation/sap-rollout",
  },
];

const ProgramCard = ({ program, index }) => {
  const cardRef = useRef(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 150, damping: 18, mass: 0.4 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);
  const rotateX = useTransform(sy, [0, 1], [8, -8]);
  const rotateY = useTransform(sx, [0, 1], [-8, 8]);

  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <MotionLink
        ref={cardRef}
        href={program.href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        className="group relative block h-80 overflow-hidden rounded-[20px] border border-zinc-300/60 shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(30,27,75,0.35)]"
      >
        <Image
          src={cardBg}
          alt=""
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-indigo-950/50 to-indigo-950/90" />

        <div className="relative z-10 flex h-full flex-col justify-end p-6">
          <h3 className="text-2xl font-medium text-stone-50">{program.title}</h3>
          <p className="mt-2 max-w-[190px] text-sm font-normal text-stone-50/75">
            {program.description}
          </p>
          <div className="mt-5 flex items-center gap-2 text-stone-50">
            <span className="h-px w-8 bg-white/60 transition-all duration-300 group-hover:w-12 group-hover:bg-white" />
            <HiOutlineArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </div>
        </div>
      </MotionLink>
    </motion.div>
  );
};

const EnterpriseHero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <h1 className="text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl">
            Transform Today. Lead Tomorrow.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-neutral-600 sm:text-xl">
            Business transformation is more than adopting new technology—it&apos;s about
            reimagining how your organization operates, innovates, and grows. SST helps
            enterprises transform with confidence through strategy, technology, and execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseHero;
