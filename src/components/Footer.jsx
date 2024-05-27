import React from "react";
import {
  FaAddressCard,
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaPhoneAlt,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const Footer = () => {

  const nav = useNavigate()



  return (
   <div>
     <div className="max-w-[1240px] mx-auto py-5 px-4 grid lg:grid-cols-3 lg:gap-8 text-gray-300">
      <div>
        <div className="flex gap-2 items-center">
          <img
            src="https://tamilcultural.org/img/core-img/logo.png"
            alt=""
            className="w-20 h-20"
          />
          <p className="py-4 text-[red] text-xl  m-0 p-0">
            <span className="font-bold alegreya-class">T</span>amil{" "}
            <span className="font-bold alegreya-class">C</span>ultural{" "}
            <span className="font-bold alegreya-class">A</span>cademy
          </p>
        </div>
        <p className="py-4 text-[#121481]  m-0 p-0 alegreya-class">
          Mega Isai Vizha is a unique name with intent of recognizing the number
          of Tamil Poets and Carnatic Music Composers..
        </p>
        <div className="flex gap-3 ">
          <FaFacebookSquare size={30} color="blue" />
          {/* <FaInstagram size={30} /> */}
          {/* <FaTwitterSquare size={30} /> */}
          {/* <FaGithubSquare size={30} /> */}
          <FaYoutubeSquare size={30} color="red" />
        </div>
      </div>
      <div className="lg:col-span-2 flex lg:justify-between lg:flex-row flex-col lg:mt-6 mt-2">
        <div>
          <h6 className="font-medium text-gray-400 my-2 ">Address</h6>
          <div>
            <p className="flex gap-2 text-[#121481]">
              <span>
                <FaAddressCard size={20} color="red" />
              </span>{" "}
              136,2nd Floor , Linghi Chetty Street, Chennai-600001
            </p>
            <p className="flex gap-2 text-[#121481]">
              <span>
                <FaAddressCard size={20} color="red"/>
              </span>{" "}
              Malhotra House, New No : 294, Suite No.1 B, 1st Floor,
              <br /> Opp. Dhanalakshmi Bank, Thambu Chetty Street, Chennai - 600
              001.
            </p>
          </div>

          <h6 className="font-medium text-gray-400 my-2 ">Phone</h6>
          <div>
            <p className="flex gap-2 items-center text-[#121481]">
              <span>
                <FaPhoneAlt size={20} color="orange"/>
              </span>{" "}
              +914442160390
            </p>
            <p className="flex gap-2 items-center text-[#121481]">
              <span>
                <FaPhoneAlt size={20} color="orange"/>
              </span>{" "}
              +919840239597
            </p>
          </div>
          <h6 className="font-medium text-gray-400 my-2 ">Email</h6>
          <div>
            <p className="flex gap-2 items-center text-[#121481]"> 
            <span>
                <MdEmail size={20} color="blue"/>
              </span>{" "}
              tamilculturalacademy@gmail.com</p>
          </div>
        </div>

        <div className="mt-2">
          <h6 className="font-medium text-xl text-gray-500">Resources Link</h6>
          <ul>
            <li className="py-2 text-l cursor-pointer text-[#121481] ft-navigation" onClick={()=>nav('/about-us')}>About Us</li>
            <li className="py-2 text-l cursor-pointer text-[#121481] ft-navigation" onClick={()=>nav('')}>Photos</li>
            <li className="py-2 text-l cursor-pointer text-[#121481] ft-navigation" onClick={()=>nav('')}>Videos</li>
            <li className="py-2 text-l cursor-pointer text-[#121481] ft-navigation" onClick={()=>nav('/contact-us')}>Contact us</li>
            <li className="py-2 text-l cursor-pointer text-[#121481] ft-navigation" onClick={()=>nav('')}>Nomination</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center text-xl text-center">
    Copyright ©️ 2024 <span className="alegreya-class"> &nbsp; Tamil Cultural Acedamy &nbsp;</span> | All Rights Reserved. | powered By <span className="alegreya-class hover:text-[green]" >&nbsp;<a href="https://rakumuraitsolutions.com/" target="_blank" rel="noopener noreferrer" > Rakumara IT Solutions </a> &nbsp;</span>
    </div>
   </div>
  );
};

export default Footer;
