"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface ProjectsSideNavProps {
  position: "left" | "right"
  onPositionChange: (position: "left" | "right") => void
}

const sections = [
  { id: "fullstack", label: "Full Stack" },
  { id: "ml-engineering", label: "ML Engineering" },
  { id: "cognitive-science", label: "Cognitive Science" },
  { id: "research-data-analysis", label: "Research & Data" },
]

export default function ProjectsSideNav({ position, onPositionChange }: ProjectsSideNavProps) {
  const [activeSection, setActiveSection] = useState("fullstack")

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle 50% of viewport
      threshold: 0
    }
  
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }
  
    const observer = new IntersectionObserver(observerCallback, observerOptions)
  
    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })
  
    return () => {
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const togglePosition = () => {
    onPositionChange(position === "left" ? "right" : "left")
  }

  return (
    <div className={`fixed top-1/2 -translate-y-1/2 z-40 ${position === "left" ? "left-4" : "right-4"}`}>
      <div className="flex flex-col items-center space-y-2">
        <Button
          variant="outline"
          size="icon"
          onClick={togglePosition}
          className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border-[#634832]"
        >
          {position === "left" ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
        </Button>

        <nav className="flex flex-col space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                activeSection === section.id
                  ? "bg-[#634832] scale-125"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              title={section.label}
            />
          ))}
        </nav>
      </div>
    </div>
  )
}
