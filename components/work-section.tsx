"use client"

import { Code, Brain, Database, Layers } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { motion } from "framer-motion"
import Link from "next/link"

const workCategories = [
  {
    title: "Full Stack Development",
    description: "Building end-to-end web applications with modern technologies and best practices.",
    icon: Layers,
    link: "/work#fullstack",
    technologies: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    title: "ML Engineering & Data Science",
    description: "Developing AI models and data-driven solutions for complex problems.",
    icon: Brain,
    link: "/work#ml-engineering",
    technologies: ["Python", "R", "Machine Learning", "Statistical Analysis"],
  },
  {
    title: "Cognitive & Decision Sciences",
    description: "Research on human cognition, decision-making, and behavioral science.",
    icon: Code,
    link: "/work#cognitive-science",
    technologies: ["MATLAB", "Cognitive Modeling", "UX Research", "Behavioral Analysis"],
  },
  {
    title: "Research & Data Analysis",
    description: "Conducting research and analyzing complex datasets to extract meaningful insights.",
    icon: Database,
    link: "/work#research-data-analysis",
    technologies: ["Python", "R", "Statistical Modeling", "Data Visualization"],
  },
]

export default function WorkSection() {
  return (
    <AnimatedSection id="work" className="min-h-screen flex items-center justify-center px-4 py-20 snap-start">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My Work
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {workCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="min-h-[20rem] list-none"
              >
                <Link href={category.link} className="block h-full">
                  <div className="relative h-full rounded-2xl border border-border/50 p-2 md:rounded-3xl md:p-3 cursor-pointer group">
                    <GlowingEffect
                      spread={30}
                      glow={true}
                      disabled={false}
                      proximity={100}
                      inactiveZone={0.3}
                      movementDuration={1.5}
                      borderWidth={2}
                    />
                    <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 bg-card hover:shadow-lg transition-all duration-300 group-hover:border-[#a15a56]/20 dark:group-hover:border-pink-500/20 dark:shadow-[0px_0px_27px_0px_rgba(236,72,153,0.1)] shadow-[0px_0px_27px_0px_rgba(161,90,86,0.1)]">
                      <div className="relative flex flex-1 flex-col justify-between gap-4">
                        <div className="space-y-4">
                          <div className="w-fit rounded-lg border border-[#a15a56]/30 dark:border-pink-500/30 bg-[#a15a56]/10 dark:bg-pink-500/10 p-3">
                            <Icon className="h-6 w-6 text-[#a15a56] dark:text-pink-500" />
                          </div>
                          <div className="space-y-3">
                            <h3 className="text-xl font-semibold group-hover:text-[#a15a56] dark:group-hover:text-pink-600 transition-colors">
                              {category.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs group-hover:bg-[#a15a56]/10 group-hover:text-[#a15a56] dark:group-hover:bg-pink-500/10 dark:group-hover:text-pink-600 group-hover:border-[#a15a56]/20 dark:group-hover:border-pink-500/20 border border-transparent transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
