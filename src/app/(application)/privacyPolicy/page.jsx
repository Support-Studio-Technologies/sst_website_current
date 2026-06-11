"use client";

import Footer from "@/components/Footer/Footer";
import PrivacyPolicy from "@/components/PrivacyPolicy/Content";
import Header from "@/components/PrivacyPolicy/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default page;
