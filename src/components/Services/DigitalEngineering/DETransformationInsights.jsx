"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const DETransformationInsights = () => {
  return (
    <section className="bg-slate-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading & Subtext */}
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0066cc] mb-3">
            <span className="flex items-center justify-start gap-2">
              <Sparkles className="h-4.5 w-4.5 text-[#0066cc]" />
              Knowledge Resources
            </span>
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl mb-4">
            Enterprise Transformation Insights
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            Gain deep clarity on how custom software architectures drive structural value, streamline backend workflows, and optimize operational spend scales.
          </p>
        </div>

        {/* Wide Full-Bleed Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] overflow-hidden min-h-[380px] sm:min-h-[440px] flex items-center shadow-lg border border-slate-200/50"
        >
          {/* Card Background Image */}
          <div className="absolute inset-0 bg-slate-900">
            <Image
              src="/ServicePage/Digital Engineering/enterprise-transformation-insights-bg.jpg"
              alt="Team members reviewing digital metrics in modern office workspace"
              fill
              className="object-cover  select-none pointer-events-none"
            />
          </div>

          {/* Dark Glassmorphic Backdrop overlay */}
          <div className="absolute inset-0 bg-slate-950/70" />

          {/* Crisp Overlay Content */}
          <div className="relative p-8 sm:p-12 md:p-16 max-w-3xl text-left leading-relaxed">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-white/10 text-white mb-6 border border-white/10 uppercase">
              Research Report
            </span>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-4">
              Architectural Patterns: Decoupling Monoliths for Global Scales
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Explore how shifting core client endpoints to distributed microservices improves application build speeds. This whitepaper analyzes specific strangler-fig pattern configurations and real-world system migration outcome data sets.
            </p>

            <div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-300 transition-colors duration-250 group"
              >
                Read Whitepaper
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DETransformationInsights;
