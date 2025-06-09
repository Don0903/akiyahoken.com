"use client";

import { useState, useEffect } from "react";
import TopNav from "@/components/top-nav";
import ProjectsSideNav from "@/components/projects-side-nav";
import FullStackSection from "@/components/project-sections/fullstack-section";
import MLEngineeringSection from "@/components/project-sections/ml-engineering-section";
import CognitiveScienceSection from "@/components/project-sections/cognitive-science-section";
import ResearchDataAnalysisSection from "@/components/project-sections/research-data-analysis-section";

export default function ProjectsPage() {
  const [sideNavPosition, setSideNavPosition] = useState<"left" | "right">(
    "right"
  );

  useEffect(() => {
    // Handle hash navigation
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <ProjectsSideNav
        position={sideNavPosition}
        onPositionChange={setSideNavPosition}
      />

      <main className="pt-16 snap-y snap-mandatory overflow-y-auto h-screen">
        <FullStackSection />
        <MLEngineeringSection />
        <CognitiveScienceSection />
        <ResearchDataAnalysisSection />
      </main>
    </div>
  );
}
