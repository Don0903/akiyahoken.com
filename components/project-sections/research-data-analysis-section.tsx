"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"
import ResearchDialog from "@/components/research-dialog"

const researchProjects = [
  {
    title: "Neural Interfacing Research",
    description: "Research assistant work at Neural Interfacing Lab focusing on brain-computer interface technologies.",
    image: "/placeholder.svg?height=400&width=600&text=Neural+Interface+Research",
    technologies: ["Python", "Neural Data", "Research Methods", "Data Processing"],
    githubUrl: "#",
    content: {
      overview:
        "This research project at the Neural Interfacing Lab (NIL) at Maastricht University focused on advancing brain-computer interface technologies through improved data processing and analysis methods. The work involved developing novel approaches to neural signal processing and creating tools to facilitate neuroscience research. The project aimed to bridge the gap between raw neural recordings and meaningful brain-computer interface applications.",
      methodology:
        "The research methodology involved working with high-density neural recordings from various experimental setups including EEG, ECoG, and microelectrode arrays. I developed Python-based analysis pipelines for real-time neural signal processing, implemented machine learning algorithms for signal classification, and created visualization tools for neural data exploration. The work required close collaboration with neuroscientists, engineers, and clinicians to ensure practical applicability of the developed methods.",
      findings:
        "The research yielded several significant findings including improved signal-to-noise ratios in neural recordings through advanced filtering techniques, development of more accurate neural decoding algorithms with 15% better performance than existing methods, and creation of standardized data processing workflows that reduced analysis time by 40%. The work also identified optimal electrode configurations for different types of neural interfaces and contributed to understanding of neural plasticity in brain-computer interface users.",
      implications:
        "These findings have important implications for the development of next-generation brain-computer interfaces, particularly for assistive technologies for individuals with paralysis or neurological conditions. The improved data processing methods enable more reliable and faster neural decoding, which is crucial for practical BCI applications. The research contributes to the broader goal of developing clinically viable neural interfaces and has potential applications in neurorehabilitation and cognitive enhancement.",
    },
  },
  {
    title: "Systems Biology Data Analysis",
    description:
      "Comprehensive analysis of biological systems using computational approaches and statistical modeling.",
    image: "/placeholder.svg?height=400&width=600&text=Systems+Biology+Analysis",
    technologies: ["R", "Bioinformatics", "Systems Biology", "Statistical Modeling"],
    githubUrl: "#",
    content: {
      overview:
        "This research project at the Maastricht Centre for Systems Biology (MaCSBio) involved comprehensive analysis of complex biological systems using computational and statistical approaches. The work focused on understanding how different biological components interact at the systems level to produce emergent properties. The research combined experimental data with computational modeling to gain insights into biological processes that cannot be understood by studying individual components in isolation.",
      methodology:
        "The methodology involved integrating multiple types of biological data including genomics, proteomics, metabolomics, and phenotypic data. Using R and specialized bioinformatics tools, I developed analysis pipelines for multi-omics data integration, implemented network analysis algorithms to identify key biological pathways, and created predictive models for biological outcomes. The work required handling large-scale datasets and developing robust statistical methods to account for biological variability and experimental noise.",
      findings:
        "The analysis revealed novel insights into biological system organization, including identification of previously unknown regulatory networks, discovery of biomarkers for disease states with 92% predictive accuracy, and characterization of metabolic pathway interactions under different environmental conditions. The research also demonstrated the importance of considering temporal dynamics in biological systems and identified key nodes in biological networks that could serve as therapeutic targets.",
      implications:
        "These findings have significant implications for drug discovery, personalized medicine, and our understanding of complex diseases. The systems-level insights provide a foundation for developing more effective therapeutic interventions that target multiple pathways simultaneously. The computational methods developed can be applied to other biological systems and contribute to the growing field of precision medicine. The work demonstrates the power of integrative approaches in biological research.",
    },
  },
  {
    title: "Behavioral Data Analytics",
    description: "Advanced analysis of human behavior patterns using statistical methods and machine learning.",
    image: "/placeholder.svg?height=400&width=600&text=Behavioral+Analytics",
    technologies: ["Python", "Statistical Analysis", "Machine Learning", "Data Visualization"],
    githubUrl: "#",
    content: {
      overview:
        "This research project involved comprehensive analysis of human behavioral data to understand patterns, predict outcomes, and identify factors that influence decision-making and performance. The work combined traditional statistical approaches with modern machine learning techniques to extract meaningful insights from complex behavioral datasets. The research has applications in psychology, education, marketing, and human-computer interaction.",
      methodology:
        "The methodology involved collecting and analyzing large-scale behavioral datasets from various sources including online platforms, mobile applications, and controlled experiments. Using Python and advanced statistical methods, I implemented clustering algorithms to identify behavioral phenotypes, developed predictive models for behavioral outcomes, and created interactive visualizations to communicate findings. The work required careful consideration of ethical issues and privacy protection in behavioral data analysis.",
      findings:
        "The analysis revealed significant patterns in human behavior including identification of distinct behavioral clusters with different characteristics, discovery of temporal patterns in decision-making with circadian and weekly cycles, and development of predictive models that can forecast behavioral outcomes with 78% accuracy. The research also identified key environmental and personal factors that influence behavioral patterns and demonstrated the importance of individual differences in behavioral analysis.",
      implications:
        "These findings have important applications for designing better user experiences, developing personalized interventions for behavior change, and understanding human decision-making in digital environments. The behavioral insights can inform the design of educational technologies, health applications, and decision support systems. The research contributes to the growing field of computational social science and has implications for policy-making and social interventions.",
    },
  },
]

export default function ResearchDataAnalysisSection() {
  return (
    <AnimatedSection
      id="research-data-analysis"
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
          Research & Data Analysis
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchProjects.map((project, index) => (
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
