"use client"

import TopNav from "@/components/top-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import SkillConfidenceBar from "@/components/skill-confidence-bar"

export default function CVPage() {
  const handleDownload = () => {
    // In a real application, this would be a link to the actual PDF file
    alert("This would download the CV as a PDF in a real application")
  }

  const skills = [
    { skill: "Java, Javascript, Python", level: 5 },
    { skill: "MATLAB, R", level: 4 },
    { skill: "HTML, CSS", level: 5 },
    { skill: "Vue.js, React.js, Tailwind.js", level: 4 },
    { skill: "Qualtrics", level: 3 },
    { skill: "Adobe Premier Pro", level: 3 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-none shadow-lg">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="cv-container">
                  {/* Header */}
                  <header className="mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">AKIYA HOKEN</h1>
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mt-1 break-words">
                      N1 7HL, LONDON, UNITED KINGDOM +44 744 857 6931
                    </p>
                  </header>

                  {/* Main content - Responsive layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Left column - Personal info */}
                    <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                      {/* Details */}
                      <section>
                        <h2 className="text-lg sm:text-xl font-semibold mb-3 flex items-center">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                          DETAILS
                        </h2>
                        <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                          <p>Shaftesbury Court, Shaftesbury Street, Flat 19</p>
                          <p>N1 7HL, London</p>
                          <p>United Kingdom</p>
                          <p className="break-all">+44 744 857 6931</p>
                          <p className="break-all">hoken0903@gmail.com</p>
                          <p className="mt-3 sm:mt-4 font-medium">Date of birth</p>
                          <p>September 3rd 1999</p>
                          <p className="mt-3 sm:mt-4 font-medium">Nationality</p>
                          <p>Japanese</p>
                        </div>
                      </section>

                      {/* Links */}
                      <section>
                        <h2 className="text-lg sm:text-xl font-semibold mb-3 flex items-center">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                          LINKS
                        </h2>
                        <div className="space-y-2 text-xs sm:text-sm">
                          <a href="#" className="text-primary flex items-center hover:underline break-words">
                            My Online Portfolio
                            <ExternalLink className="h-3 w-3 ml-1 flex-shrink-0" />
                          </a>
                        </div>
                      </section>

                      {/* Skills with confidence bars */}
                      <section>
                        <h2 className="text-lg sm:text-xl font-semibold mb-3 flex items-center">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                          SKILL CONFIDENCE
                        </h2>
                        <div className="space-y-3">
                          {skills.map((skillItem, index) => (
                            <SkillConfidenceBar key={index} skill={skillItem.skill} level={skillItem.level} />
                          ))}
                        </div>
                      </section>

                      {/* Languages */}
                      <section>
                        <h2 className="text-lg sm:text-xl font-semibold mb-3 flex items-center">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                          LANGUAGES
                        </h2>
                        <div className="space-y-1 text-xs sm:text-sm">
                          <p>English</p>
                          <p>Japanese</p>
                          <p>Dutch</p>
                          <p>Italian</p>
                        </div>
                      </section>

                      {/* Hobbies */}
                      <section>
                        <h2 className="text-lg sm:text-xl font-semibold mb-3 flex items-center">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                          HOBBIES
                        </h2>
                        <div className="space-y-1 text-xs sm:text-sm">
                          <p>Playing the Guitar</p>
                          <p>Photography/Videography</p>
                          <p>Brazilian Jiu-jitsu</p>
                          <p>Rugby</p>
                          <p>Coffee</p>
                          <p>Weight-lifting</p>
                          <p>Running/Swimming</p>
                        </div>
                      </section>
                    </div>

                    {/* Right column - Experience & Education */}
                    <div className="col-span-1 lg:col-span-2 space-y-6 lg:space-y-8 order-1 lg:order-2">
                      {/* Employment History */}
                      <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4">EMPLOYMENT HISTORY</h2>

                        <div className="space-y-6">
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold leading-tight">
                              Research Assistant at Neural Interfacing Lab (NIL), Maastricht
                            </h3>
                            <p className="text-muted-foreground mb-2 text-sm sm:text-base">March 2023 - July 2023</p>
                            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                              <li>
                                <span className="font-medium">Programming</span> - Created a code in python, that
                                converts any neural data from one data format (XDF) into another (NWB).
                              </li>
                              <li>
                                <span className="font-medium">Frontend dev</span> - Worked on the Research-group's
                                website, to streamline the structure so that editing, and adding new publications is
                                easier. Also included animations and transitions to modernise their website, to improve
                                UI and UX.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-base sm:text-lg font-semibold leading-tight">
                              Student Internship at Maastricht Centre for Systems Biology (MaCSBio), Maastricht
                            </h3>
                            <p className="text-muted-foreground mb-2 text-sm sm:text-base">
                              September 2022 - December 2022
                            </p>
                            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                              <li>
                                <span className="font-medium">AI engineering</span> - Researched and created an AI
                                model, that predicts the anthropocentric and bio markers that influences the most in
                                increasing body fat percentage - based on individuals diet (language used: R).
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-base sm:text-lg font-semibold leading-tight">
                              Full Stack Web Developer at Fixed Gear Coffee, Maastricht
                            </h3>
                            <p className="text-muted-foreground mb-2 text-sm sm:text-base">August 2023 - Present</p>
                            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                              <li>
                                Developing a full-stack ecommerce application for a Cycling clothing and accessories
                                brand
                              </li>
                              <li>Developed their second website for the local cafe they own (fixedgearcoffee.com)</li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-base sm:text-lg font-semibold">Waiter at Azie Tapas, Maastricht</h3>
                            <p className="text-muted-foreground mb-2 text-sm sm:text-base">August 2021 - July 2023</p>
                            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                              <li>
                                Efficiently coordinated and communicated with my colleagues and kitchen staff to provide
                                quality service to customers.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-base sm:text-lg font-semibold">
                              Student Tutor (Math & Physics), Hilversum
                            </h3>
                            <p className="text-muted-foreground mb-2 text-sm sm:text-base">
                              April 2018 - September 2019
                            </p>
                            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                              <li>
                                Created a positive learning environment where students felt comfortable to ask questions
                                and express their ideas
                              </li>
                            </ul>
                          </div>
                        </div>
                      </section>

                      {/* Education */}
                      <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4">EDUCATION</h2>

                        <div className="space-y-6">
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold leading-tight">
                              MSc in Cognitive and Decision Sciences, University College London (UCL), London
                            </h3>
                            <p className="text-muted-foreground mb-2 text-sm sm:text-base">September 2024 - Present</p>
                            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                              <li>Main: Perceptual Interface Design, and Computational Modelling of Cognition.</li>
                              <li>Secondary focus on Judgement and Decision Making, and Behavioural Science</li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-base sm:text-lg font-semibold leading-tight">
                              Bachelor of Liberal Arts And Sciences, Maastricht Science Program, Maastricht
                            </h3>
                            <p className="text-muted-foreground mb-2 text-sm sm:text-base">
                              February 2020 - February 2023
                            </p>
                            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                              <li>Main focus on Computer Science, and Neuroscience</li>
                              <li>Graduated with distinction, Cum Laude</li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-base sm:text-lg font-semibold leading-tight">
                              Highschool diploma, International School Hilversum, Hilversum
                            </h3>
                            <p className="text-muted-foreground mb-2 text-sm sm:text-base">
                              September 2013 - July 2018
                            </p>
                          </div>
                        </div>
                      </section>

                      {/* Extra-curricular */}
                      <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4">EXTRA-CURRICULAR ACTIVITIES</h2>

                        <div>
                          <h3 className="text-base sm:text-lg font-semibold">
                            Project Leader at mspcoursebuilder.com, Maastricht
                          </h3>
                          <p className="text-muted-foreground mb-2 text-sm sm:text-base">June 2022 - August 2022</p>
                          <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                            <li>
                              <span className="font-medium">Full-stack web developing</span> - Led a project that
                              developed a course-selection website for the students of MSP, to support, simplify and
                              stream line the course selection process. (Vue.js, tailwind.js)
                            </li>
                          </ul>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>

                {/* Download button */}
                <div className="mt-6 sm:mt-8 flex justify-center">
                  <Button onClick={handleDownload} className="flex items-center gap-2 w-full sm:w-auto">
                    <Download className="h-4 w-4" />
                    Download CV
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
