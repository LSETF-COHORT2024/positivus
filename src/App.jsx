import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Working_proces from "./Component/Working_proces";
import OurFisrtSection from "./Component/OurFisrtSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <OurFisrtSection />
      <Working_proces />
    </>
  );
}

export default App;
