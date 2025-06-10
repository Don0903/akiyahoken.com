"use client"

import AnimatedSection from "@/components/animated-section"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <AnimatedSection id="about" className="min-h-screen flex items-center justify-center px-4 py-20 snap-start">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 md:w-86 md:h-86 bg-muted rounded-full flex items-center justify-center relative">
              <Image 
                src="/akboi.jpeg" 
                alt="Profile" 
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground mb-6">
              I&apos;m a passionate developer with over 5 years of experience creating digital solutions that make a
              difference. I specialize in modern web technologies and love turning complex problems into simple,
              beautiful designs.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open source projects, or
              sharing knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-4">
              {["5+ Years Experience", "50+ Projects", "Remote Friendly"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-muted px-4 py-2 rounded-full"
                >
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
