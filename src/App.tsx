import { useState } from "react";
import "./App.css";

import Background from "./Components/Background/Background";
import Morning from "./Components/Template/Morning";
import Night from "./Components/Template/Night";
import { motion } from "motion/react";
import { cn } from "./lib/utils";
import Content from "./Components/Template/Pages/Content";

function App() {
  const [globalTheme, setTheme] = useState("light");

  const handleClick = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <div
      className={cn(globalTheme, "relative h-screen w-screen overflow-hidden")}
    >
      <div className="absolute -z-10 h-full w-full">
        <Background key={globalTheme} theme={globalTheme} />
      </div>

      <motion.div
        onClick={handleClick}
        className="absolute z-10 cursor-pointer pt-14 pl-5"
      >
        {globalTheme === "light" ? <Morning /> : <Night />}
      </motion.div>
      <Content />
    </div>
  );
}

export default App;
