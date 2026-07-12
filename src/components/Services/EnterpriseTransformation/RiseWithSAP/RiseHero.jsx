"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import CustomButton from "@/components/Cards/Button";
import heroVideoBg from "@/assets/Service/Enterprise Transformation/Rise with SAP/Image.jpg";

const RiseHero = () => {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-10"
        >
          <h1 className="text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl">
            Future-Ready with RISE with <span className="text-cyan-600">SAP</span>
          </h1>

          <div className="flex flex-col gap-4">
            <p className="text-2xl font-light text-black">
              Why Rise With <span className="text-cyan-600">SAP</span>
            </p>
            <h2 className="text-xl font-medium text-black sm:text-2xl">
              Transform Your Business with Confidence
            </h2>
            <p className="text-base leading-relaxed text-black/80 sm:text-lg">
              RISE with SAP helps organizations accelerate digital transformation by combining
              cloud ERP, business process optimization, and continuous innovation into a single
              solution. It enables businesses to simplify operations, improve agility, and adapt
              quickly to changing market demands while reducing IT complexity.
            </p>
          </div>

          <div>
            <CustomButton
              text="Book a Demo"
              iconColor="text-black"
              iconBgColor="bg-white group-hover:bg-gray-100"
              buttonBgColor="bg-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              textColor="text-white"
              onClick={() => router.push("/bookacall")}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl"
        >
          <Image
            src={heroVideoBg}
            alt="RISE with SAP"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />

          <button
            aria-label="Play overview video"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-sky-950 shadow-lg transition-transform duration-300 hover:scale-110 sm:h-20 sm:w-20"
          >
            <Play className="ml-1 h-6 w-6 fill-current sm:h-7 sm:w-7" />
          </button>

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-6">
            <span className="text-xl font-medium tracking-wide text-white sm:text-2xl">
              RISE WITH SAP
            </span>
            <span className="text-sm text-white/75 sm:text-base">
              Driving business transformation together
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RiseHero;
