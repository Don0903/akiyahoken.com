"use client"

import { useState, useEffect } from "react"
import { X, AlertCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function NoticeBoard() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already seen the notice
    const hasSeenNotice = localStorage.getItem("portfolio-notice-seen")
    if (!hasSeenNotice) {
      setIsVisible(true)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem("portfolio-notice-seen", "true")
  }

  const handleDismiss = () => {
    setIsVisible(false)
    // Don't save to localStorage so it shows again on next visit
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={handleDismiss}
          />

          {/* Notice Board */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="relative bg-card border border-border rounded-2xl p-6 shadow-2xl">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="absolute top-4 right-4 h-8 w-8 rounded-full hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-fit rounded-lg border border-[#a15a56]/30 dark:border-pink-500/30 bg-[#a15a56]/10 dark:bg-pink-500/10 p-2">
                    <AlertCircle className="h-5 w-5 text-[#a15a56] dark:text-pink-500" />
                  </div>
                  <h3 className="text-lg font-semibold">Work in Progress</h3>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Welcome to my portfolio! This website is currently under development and some content may contain
                    placeholder text.
                  </p>
                  <p>
                    I&apos;m actively working on adding real project details, research findings, and polishing the overall
                    experience. Thank you for your patience!
                  </p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button onClick={handleClose} className="flex-1 text-sm">
                    Got it, don&apos;t show again
                  </Button>
                  <Button variant="outline" onClick={handleDismiss} className="text-sm">
                    Dismiss
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
