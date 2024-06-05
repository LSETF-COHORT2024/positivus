
import './assets/CSS/ImageGallerry.css'
import image6 from './assets/images/image6.png';
import image1 from './assets/images/image1.png';
import image2 from './assets/images/image2.png';
import image3 from './assets/images/image3.png';
import image4 from './assets/images/image4.png';
import image5 from './assets/images/image5.png';
import Adams from './components/Adams';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import HeroSection from './components/hero'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>
       <HeroSection />
       <Adams/>
    <div className="image-gallery">
      <img src={image6} alt="Image 6" />
      <img src={image1} alt="Image 1" />
      <img src={image5} alt="Image 5" />
      <img src={image4} alt="Image 4" />
      <img src={image3} alt="Image 3" />
      <img src={image2} alt="Image 2" /> 
      </div>
      
     
      
    </div>
);

}

export default App
