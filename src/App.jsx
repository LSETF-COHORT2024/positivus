import { REACT } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Working_proces from "./Component/Working_proces";
import NumberOne from "./Component/NumberOne"

import Work_Team from "./Component/Work_Team";
import Team from "./Component/Team";
import Numbering from "./Component/Numbering";
function App() {
  return (
    <>
      <Work_Team />
      <br />
      <NumberOne />
      <Numbering number="02" content="Research and Strategy Development" />
      <Numbering number="03" content="Implementation" />
      <Numbering number="04" content="Monitoring and Optimization" />
      <Numbering number="05" content="Reporting and Communication" />
      <Numbering number="06" content="Continual Improvement" />
      <Team />
      <Working_proces />
    </>
  );
}

export default App;
