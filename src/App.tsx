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
    <>
      <Background key={globalTheme} theme={globalTheme} />
      <div
        onClick={handleClick}
        className="pl-4 pt-14 w-fit relative cursor-pointer"
      >
        {globalTheme == "morning" ? <Morning /> : <Night />}
      </div>
    </>
  );
}

export default App;
