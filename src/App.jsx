import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Working_proces from "./Component/Working_proces";

import Work_Team from "./Component/Work_Team";
import Team from "./Component/Team";
import Numbering from "./Component/Numbering";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Work_Team />
      <br />
      <Numbering />
      <Working_proces />
      <Team />
    </>
  );
}

export default App;
