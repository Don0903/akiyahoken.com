"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="snap-center w-full h-screen flex flex-col justify-center items-center snap-mandatory">
      <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className=" text-4xl text-center"
      >
        About me page in development
      </motion.div>
    </div>
  );
}
