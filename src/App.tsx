import { useEffect, useState } from "react";
import "./App.css";

import Background from "./Components/Background/Background";
import Morning from "./Components/Template/Morning";
import Night from "./Components/Template/Night";

function App() {
  const [globalTheme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const handleClick = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", globalTheme);
    localStorage.setItem("theme", globalTheme);
  }, [globalTheme]);

  return (
    <div className={globalTheme}>
      <div className="absolute w-full h-full">
        <Background key={globalTheme} theme={globalTheme} />
        <div
          onClick={handleClick}
          className="pl-4 pt-14 w-fit relative cursor-pointer"
        >
          {globalTheme === "light" ? <Morning /> : <Night />}
        </div>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <h1 className="font-medium text-primary text-2xl">This is the Title</h1>
      </div>
    </div>
  );
}

export default App;
