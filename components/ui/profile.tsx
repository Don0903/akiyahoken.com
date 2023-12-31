"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

export default function Profile() {
  // State for the slider value
  const [sliderValue, setSliderValue] = useState([50]);
  const [composedWord, setComposedWord] = useState("I'm Akiya");
  const { data: session } = useSession(); // Use the useSession hook

  // Handle the slider value change
  const handleSliderValueChange = (newValue: number[]) => {
    setSliderValue(newValue);
    getWordFromSliderValue(newValue[0]);
  };

  // Function to get the corresponding word from the array based on the slider value
  const getWordFromSliderValue = (value: number) => {
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
    "prince",
    " the great",
    "phenomenal",
    "Sir",
    "master",
    "legend",
    "God",
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="box rounded-full h-[250px] sm:h-[300px] aspect-auto mb-8 hover:cursor-pointer select-none border-black border-4"
        src="/profile.jpg "
        alt="profile"
      />
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="box md:text-6xl sm:text-5xl text-4xl font-bold flex hover:cursor-pointer select-none"
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
        className="text-3xl flex justify-center items-center flex-col text-center"
      >
        Welcome to my portfolio.
        <br /> Currently in development!
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
          disabled={!session}
          style={{ opacity: session ? 1 : 0.5 }}
        />
      </motion.div>
      <motion.p
        className="text-center"
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
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-center text-xs
      "
      style={{color: session ? "white" : "black"}}
      >
        *only admins can change this
      </motion.p>
    </div>
  );
}
