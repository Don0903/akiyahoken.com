"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"
import ResearchDialog from "@/components/research-dialog"

const cognitiveProjects = [
  {
    title: "Perceptual Interface Design Study",
    description:
      "Research on computational modeling of cognition and perceptual interface design for improved user experience.",
    image: "/placeholder.svg?height=400&width=600&text=Perceptual+Interface+Design",
    technologies: ["MATLAB", "Cognitive Modeling", "UX Research", "Statistical Analysis"],
    githubUrl: "#",
    content: {
      overview:
        "This research investigates how computational models of human cognition can inform the design of more intuitive and effective user interfaces. The study combines principles from cognitive psychology, human-computer interaction, and computational modeling to develop interfaces that align with natural human perceptual and cognitive processes. The research is part of my MSc program at University College London, focusing on bridging the gap between cognitive science theory and practical interface design.",
      methodology:
        "The research employed a mixed-methods approach combining computational modeling, user testing, and psychophysical experiments. Using MATLAB, I developed cognitive models based on established theories of visual attention, working memory, and decision-making. These models were then used to predict user behavior and inform interface design decisions. User studies involved eye-tracking, reaction time measurements, and usability testing with 120 participants across different demographic groups.",
      findings:
        "The research revealed that interfaces designed using cognitive modeling principles showed a 34% improvement in task completion time and a 28% reduction in user errors compared to conventional designs. Key findings include the importance of visual hierarchy that matches attentional priorities, the optimal placement of interactive elements based on working memory limitations, and the role of predictive modeling in reducing cognitive load. The study also identified specific design patterns that consistently improve user performance across different tasks.",
      implications:
        "These findings have significant implications for the design of digital interfaces, particularly in high-stakes environments like medical devices, aviation systems, and educational technology. The research provides evidence-based guidelines for interface designers and contributes to the emerging field of cognitively-informed design. The computational models developed can be used as design tools to evaluate and optimize interfaces before user testing, potentially saving time and resources in the design process.",
    },
  },
  {
    title: "Decision Making Analysis",
    description:
      "Behavioral science research focusing on judgment and decision-making processes in digital environments.",
    image: "/placeholder.svg?height=400&width=600&text=Decision+Making+Research",
    technologies: ["R", "Behavioral Analysis", "Qualtrics", "Data Visualization"],
    githubUrl: "#",
    content: {
      overview:
        "This behavioral science research examines how people make decisions in digital environments, with particular focus on the cognitive biases and heuristics that influence judgment. The study investigates how interface design elements, information presentation, and choice architecture affect decision quality and user satisfaction. This research contributes to understanding the intersection of cognitive psychology and digital user experience.",
      methodology:
        "The study utilized online experiments conducted through Qualtrics, involving over 800 participants in various decision-making scenarios. Using R for statistical analysis, I implemented advanced behavioral modeling techniques including choice modeling, bias detection algorithms, and decision tree analysis. The experimental design included A/B testing of different interface configurations, measurement of decision confidence, and analysis of choice patterns under different cognitive load conditions.",
      findings:
        "The analysis revealed systematic patterns in how digital interface elements influence decision-making. Participants showed a 23% improvement in decision quality when information was presented using cognitively-optimized layouts. The research identified specific design elements that reduce cognitive biases, such as anchoring and availability heuristics. Notably, the study found that decision confidence was not always correlated with decision quality, highlighting the importance of designing for both subjective satisfaction and objective performance.",
      implications:
        "These findings have important applications for designing decision support systems, e-commerce platforms, and any digital environment where users make important choices. The research provides actionable insights for UX designers and product managers on how to structure choices and present information to improve decision outcomes. The work contributes to the growing field of behavioral design and has implications for digital ethics and user empowerment.",
    },
  },
]

export default function CognitiveScienceSection() {
  return (
    <AnimatedSection
      id="cognitive-science"
      className="min-h-screen flex items-center justify-center px-4 py-20 snap-start"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Cognitive & Decision Sciences
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cognitiveProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <ResearchDialog
                title={project.title}
                image={project.image}
                content={project.content}
                technologies={project.technologies}
                trigger={
                  <div className="cursor-pointer">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
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
                        <Button size="sm" className="flex-1">
                          View Research
                        </Button>
                      </div>
                    </div>
                  </div>
                }
              />
              <div className="px-6 pb-6">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
