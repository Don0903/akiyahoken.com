"use client";
import { motion } from "framer-motion";

export default function Introduction() {
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
    <div className="max-w-[1000px] w-full flex-col flex items-center justify-center">
      <motion.h1
        initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        // whileHover={{ scale: 1.2 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          // type: "spring",
          // stiffness: 400,
          // damping: 17,
        }}
        // whileTap={{ scale: 0.9 }}
        className="box text-4xl text-center border-b-4 cursor-pointer select-none"
      >
        Introduction
      </motion.h1>
      <div className="w-full grid sm:grid-cols-2 gap-8 px-4 text-center my-8">
        <motion.div
          className="sm:text-right text-2xl font-bold "
          variants={container}
          initial="hidden"
          whileInView="visible"
        >
          {words.map((word, index) => (
            <motion.span
              variants={child}
              style={{ marginRight: "5px" }}
              className="inline-block"
              key={index}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
        <p className="font-bold sm:text-left">
          I am aware that this section is not working neither look nice. I am
          working on it, and testing things out!
        </p>
      </div>
    </div>
  );
}
