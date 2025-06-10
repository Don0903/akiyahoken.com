"use client"

import type React from "react"

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState } from "react"

interface ResearchDialogProps {
  trigger: React.ReactNode
  title: string
  image: string
  content: {
    overview: string
    methodology: string
    findings: string
    implications: string
  }
  technologies: string[]
}

export default function ResearchDialog({ trigger, title, image, content, technologies }: ResearchDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent 
        className="max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <AlertDialogHeader className="space-y-4">
          <div className="flex justify-between items-start">
            <AlertDialogTitle className="text-2xl font-bold pr-8">{title}</AlertDialogTitle>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="shrink-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </AlertDialogHeader>

        <div className="space-y-6">
          {/* Hero Image */}
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-3">Overview</h3>
              <AlertDialogDescription className="text-base leading-relaxed">{content.overview}</AlertDialogDescription>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Methodology</h3>
              <AlertDialogDescription className="text-base leading-relaxed">
                {content.methodology}
              </AlertDialogDescription>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Key Findings</h3>
              <AlertDialogDescription className="text-base leading-relaxed">{content.findings}</AlertDialogDescription>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Implications & Impact</h3>
              <AlertDialogDescription className="text-base leading-relaxed">
                {content.implications}
              </AlertDialogDescription>
            </section>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
