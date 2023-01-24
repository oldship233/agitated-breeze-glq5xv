import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Push from "./component/Push";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Push />
    </div>
  );
}

export default App;
