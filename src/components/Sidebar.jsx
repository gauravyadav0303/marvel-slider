import React from "react";
import logo from '../assets/logo.png';
import { images } from "./index";

function Sidebar({ activeIndex, onSliderChange }) {
  const handleUpClick = () => {
    if (activeIndex > 0) {
      onSliderChange(activeIndex - 1);
    }
  };

  const handleDownClick = () => {
    if (activeIndex < images.length - 1) {
      onSliderChange(activeIndex + 1);
    }
  };
  

const colorpalette =[
  "rgb(249, 12, 12)",
  "rgb(91, 8, 136)",
  "rgb(249, 12, 12)",
  "rgb(100, 153, 233)",
  "rgb(18, 72, 107)",
];

const buttonStyle = {
  width: "100%",
  height: "4rem",
  backgroundColor: colorpalette[activeIndex],
  border: "none",
  borderRadius: "3px",
  color: "white",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.5s ease",
  boxShadow: `0px 0px 10px ${colorpalette[activeIndex]}`,
}


  return (
    <div className="header_area">
      <div className="header__inner">
        <div className="logo-image">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-icons"></div>
        <div className="header-bottom">
          <div className="arrow-up">
            <button onClick={handleUpClick} style={buttonStyle} id="prev"><span>{"<"}</span></button>
          </div>
          <div className="scroll-text">Scroll</div>
          <div className="arrow-down">
            <button onClick={handleDownClick} style={buttonStyle} id="next"><span>{"<"}</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Sidebar;
