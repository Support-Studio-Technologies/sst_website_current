"use client";
import React from "react";
import ProcessStepper from "@/components/Services/EnterpriseTransformation/SAPCMU/shared/ProcessStepper";
import bannerImage from "@/assets/Service/Enterprise Transformation/SAP CMU/Conversion/Frame 1000004025.jpg";

const STEPS = [
  {
    label: "Discover",
    description: "Assess your current systems, data, and infrastructure landscape.",
  },
  {
    label: "Design",
    description: "Architect a migration plan aligned with your business objectives.",
  },
  {
    label: "Integrate",
    description: "Connect applications and data sources across the new environment.",
  },
  {
    label: "Analyze",
    description: "Validate performance, security, and data integrity before go-live.",
  },
  {
    label: "Innovate",
    description: "Adopt new capabilities and continuously optimize after migration.",
  },
];

const MigrationFramework = () => (
  <ProcessStepper
    heading="Our Data Transformation Framework"
    description="Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives."
    steps={STEPS}
    backgroundImage={bannerImage}
  />
);

export default MigrationFramework;
