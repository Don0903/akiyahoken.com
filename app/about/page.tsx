import React, { Suspense } from "react";
import Loading from "../loading";

export default function About() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full h-screen snap-center flex flex-col items-center justify-center">
        About page in progress
      </div>
    </Suspense>
  );
}
