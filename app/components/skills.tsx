"use client";
import { motion} from "framer-motion";

export default function skills() {

  
  const imges = [
    "/html.png",
    "/css.png",
    "/javascript.png",
    "/react.png",
    "/tailwind.png",
    "/github.png",
    "/framer.svg",

  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
        Skills in development
      </h1>
      <div >
        <motion.ul
         className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true} }
        >
          {imges.map((img, index) => (
            <motion.li className="" key={index} variants={item}>
              <img className="w-20 mx-auto " src={img} alt={`Image ${index}`} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
