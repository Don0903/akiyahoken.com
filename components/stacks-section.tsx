"use client"

import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
  Atom,
  FileCode,
  Layers,
  Zap,
  Cloud,
  GitBranch,
  FigmaIcon,
  Camera,
} from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { motion } from "framer-motion"

const stacks = [
  {
    category: "Frontend",
    icon: Globe,
    technologies: [
      { name: "React", icon: Atom },
      { name: "Next.js", icon: Zap },
      { name: "TypeScript", icon: FileCode },
      { name: "Tailwind CSS", icon: Layers },
      { name: "Framer Motion", icon: Zap },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    technologies: [
      { name: "Node.js", icon: Server },
      { name: "Python", icon: Code },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Redis", icon: Database },
    ],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    technologies: [
      { name: "React Native", icon: Smartphone },
      { name: "Flutter", icon: Smartphone },
      { name: "Swift", icon: Smartphone },
      { name: "Kotlin", icon: Smartphone },
    ],
  },
  {
    category: "Database",
    icon: Database,
    technologies: [
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Redis", icon: Database },
      { name: "Supabase", icon: Cloud },
      { name: "Firebase", icon: Cloud },
    ],
  },
  {
    category: "Tools",
    icon: Code,
    technologies: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Layers },
      { name: "AWS", icon: Cloud },
      { name: "Vercel", icon: Zap },
      { name: "Figma", icon: FigmaIcon },
    ],
  },
  {
    category: "Design",
    icon: Palette,
    technologies: [
      { name: "Figma", icon: FigmaIcon },
      { name: "Adobe XD", icon: Palette },
      { name: "Photoshop", icon: Camera },
      { name: "Illustrator", icon: Palette },
    ],
  },
]

export default function StacksSection() {
  return (
    <AnimatedSection id="stacks" className="min-h-screen flex items-center justify-center px-4 py-20 snap-start">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My Tech Stack
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stacks.map((stack, index) => {
            const Icon = stack.icon
            return (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="min-h-[20rem] list-none"
              >
                <div className="relative h-full rounded-2xl border border-border/50 p-2 md:rounded-3xl md:p-3">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={100}
                    inactiveZone={0.3}
                    movementDuration={1.5}
                    borderWidth={2}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 bg-card hover:shadow-lg transition-shadow dark:shadow-[0px_0px_27px_0px_rgba(236,72,153,0.1)] shadow-[0px_0px_27px_0px_rgba(161,90,86,0.1)]">
                    <div className="relative flex flex-1 flex-col justify-between gap-4">
                      <div className="flex items-center mb-4">
                        <div className="w-fit rounded-lg border border-[#a15a56]/30 dark:border-pink-500/30 bg-[#a15a56]/10 dark:bg-pink-500/10 p-2 mr-3">
                          <Icon className="h-6 w-6 text-[#a15a56] dark:text-pink-500" />
                        </div>
                        <h3 className="text-xl font-semibold">{stack.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {stack.technologies.map((tech) => {
                          const TechIcon = tech.icon
                          return (
                            <span
                              key={tech.name}
                              className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm flex items-center gap-2 hover:bg-[#a15a56]/10 hover:text-[#a15a56] dark:hover:bg-pink-500/10 dark:hover:text-pink-600 hover:border-[#a15a56]/20 dark:hover:border-pink-500/20 border border-transparent transition-all duration-200"
                            >
                              <TechIcon className="h-3 w-3" />
                              {tech.name}
                            </span>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
