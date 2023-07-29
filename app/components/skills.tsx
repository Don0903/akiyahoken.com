"use client";
import { motion } from "framer-motion";

import React from "react";

export default function skills() {
  const imges = [
    { url: "/html.png", name: "HTML" },
    { url: "/css.png", name: "CSS" },
    { url: "/javascript.png", name: "JavaScript" },
    { url: "/react.png", name: "React" },
    { url: "/tailwind.png", name: "Tailwind CSS" },
    { url: "/github.png", name: "GitHub" },
    { url: "/framer.svg", name: "Framer" },
    { url: "/Vuejs.png", name: "Vue.js" },
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="snap-center w-full  h-screen flex flex-col justify-center items-center ">
      <div className="max-w-[1000px] w-full flex-col flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          // whileHover={{ scale: 1.2 }}
          transition={{
            duration: 0.5,
            delay:0.2,
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          // animate={{ opacity: 1 }}
          // whileTap={{ scale: 0.9 }}
          className="box text-4xl text-center border-b-4 cursor-pointer select-none"
        >
          Skills
        </motion.h1>

        <motion.ul
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center my-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
        >
          {imges.map((img, index) => (
            <React.Fragment key={index}>
              <div className="rounded-full shadow-md shadow-gray hover:scale-110 duration-500 mx-6">
                <motion.li className="" key={index} variants={item}>
                  <img
                    className="w-8  sm:w-20 mx-auto "
                    src={img.url}
                    alt={`Image ${index}`}
                  />
                  <p className="my-4">{img.name}</p>
                </motion.li>
              </div>
            </React.Fragment>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
