import React from "react";
import Typed from "react-typed";
import '../css/Hero.css'
import post1 from '../assets/home/poster.jpeg'
import Sliders from "./Sliders";
const Hero = () => {
  return (
    <>
    <div className="text-white w-full flex items-center justify-center main-container">
      <img src={post1} alt="text" width={'90%'} className="div-image shadow-home"/>

    </div>
    <Sliders />
    </>
  );
};

export default Hero;
