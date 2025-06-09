"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const jobTitles = [
  {
    title: "Full Stack Developer & UI/UX Designer",
    workSection: "fullstack",
  },
  {
    title: "ML Engineer & Data Scientist",
    workSection: "ml-engineering",
  },
  {
    title: "Cognitive & Decision Scientist",
    workSection: "cognitive-science",
  },
  {
    title: "Research Assistant & Data Analyst",
    workSection: "research-data-analysis",
  },
];

export default function JobTitleSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % jobTitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleSliderChange = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="space-y-4">
      <div className="h-16 flex items-center justify-center">
        <div className="flex items-center gap-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground text-center"
            >
              {jobTitles[currentIndex].title}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`work-${currentIndex}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href={`/work#${jobTitles[currentIndex].workSection}`}
                className="text-[#634832] hover:text-primary/80 transition-colors flex items-center gap-1 text-sm md:text-base font-medium underline"
              >
                Relevant work →
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider dots */}
      <div className="flex justify-center space-x-2">
        {jobTitles.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSliderChange(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary w-8 md:w-10"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
