"use client";
import { motion } from "framer-motion";

export default function skills() {
  const imges = [
    { url: "/html.png", name: "HTML" },
    { url: "/css.png", name: "CSS" },
    { url: "/javascript.png", name: "JavaScript" },
    { url: "/react.png", name: "React" },
    { url: "/tailwind.png", name: "Tailwind CSS" },
    { url: "/github.png", name: "GitHub" },
    { url: "/framer.svg", name: "Framer" },
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
    <div className="snap-center w-full h-screen flex flex-col justify-center items-center ">
      <h1 className="text-4xl flex justify-center items-center text-center">
        Skills 
      </h1>

      <motion.ul
        className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {imges.map((img, index) => (
          <div className="rounded-full shadow-md shadow-gray hover:scale-110 duration-500 mx-2">
            <motion.li className="" key={index} variants={item}>
              <img className="w-20 mx-auto " src={img.url} alt={`Image ${index}`} />
              <p className="my-4">{img.name}</p>
            </motion.li>
          </div>
        ))}
      </motion.ul>
    </div>
  );
}
