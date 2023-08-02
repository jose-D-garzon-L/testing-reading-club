import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState<"red" | "blue">("red");
  const [disabled, setDisabled] = useState<boolean>(false);
  const nextColor = color === "red" ? "blue" : "red";
  const toggleActive = () => setColor(nextColor);
  const toggleDisabled = () => setDisabled(!disabled);

  return (
    <>
      <h1>React testing library</h1>
      <input type="checkbox" onChange={toggleDisabled} />
      <button
        disabled={disabled}
        style={{ backgroundColor: color }}
        onClick={toggleActive}
      >
        Change to {nextColor}
      </button>
    </>
  );
}

export default App;
