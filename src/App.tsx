import { useState } from "react";
import "./App.css";

import Background from "./Components/Background/Background";
import Morning from "./Components/Template/Morning";
import Night from "./Components/Template/Night";
import { motion } from "motion/react";
import { cn } from "./lib/utils";
import Content from "./Components/Pages/Content";
import { useHotkeys } from "react-hotkeys-hook";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    Component: App,
  },
]);

function App() {
  const [globalTheme, setTheme] = useState("light");

  useHotkeys("alt+t", () => {
    globalTheme == "light" ? setTheme("dark") : setTheme("light");
  });

  const handleClick = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={cn(globalTheme, "relative h-screen w-screen overflow-hidden")}
    >
      <div className="absolute -z-40 h-full w-full">
        <Background key={globalTheme} theme={globalTheme} />
      </div>
      <motion.div
        onClick={handleClick}
        className="absolute z-50 cursor-pointer pt-14 pl-5"
      >
        {globalTheme === "light" ? <Morning /> : <Night />}
      </motion.div>
      <Content />
    </div>
  );
}

export default App;
