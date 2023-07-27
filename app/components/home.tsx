"use client";

import React, { use } from "react";
import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  // State for the slider value
  const [sliderValue, setSliderValue] = useState([50]);
  const [composedWord, setComposedWord] = useState("I'm Akiya");

  // Handle the slider value change
  const handleSliderValueChange = (newValue:number[]) => {
    setSliderValue(newValue);
    getWordFromSliderValue(newValue[0]);
  };

  // Function to get the corresponding word from the array based on the slider value
  const getWordFromSliderValue = (value:number) => {
    const index = Math.floor(value / 5);
    setComposedWord(`I'm Ak${akState[index]}`);
  };

  const akState = [
    " :(",
    "meh",
    " :/",
    "calm",
    " :)",
    "decent",
    "",
    "chill",
    "Lad",
    "boi",
    "iya",
    "rizzler",
    "wizard",
    "lord",
    "Sir",
    " the great",
    "phenomenal",
    "prince",
    "master",
    "legend",
    "God",
  ];

  return (
    <div className="snap-center w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="box rounded-full h-[300px] aspect-auto mb-8 hover:cursor-pointer select-none"
          src="/profile.jpg "
          alt="profile"
        />
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="box md:text-6xl text-5xl font-bold flex hover:cursor-pointer select-none"
        >
          {composedWord}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-4xl flex justify-center items-center "
        >
          Welcome to my portfolio.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="w-1/2 lg:w-1/4"
        >
          <Slider
            onValueChange={handleSliderValueChange}
            className="py-4"
            defaultValue={sliderValue}
            max={100}
            step={5}
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          Ak rating: {sliderValue}%
        </motion.p>
      </div>
    </div>
  );
}


