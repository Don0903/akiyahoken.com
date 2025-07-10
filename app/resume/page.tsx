"use client"

import TopNav from "@/components/top-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, ExternalLink, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { GlowingEffect } from "@/components/ui/glowing-effect"

export default function AboutPage() {
  const handleDownload = () => {
    // In a real application, this would be a link to the actual PDF file
    alert("This would download the CV as a PDF in a real application")
  }

  const skills = {
    "Programming Languages": ["Java", "Javascript", "Python", "MATLAB", "R", "SQL"],
    "Web Development": ["HTML", "CSS", "Vue.js", "React.js", "Tailwind.js", "Next.js", "Vercel", "Git"],
    "Technical Tools": ["Qualtrics", "Adobe Premier Pro", "Microsoft Office Suite", "MS Excel"],
    "AI & Data Science": [
      "AI/ML concepts",
      "Data Science",
      "Machine Learning",
      "Azure",
      "Web Scraping",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Tableau",
      "R Caret (ML)",
    ],
    "Soft Skills": ["Leadership", "Customer Relations", "Team work", "Communication"],
  }

  const languages = [
    { name: "English", level: "Native" },
    { name: "Japanese", level: "Native" },
    { name: "Dutch", level: "B1-B2" },
    { name: "Italian", level: "A2" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Master's student with hands-on experience in AI/ML prototyping and Python development. Proven ability in
                creating models and coding data conversion tools.
              </p>
            </div>

            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <div className="relative rounded-2xl border border-border/50 p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                  spread={30}
                  glow={true}
                  disabled={false}
                  proximity={100}
                  inactiveZone={0.3}
                  movementDuration={1.5}
                  borderWidth={2}
                />
                <Card className="border-none shadow-none bg-card">
                  <CardContent className="p-6 md:p-8">
                    <div className="text-center space-y-4">
                      <h2 className="text-2xl md:text-3xl font-bold">AKIYA HOKEN</h2>
                      <div className="space-y-2 text-muted-foreground">
                        <p>Shaftesbury Court, Shaftesbury Street, Flat 19</p>
                        <p>N1 7HL, London, United Kingdom</p>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                          <a
                            href="tel:+447448576931"
                            className="hover:text-[#a15a56] dark:hover:text-pink-500 transition-colors"
                          >
                            +44 744 857 6931
                          </a>
                          <span>|</span>
                          <a
                            href="mailto:hoken0903@gmail.com"
                            className="hover:text-[#a15a56] dark:hover:text-pink-500 transition-colors"
                          >
                            hoken0903@gmail.com
                          </a>
                        </div>
                        <div className="flex justify-center gap-4 mt-4">
                          <Button size="sm" variant="outline" asChild>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-4 w-4 mr-2" />
                              LinkedIn
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              GitHub
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Portfolio
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-1 space-y-8">
                {/* Skills */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <span className="inline-block w-2 h-2 bg-[#a15a56] dark:bg-pink-500 rounded-full mr-2"></span>
                        SKILL CONFIDENCE
                      </h3>
                      <div className="space-y-4">
                        {Object.entries(skills).map(([category, skillList]) => (
                          <div key={category}>
                            <h4 className="font-medium text-sm mb-2">{category}</h4>
                            <div className="flex flex-wrap gap-1">
                              {skillList.map((skill) => (
                                <span key={skill} className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Languages */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <span className="inline-block w-2 h-2 bg-[#a15a56] dark:bg-pink-500 rounded-full mr-2"></span>
                        LANGUAGES
                      </h3>
                      <div className="space-y-2">
                        {languages.map((lang) => (
                          <div key={lang.name} className="flex justify-between">
                            <span>{lang.name}</span>
                            <span className="text-muted-foreground text-sm">{lang.level}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Education */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-6">EDUCATION</h3>
                      <div className="space-y-6">
                        <div>
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                            <h4 className="font-semibold">University College London (UCL)</h4>
                            <span className="text-muted-foreground text-sm">Sep 2024 - Present</span>
                          </div>
                          <p className="text-[#a15a56] dark:text-pink-500 font-medium mb-2">
                            MSc, Cognitive and Decision Sciences
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">
                            Predicted graduate with distinction, Masters Dissertation on clinical application of Machine
                            Learning
                          </p>
                          <p className="text-sm">
                            <strong>Coursework:</strong> Perceptual Interface Design, Computational Modelling of
                            Cognition, Judgement and Decision Making, Behavioural Science
                          </p>
                        </div>

                        <div>
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                            <h4 className="font-semibold">Maastricht Science Program</h4>
                            <span className="text-muted-foreground text-sm">Feb 2020 - Feb 2023</span>
                          </div>
                          <p className="text-[#a15a56] dark:text-pink-500 font-medium mb-2">
                            Bachelor of Liberal Arts And Sciences, Computer Science, Neuroscience
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">Graduated with distinction, Cum Laude</p>
                          <p className="text-sm">
                            <strong>Coursework:</strong> Multivariable Calculus, Optimisation, Classical Mechanics,
                            Systems Biology, Large Data analysis in Physics, Computational Neuroscience, Programming
                            Life Sciences
                          </p>
                        </div>

                        <div>
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                            <h4 className="font-semibold">University of Amsterdam (UvA)</h4>
                            <span className="text-muted-foreground text-sm">Sep 2019 - Sep 2020</span>
                          </div>
                          <p className="text-[#a15a56] dark:text-pink-500 font-medium mb-2">
                            Bachelor of Economics and Operations Research (INCOMPLETE)
                          </p>
                          <p className="text-sm">
                            <strong>Coursework:</strong> Calculus, Linear Algebra, Probability Theory and Statistics,
                            Econometrics, Microeconomics, Macroeconomics, Programming and Numerical Analysis, Finance,
                            Actuarial Science and Operations Research
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Employment History */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-6">EMPLOYMENT HISTORY</h3>
                      <div className="space-y-6">
                        <div>
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                            <h4 className="font-semibold">Fixed Gear Coffee</h4>
                            <span className="text-muted-foreground text-sm">Aug 2023 - Present</span>
                          </div>
                          <p className="text-[#a15a56] dark:text-pink-500 font-medium mb-2">
                            Full Stack Web Developer, Team Lead
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>
                              Developed a full-stack ecommerce application for a cycling clothing and accessories brand
                            </li>
                            <li>
                              Designed and implemented the second website for the local cafe (fixedgearcoffee.com) to
                              enhance user engagement
                            </li>
                            <li>
                              Led a small team operating the cafe, utilizing leadership skills to maintain high service
                              standards
                            </li>
                          </ul>
                        </div>

                        <div>
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                            <h4 className="font-semibold">Neural Interfacing Lab (NIL)</h4>
                            <span className="text-muted-foreground text-sm">Mar 2023 - Jul 2023</span>
                          </div>
                          <p className="text-[#a15a56] dark:text-pink-500 font-medium mb-2">Research Assistant</p>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>
                              Developed Python code to convert neural data from XDF to NWB format, showing strong
                              programming and rapid prototyping skills
                            </li>
                            <li>
                              Enhanced the research group's website by streamlining the structure and integrating modern
                              UI/UX animations and transitions
                            </li>
                          </ul>
                        </div>

                        <div>
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                            <h4 className="font-semibold">Maastricht Centre for Systems Biology (MaCSBio)</h4>
                            <span className="text-muted-foreground text-sm">Sep 2022 - Dec 2022</span>
                          </div>
                          <p className="text-[#a15a56] dark:text-pink-500 font-medium mb-2">
                            Machine Learning Engineer Internship
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>
                              Engineered an ML model in R to predict anthropocentric and biomarker influences on body
                              fat percentage, reflecting understanding of AI/ML concepts and data science
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Extra-curricular */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-6">EXTRA-CURRICULAR ACTIVITIES</h3>
                      <div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                          <h4 className="font-semibold">mspcoursebuilder.com, Maastricht</h4>
                          <span className="text-muted-foreground text-sm">Jun 2022 - Aug 2022</span>
                        </div>
                        <p className="text-[#a15a56] dark:text-pink-500 font-medium mb-2">Project Leader</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            Full-stack web developing - Led a project that developed a course-selection website for the
                            students of MSP, to support, simplify and streamline the course selection process. (Vue.js,
                            tailwind.js)
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <Button onClick={handleDownload} size="lg" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Full CV
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
