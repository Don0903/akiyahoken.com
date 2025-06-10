"use client"

import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"
import { motion } from "framer-motion"

export default function ContactSection() {
  return (
    <AnimatedSection id="contact" className="min-h-screen flex items-center justify-center px-4 py-20 snap-start">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Get In Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              I&apos;m always interested in new opportunities and exciting projects. Feel free to reach out!
            </motion.p>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {[
                { icon: Mail, text: "hoken0903@gmail.com", href: "mailto:hoken0903@gmail.com" },
                { icon: Phone, text: "+44 744 857 6931", href: "tel:+447448576931" },
                { icon: MapPin, text: "London, United Kingdom", href: null },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="w-fit rounded-lg border border-[#a15a56]/30 dark:border-pink-500/30 bg-[#a15a56]/10 dark:bg-pink-500/10 p-3">
                    <item.icon className="h-5 w-5 text-[#a15a56] dark:text-pink-500" />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium hover:text-[#a15a56] dark:hover:text-pink-500 transition-colors text-center"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-center">{item.text}</span>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-4 pt-4"
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map((social, index) => (
                <Button
                  key={index}
                  size="icon"
                  variant="outline"
                  asChild
                  className="hover:border-[#a15a56]/50 dark:hover:border-pink-500/50 hover:bg-[#a15a56]/10 dark:hover:bg-pink-500/10 transition-colors"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
