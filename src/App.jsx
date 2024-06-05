<<<<<<< Updated upstream
import Services from "./components/Services.jsx";
import Magnifier from "./assets/images/magnifier.png"
import Mails from "./assets/images/mails.png"
import Taskbar from "./assets/images/task-bar.png"
import Tabpages from "./assets/images/tab-pages.png"
import Chats from "./assets/images/chats.png"
import Selectarrow from "./assets/images/select-arrow.png"
import Blackarrow from "./assets/images/black-arrow.png"
import Lemonarrow from "./assets/images/lemon-arrow.png"

function App() {

  return (
    <div style={{ padding: "50px" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Services
          title1="Search engine"
          title2="optimization"
          arrow={Lemonarrow}
          image={Magnifier}
          bgColor={"#F3F3F3"}
          arrowcol={"#191A23"}
          bgText={"#B9FF66"}
        />
        <Services
          title1="Pay-per-click"
          title2="advertising"
          arrow={Lemonarrow}
          image={Selectarrow}
          bgColor={"#B9FF66"}
          arrowcol={"#191A23"}
          bgText={"#ffffff"}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Services
          title1="Social Media"
          title2="Marketing"
          arrow={Blackarrow}
          image={Chats}
          bgColor={"#191A23"}
          arrowcol={"#ffffff"}
          bgText={"#ffffff"}
        />
        <Services
          title1="Email"
          title2="Marketing"
          arrow={Lemonarrow}
          image={Mails}
          bgColor={"#F3F3F3"}
          arrowcol={"#191A23"}
          bgText={"#B9FF66"}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Services
          title1="Content"
          title2="Creation"
          arrow={Lemonarrow}
          image={Taskbar}
          bgColor={"#B9FF66"}
          arrowcol={"#191A23"}
          bgText={"#ffffff"}
        />

        <Services
          title1="Analytics and"
          title2="Tracking"
          arrow={Blackarrow}
          image={Tabpages}
          bgColor={"#191A23"}
          arrowcol={"#ffffff"}
          bgText={"#B9FF66"}
        />
      </div>
    </div>
  );
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import HeroSection from './Components/hero'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {


  return (
    <>
      <HeroSection />
    </>
  )
>>>>>>> Stashed changes
}

export default App
