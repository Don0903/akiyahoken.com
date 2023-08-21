import Home from "@/app/components/home";
import About from "@/app/components/about";
import Skills from "@/app/components/skills";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Contacts from "./components/contacts";
import Provider from "./components/Provider";

export default function Landing() {
  return (
    <Provider>
      <Suspense fallback={<Loading />}>
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
          <Home />
          <About />
          <Skills />
          <Contacts />
        </div>
      </Suspense>
    </Provider>
  );
}
