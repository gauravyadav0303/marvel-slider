import React from "react";
import { images } from "./index";
import { motion } from "framer-motion";

const Xcard = ({ big, color, name, bold, description, description1, description2, coloro, size }) => {
  const line1Style = {
    border: `2px solid ${coloro}`,
    transition: "border 0.5s ease-in-out",
  };

  const maxSliderWrapperImg= {
    width : `${size}`
  }

  return (
    <motion.div className="max-slider-wrapper"
    initial={{ opacity: 0, y: 0 }} // Initial animation state
    animate={{ opacity: 1, y: 0 }} // Animation when component enters
    transition={{ duration: 0.6, delay:0.6 }}
    >
      <div className="big-img">
        <img src={big} alt="Iron-man" style={maxSliderWrapperImg} />
      </div>
      <div className="big-text">
        <span>{bold}</span>{name}
      </div>
      <div className="line-wrapper">
        <div className="line1" style={line1Style}></div>
        <div className="line2"></div>
      </div>
      <div className="description-wrapper">
        <div className="description">{description}</div><br /><br />
        <div className="description1">{description1}</div><br /><br />
        <div className="description2">{description2}</div>
      </div>
    </motion.div>
  )
}

const Card = ({ image, color, bold, name, isActive }) => {
  const miniImgStyle = {
    width: "100%",
    borderLeft: `6px solid ${color}`,
    height: "100%",
    opacity: isActive ? 1 : 0.3,
    filter: isActive ? "none" : "blur(5px)",
  };

  const miniImgBeforeStyle = {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "50%",
    height: "100%",
    background: `linear-gradient(to right, ${color} -40%, transparent 100%)`,
  };

  return (
    <div className="mini-slider">
      <div className="mini-slider-wrapper">
        <div className={`mini-img ${isActive ? "active" : ""}`} style={miniImgStyle}>
          <div style={miniImgBeforeStyle}></div>
          <img src={image} alt={name} />
        </div>
        <div className={`mini-text ${isActive ? "active" : ""}`}>
          <span>{bold}</span> {name}
        </div>
      </div>
    </div>
  );
};

function Slider({ activeIndex }) {


  
  console.log(activeIndex)
  return (
    <section className="slider">
      <div className="slider-left-side">
        {images.map((image, index) => (
          <Card
            key={image.image}
            index={index}
            {...image}
            isActive={index === activeIndex}
          />
        ))}
      </div>
      <div className="slider-right-side">
      <Xcard {...images[activeIndex]} />

      </div>
    </section>
  );
}


export default Slider;
