import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Navbar";
import Slider from "./components/Slider";
import { images } from "./components/index";
import Preloader from "./components/Preloader";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex1, setActiveIndex1] = useState(0);
  const backgroundImages = [
    "url(https://images.hdqwalls.com/wallpapers/spiderman-logo-background-4k-vv.jpg)",
    "url(https://wallpapercave.com/wp/wp5213206.jpg)", 
    "url(https://wallpapercave.com/wp/wp3324196.jpg)", 
    "url(https://wallpapercave.com/wp/wp7631332.jpg)", 
    "url(https://wallpapercave.com/wp/wp12613665.jpg)", 
  ];

  const darkStyle = {
    backgroundImage: backgroundImages[activeIndex],
  };

  const handleSliderChange = (newIndex) => {
    if (newIndex >= 0 && newIndex < images.length) {
      setActiveIndex(newIndex);
    }
  };

  
  return (
    <div className="dark"
    style={darkStyle}>
      <div className="wrapper">
        <Preloader></Preloader>
        <Header></Header>
        <Sidebar
          activeIndex={activeIndex}
          onSliderChange={handleSliderChange}
        ></Sidebar>
        <Slider activeIndex={activeIndex} activeIndex1={activeIndex1}></Slider>
      </div>
    </div>
  );
}

export default App;
