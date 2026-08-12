"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import invoiceIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/iconamoon_invoice-thin.svg";
import contractIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/gala_data.svg";
import classificationIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/document-new_svgrepo.com.svg";
import ocrIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/ocr_svgrepo.com.svg";
import validationIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/Vector.svg";
import workflowIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/hugeicons_workflow-square-04.svg";

const ITEMS = [
    { icon: invoiceIcon, title: " One View of the Customer", desc: "We unify sales, service, and marketing data so every team works from the same customer context." },
    { icon: contractIcon, title: "Journeys, Not Just Touchpoints", desc: "We design experiences around the full customer journey, not isolated channels or campaigns." },
    { icon: classificationIcon, title: " Platform Expertise That Delivers", desc: "Certified Salesforce and CRM implementation experience that turns strategy into a working system" },
    { icon: ocrIcon, title: "Insight-Driven Engagement", desc: "Customer analytics inform every journey we design, so engagement decisions are evidence-based" },
];

export default function SingleCustomerView() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[40px] flex flex-col lg:flex-row gap-10 lg:gap-[83px] items-center max-w-[1280px] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full lg:w-[518px] shrink-0"
            >
                <h2 className="text-black text-2xl sm:text-[32px] font-normal">Single Customer View & Evidence-Based Design
                </h2>
                <p className="text-[#6c6c6c] text-lg font-light">
                    Why our approach to customer experience drives long-term adoption.
                </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-x-10 sm:gap-x-14 gap-y-10 flex-1">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
                        className="flex flex-col gap-4"
                    >
                        <Image src={item.icon} alt="" width={48} height={48} />
                        <p className="text-black text-lg font-medium">{item.title}</p>
                        <p className="text-[#6c6c6c] text-sm font-light">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
