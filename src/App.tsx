import "./App.css";

import Background from "./Components/Background/Background";
import Morning from "./Components/Template/Morning";

function App() {
  return (
    <>
      <Background />
      <div className="pl-6 pt-14 relative ">
        <Morning />
      </div>
    </>
  );
}

export default App;
