"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const avatarImages = [
  "/profile1.jpeg?height=400&width=400&text=Photo+1",
  "/profile.jpg?height=400&width=400&text=Photo+2",
];

export default function AvatarFlipper() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleFlip = () => {
    if (isFlipping) return;

    setIsFlipping(true);
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % avatarImages.length);
      setIsFlipping(false);
    }, 150);
  };

  return (
    <div className="flex justify-center mb-8">
      <motion.button
        onClick={handleFlip}
        className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 hover:border-primary/40 transition-colors cursor-pointer group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotateY: isFlipping ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <img
            src={avatarImages[currentImage] || "/placeholder.svg"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white text-xs font-medium">Click to flip</span>
        </div>
      </motion.button>
    </div>
  );
}
