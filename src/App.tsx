import { useState } from "react";
import "./App.css";

import Background from "./Components/Background/Background";
import Morning from "./Components/Template/Morning";
import Night from "./Components/Template/Night";
import { motion } from "motion/react";
import { cn } from "./lib/utils";

function App() {
  const [globalTheme, setTheme] = useState("light");

  const handleClick = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <div className={cn(globalTheme, "h-screen w-screen overflow-hidden")}>
      <div className="absolute h-full w-full">
        <Background key={globalTheme} theme={globalTheme} />
        <motion.div
          onClick={handleClick}
          className="relative h-fit w-fit cursor-pointer pt-14 pl-4"
        >
          {globalTheme === "light" ? <Morning /> : <Night />}
        </motion.div>
      </div>

      <div className="mt-[14vh] flex h-full w-full items-start justify-center md:mt-[10vh]">
        <h1 className="text-primary text-center text-[15vw] leading-relaxed font-medium tracking-wide md:text-9xl">
          WORRIER
        </h1>
      </div>
    </div>
  );
}

export default App;
