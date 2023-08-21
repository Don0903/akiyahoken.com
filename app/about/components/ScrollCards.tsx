import React from 'react'

interface ScrollCardsProps {
  colors: string[];
}

export default function ScrollCards({ colors }: ScrollCardsProps) {
  return (
    <div className="flex flex-wrap h-full w-full">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`w-full h-full rounded-2xl ${color}`}
        ></div>
      ))}
    </div>
  );
}