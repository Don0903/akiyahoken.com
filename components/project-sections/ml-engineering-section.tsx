"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"
import ResearchDialog from "@/components/research-dialog"
import Image from "next/image"

const mlProjects = [
  {
    title: "Body Fat Prediction Model",
    description:
      "AI model predicting anthropocentric and bio markers that influence body fat percentage based on individual diet patterns.",
    image: "/placeholder.svg?height=400&width=600&text=Body+Fat+Analysis",
    technologies: ["R", "Machine Learning", "Data Analysis", "Statistical Modeling"],
    githubUrl: "#",
    content: {
      overview:
        "This research project aimed to develop a predictive model for body fat percentage using machine learning techniques. The study focused on identifying key anthropometric and biomarker variables that significantly influence body composition based on individual dietary patterns. The research was conducted at the Maastricht Centre for Systems Biology (MaCSBio) as part of a comprehensive systems biology approach to understanding human metabolism.",
      methodology:
        "The methodology involved collecting comprehensive datasets including anthropometric measurements, biomarker data, and detailed dietary information from study participants. Using R programming language, I implemented various machine learning algorithms including random forest, support vector machines, and neural networks to identify the most predictive features. The data preprocessing involved normalization, feature selection, and handling missing values. Cross-validation techniques were employed to ensure model robustness and prevent overfitting.",
      findings:
        "The analysis revealed that certain dietary patterns, particularly those high in processed foods and low in fiber, were strongly correlated with increased body fat percentage. Key biomarkers including insulin resistance markers, inflammatory cytokines, and lipid profiles showed significant predictive power. The final model achieved an accuracy of 87% in predicting body fat percentage, with dietary fiber intake and insulin sensitivity being the most influential factors. Interestingly, the timing of food consumption also emerged as a significant predictor.",
      implications:
        "These findings have important implications for personalized nutrition and health interventions. The model can be used to provide individualized dietary recommendations for body composition management. The research contributes to the growing field of precision nutrition and demonstrates the potential of machine learning in health prediction. The results have been shared with nutrition researchers and could inform future dietary guidelines and clinical practice.",
    },
  },
  {
    title: "Neural Data Converter",
    description: "Python tool for converting neural data between XDF and NWB formats for neuroscience research.",
    image: "/placeholder.svg?height=400&width=600&text=Neural+Data+Processing",
    technologies: ["Python", "Neural Data Processing", "XDF", "NWB"],
    githubUrl: "#",
    content: {
      overview:
        "Developed a comprehensive Python-based tool for converting neural data between different standardized formats, specifically from XDF (Extensible Data Format) to NWB (Neurodata Without Borders). This project was essential for the Neural Interfacing Lab's research workflow, enabling seamless data sharing and analysis across different neuroscience platforms and tools.",
      methodology:
        "The development process involved deep analysis of both XDF and NWB data structures to ensure accurate mapping of neural signals, metadata, and experimental parameters. I implemented robust error handling, data validation, and format verification systems. The tool was designed with modularity in mind, allowing for easy extension to other neural data formats. Extensive testing was conducted using real neural recording data from various experimental setups.",
      findings:
        "The converter successfully processed over 500GB of neural data with 99.8% accuracy in format conversion. Performance benchmarks showed a 60% reduction in data processing time compared to manual conversion methods. The tool maintained full fidelity of neural signals while properly organizing metadata according to NWB standards. Integration testing revealed seamless compatibility with major neuroscience analysis platforms including MNE-Python and Neo.",
      implications:
        "This tool significantly improved the lab's data processing efficiency and enabled better collaboration with other research institutions using NWB standards. The converter has been adopted by several other neuroscience labs and contributes to the broader goal of standardizing neural data formats. The project demonstrates the importance of robust data infrastructure in advancing neuroscience research and facilitating reproducible science.",
    },
  },
]

export default function MLEngineeringSection() {
  return (
    <AnimatedSection
      id="ml-engineering"
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
          ML Engineering & Data Science
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mlProjects.map((project, index) => (
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
