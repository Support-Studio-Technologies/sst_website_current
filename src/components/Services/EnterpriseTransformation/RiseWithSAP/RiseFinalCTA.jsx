"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";
import ctaBackground from "@/assets/Service/Enterprise Transformation/Footer container.jpg";

const RiseFinalCTA = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-sky-950 py-24 sm:py-28">
        <Image src={ctaBackground} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-sky-950/70" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 px-4 text-center sm:px-6"
        >
          <h2 className="text-2xl font-medium text-white sm:text-3xl lg:text-4xl">
            Streamline your Business with Rise with{" "}
            <span className="text-sky-300">SAP</span> Today
          </h2>

          <h3 className="text-xl font-medium text-white sm:text-2xl">
            Ready to Transform Your Business?
          </h3>

          <p className="text-base text-zinc-300 sm:text-lg">
            Let&apos;s Build innovative Solution that drive growth efficiency
            for your Business
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowCalendly(true)}
            className="mt-2 flex items-center gap-3 rounded-[10px] bg-white px-8 py-4 text-lg font-medium text-sky-950 shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            Book a Demo
            <span className="h-0.5 w-6 bg-sky-950" />
          </motion.button>
        </motion.div>
      </section>

      <CalendlyModal
        isOpen={showCalendly}
        onClose={() => setShowCalendly(false)}
        calendlyUrl={process.env.NEXT_PUBLIC_CALENDLY_URL}
        pageSettings={{
          backgroundColor: "ffffff",
          primaryColor: "#2d8ec5",
          textColor: "#2d8ec5",
        }}
      />
    </>
  );
};

export default RiseFinalCTA;