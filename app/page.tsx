"use client"

import { useState } from "react"
import TopNav from "@/components/top-nav"
import SideNav from "@/components/side-nav"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import StacksSection from "@/components/stacks-section"
import WorkSection from "@/components/work-section"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  const [sideNavPosition, setSideNavPosition] = useState<"left" | "right">("right")

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <SideNav position={sideNavPosition} onPositionChange={setSideNavPosition} />

      <main className="pt-16 snap-y snap-mandatory overflow-y-auto h-screen">
        <HeroSection />
        <AboutSection />
        <StacksSection />
        <WorkSection />
        <ContactSection />
      </main>
    </div>
  )
}
