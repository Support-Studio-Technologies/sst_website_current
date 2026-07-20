"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactBand from "./ContactBand";
import heroBg from "@/assets/career/Careers hero BG.jpg";

export default function CareersLayout({
    children,
    breadcrumbs,
    heroContent,
    afterContent,
    shadow = true,
    showContactBand = false,
    cardBg = "bg-slate-50",
}) {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <div className="relative w-full h-[340px] sm:h-[669px] overflow-hidden">
                <Image
                    src={heroBg}
                    alt=""
                    fill
                    priority
                    className="object-cover object-center"
                />
                <Navbar />
               {heroContent && (
                                    <div className="relative z-10 h-full w-full px-6 sm:px-10 md:ml-35 lg:px-[165px] flex flex-col justify-center pb-24 sm:pb-32">
                                        <div className="-translate-y-10 sm:-translate-y-30">
                                            {heroContent}
                                        </div>
                                    </div>
                                )
                }
            </div>

            <main className="relative z-10 flex-grow w-full -mt-16 sm:-mt-87 pb-16">
                <div className={`w-full lg:w-[80%] lg:ml-auto ${cardBg} ${shadow ? "shadow-[1px_3px_20px_rgba(0,0,0,0.15)]" : ""}`}>
                    {breadcrumbs && (
                        <div className="flex items-center gap-2 px-6 sm:px-10 py-4 text-sm border-b border-[#d5d5d5]">
                            {breadcrumbs}
                        </div>
                    )}
                    <div className="px-4 sm:px-8 py-10">
                        {children}
                    </div>
                </div>
            </main>

            {afterContent}
            {showContactBand && <ContactBand />}
            <Footer />
        </div>
    );
}
