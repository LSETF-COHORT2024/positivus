import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Working_proces from "./Component/Working_proces";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Working_proces />
    </>
  );
}

export default App;
