import React, { Suspense } from "react";
import Loading from "../loading";
import ScrollCards from "./components/ScrollCards";

export default function About() {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
  ];
  return (
    <Suspense fallback={<Loading />}>
      <div className="h-screen w-full pt-[90px] pb-[10px] overflow-y-scroll ">
        <div className="h-full w-full">
          <ScrollCards colors={colors} />
        </div>
      </div>
    </Suspense>
  );
}
