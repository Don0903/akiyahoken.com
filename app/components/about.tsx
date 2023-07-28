"use client";
import { motion } from "framer-motion";


export default function About() {
  const text =
    "Web Developer with passion for creating user-friendly, responsive and immersive websites.";
  const words = text.split(" ");

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="snap-center w-full h-screen flex flex-col justify-center items-center snap-mandatory">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className=" text-4xl text-center"
      >
        About me
      </motion.h1>
      <div className="w-full grid sm:grid-cols-2 gap-8 px-4">
        <motion.div
          className="sm:text-right text-2xl font-bold justify-center items-center grid grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-0"
          variants={container}
          initial="hidden"
          whileInView="visible"
        >
          {words.map((word, index) => (
            <motion.span
              variants={child}
              style={{ marginRight: "5px" }}
              key={index}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
        <p className="font-bold items-center justify-center text-center">
          I am aware that this section is not working neither look nice. I am
          working on it. I currently do not take critisisms about this section. Thank you very much. hihihihi
        </p>
      </div>
    </div>
  );
}
