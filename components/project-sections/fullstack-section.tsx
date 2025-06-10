"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"
import Image from "next/image"

const fullstackProjects = [
  {
    title: "Website",
    description:
      "A website for a cafe with a modern approach - tailored to their requests for 'artsy'.",
    image: "/fixedgearcoffee.png?height=200&width=300",
    technologies: ["Next.js", "TypeScript", "shadcn", "acernity"],
    liveUrl: "https://www.fixedgearcoffee.com",
    githubUrl: "#",
  },
  {
    title: "Neural Interfacing Lab Website",
    description: "Modernized research group website with streamlined publication management and improved UI/UX.",
    image: "/nil.png?height=200&width=300",
    technologies: ["React", "Node.js", "CMS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Course-Builder App",
    description:
      "A responsive tool to plan out your schedule for your time at the Maastricht university. It also includes a Wiki page that explains the description of every course offered, as well as it's details. NOW DEPRECIATED.",
    image: "/mspcoursebuilder.png?height=200&width=300",
    technologies: ["Vue.js", "Supabase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/gabeha/msp-web.git",
  },
]

export default function FullStackSection() {
  return (
    <AnimatedSection id="fullstack" className="min-h-screen flex items-center justify-center px-4 py-20 snap-start">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Full Stack Development
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fullstackProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
