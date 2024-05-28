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
      <div className="w-[100%] footer-main-container mx-auto py-5 px-4 grid lg:grid-cols-3 md:grid-cols-3 lg:gap-8 md:gap-8 lg:justify-items-center md:justify-items-center text-gray-300">
        <div className="">
          <div className="flex gap-2 items-center">
            <img
              src="https://tamilcultural.org/img/core-img/logo.png"
              alt=""
              className="w-20 h-20"
            />
            <p className="py-4 text-[red] text-xl footer-shadow m-0 p-0">
              <span className="font-bold alegreya-class">T</span>amil{" "}
              <span className="font-bold alegreya-class">C</span>ultural{" "}
              <span className="font-bold alegreya-class">A</span>cademy
            </p>
          </div>
          <p className="py-4 text-[white] text-lg  m-0 p-0 alegreya-class">
            Mega Isai Vizha is a unique name with intent of recognizing the number
            of Tamil Poets and Carnatic Music Composers..
          </p>
          <div className="flex gap-3 ">
           <a href="https://www.facebook.com/people/Tamil-Cultural-Academy/100078538407715/?locale=hi_IN" target="_blank" className="social-media"> <FaFacebookSquare size={30} color="blue" /> </a>
            {/* <FaInstagram size={30} /> */}
            {/* <FaTwitterSquare size={30} /> */}
            {/* <FaGithubSquare size={30} /> */}
           <a href="https://www.youtube.com/channel/UCCi2Ud8YLOYOzdib9tVHEZg" target="_blank" className="social-media" > <FaYoutubeSquare size={30} color="red" /> </a>
          </div>
        </div>
        <div className="text-lg">
            <h6 className="font-medium text-[red] my-3 footer-shadow ">Address</h6>
            <div>
              <p className="flex gap-2 text-[#FFF] my-1 alegreya-class">
                <span>
                  <FaAddressCard size={20} color="red"  />
                </span>{" "}
                136,2nd Floor , Linghi Chetty Street, Chennai-600001
              </p>
              <p className="flex gap-2 text-[#FFF] my-1 alegreya-class">
                <span>
                  <FaAddressCard size={20} color="red" />
                </span>{" "}
                Malhotra House, New No : 294, Suite No.1 B, 1st Floor,
                Opp. Dhanalakshmi Bank, Thambu Chetty Street, Chennai - 600
                001.
              </p>
            </div>

            <h6 className="font-medium text-[red] footer-shadow my-2 ">Phone</h6>
            <div>
              <p className="flex gap-2 items-center text-[#FFF] my-1 ">
                <span>
                  <FaPhoneAlt size={20} color="orange" />
                </span>{" "}
                +914442160390
              </p>
              <p className="flex gap-2 items-center text-[#FFF] my-1">
                <span>
                  <FaPhoneAlt size={20} color="orange" />
                </span>{" "}
                +919840239597
              </p>
            </div>
            <h6 className="font-medium text-[red] footer-shadow my-2 ">Email</h6>
            <div>
              <p className="flex gap-2 items-center text-[#FFF]  my-1 alegreya-class">
                <span>
                  <MdEmail size={20} color="blue" />
                </span>{" "}
                tamilculturalacademy@gmail.com</p>
            </div>
          </div>

          <div className="mt-2">
            <h6 className="font-medium text-xl footer-shadow text-[red]">Resources Link</h6>
            <ul>
              <li className="py-2 text-lg cursor-pointer text-[#FFF] ft-navigation alegreya-class" onClick={() => nav('/about-us')}>About Us</li>
              <li className="py-2 text-lg cursor-pointer text-[#FFF] ft-navigation alegreya-class" onClick={() => nav('')}>Photos</li>
              <li className="py-2 text-lg cursor-pointer text-[#FFF] ft-navigation alegreya-class" onClick={() => nav('')}>Videos</li>
              <li className="py-2 text-lg cursor-pointer text-[#FFF] ft-navigation alegreya-class" onClick={() => nav('/contact-us')}>Contact us</li>
              <li className="py-2 text-lg cursor-pointer text-[#FFF] ft-navigation alegreya-class" onClick={() => nav('')}>Nomination</li>
            </ul>
          </div>

        {/* lg:col-span-2 md:row-span-3 flex lg:justify-between lg:flex-row flex-col lg:mt-6 mt-2 */}
        {/* <div className="grid grid-cols-2" >
         
          
        </div> */}
      
      </div>
      <div className="text-center p-4 my-1">
        Copyright ©️ 2024 
        <span className="alegreya-class text-[red]">
          &nbsp; Tamil Cultural Acedamy&nbsp;
        </span>
        |
        powered By 
        <span className="alegreya-class hover:text-[green] text-[blue]" >
          &nbsp;
          <a href="https://rakumuraitsolutions.com/" target="_blank" rel="noopener noreferrer" >
            Rakumara IT Solutions 
            </a> &nbsp;
          </span>
      </div>
    </div>
  );
};

export default Footer;
