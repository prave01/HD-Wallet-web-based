import { useState } from "react";
import "./App.css";

import Background from "./Components/Background/Background";
import Morning from "./Components/Template/Morning";
import Night from "./Components/Template/Night";

function App() {
  const [globalTheme, setTheme] = useState<"morning" | "night">("night");

  const handleClick = () => {
    setTheme(globalTheme == "night" ? "morning" : "night");
  };

  return (
    <div className="">
      <div className="absolute w-full h-full">
        <Background key={globalTheme} theme={globalTheme} />
        <div
          onClick={handleClick}
          className="pl-4 pt-14 w-fit relative cursor-pointer"
        >
          {globalTheme == "morning" ? <Morning /> : <Night />}
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <h1 className="font-medium text-white/40 text-2xl">
          This is the Title
        </h1>
      </div>
    </div>
  );
}

export default App;
