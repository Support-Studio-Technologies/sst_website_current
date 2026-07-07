"use client";

import React from "react";

const InpageNavbar = ({
  sections,
  activeSectionId,
  scrollToSection,
}) => {
  return (
    <div className="sticky top-[60px] z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center overflow-x-auto scrollbar-hide whitespace-nowrap px-4">
          <span>
            <p>Overview</p> <p>Our services</p> <p>Our impact</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default InpageNavbar;