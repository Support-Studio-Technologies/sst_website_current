"use client";

import Link from "next/link";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const ContactUsButton = () => {
  return (
    <Link
      href="/contact-us"
      className="fixed bottom-10 right-6 z-50 flex items-center gap-2
                 rounded-lg bg-[#51A2FF] px-6 py-3
                 text-white shadow-lg transition-all duration-300
                 hover:scale-105 hover:shadow-xl"
    >
      <HiOutlineChatBubbleLeftRight className="text-xl" />
      <span className="font-medium">Contact Us</span>
    </Link>
  );
};

export default ContactUsButton;