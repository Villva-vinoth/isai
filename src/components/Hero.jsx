import React, { useEffect } from "react";
import Typed from "react-typed";
import '../css/Hero.css'
import post1 from '../assets/home/poster.jpeg'
import Sliders from "./Sliders";

import { IoMusicalNotesSharp } from "react-icons/io5";


const Hero = ({ songs }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <div className="home-main-container">
        <div className="my-1   w-[95%] flex flex-col main-container">
          <h1 className="lg:text-2xl md:text-2xl text-lg   font-bold  mt-1">Trending Hits</h1>
          <img src={post1} alt="text" width={'95%'} className="div-image shadow-home" />
        </div>
        {/* <div className="my-1 home-music-main-container">
        <div className="lg:text-2xl md:text-2xl text-lg  font-bold mt-1">Songs</div>

        <div className="home-music-container">
          {
            songs.map((item) => {
              return (
                <div className="home-music-card">
                  <img src={item.albumArt} alt="" />
                  <span className="music-home-icon"><IoMusicalNotesSharp /></span>
                  <h4 className="music-artist-name">{item.artist}</h4>
                  <h2 className="px-1 text-lg font-bold ">{item.title}</h2>
                  <p className="px-1 text-lg ">{item.year}</p>
                </div>
              )
            })
          }
        </div>
        </div> */}
        <Sliders />
      </div>
    </>
  );
};

export default Hero;
