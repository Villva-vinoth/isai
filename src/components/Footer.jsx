import React from "react";
import { FaPhoneAlt } from "react-icons/fa";


import { MdOutlineShareLocation } from "react-icons/md";


import { FiYoutube } from "react-icons/fi";

import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import '../css/footer.css'
import logo from '../assets/home/logo.png'


const Footer = () => {

  const nav = useNavigate()



  return (
    <footer className="w-[100%]">
      <section className="footer-section-one">


        <div className="footer-section-one-first">
          <img
            src={logo}
            alt=""
            // className="w-20 h-20"
          />
          <div className="footer-sub-first">
            <p className=" text-[red] xl:text-xl sm:text-lg footer-shadow m-0 p-0">
              <span className="font-bold alegreya-class">T</span>amil{" "}
              <span className="font-bold alegreya-class">C</span>ultural{" "}
              <span className="font-bold alegreya-class">A</span>cademy
            </p>
            <p className="text-[white] xl:text-lg sm:text-sm  m-0 p-1 alegreya-class">
              Mega Isai Vizha is a unique name with intent of recognizing the number
              of Tamil Poets and Carnatic Music Composers..
            </p>
          </div>
        </div>

        <div className="footer-section-two-second">
          <h3 className="address-footer"><span className="circle-footer"><MdLocationOn size={15} /></span>Address</h3>
          <ul>
            <li>136,2nd Floor , Linghi Chetty Street, Chennai-600001</li>
            <li>Malhotra House, New No : 294, Suite No.1 B, 1st Floor,
              Opp. Dhanalakshmi Bank, Thambu Chetty Street, Chennai - 600 001.</li>
          </ul>
        </div>

        <div className="footer-section-three-third">
          <h3 className="contact-footer"><span className="circle-footer"><MdPhone size={15} /></span>Contact</h3>
          <ul>
            <li>+91 - 4442 160 390</li>
            <li>+91 - 9840 239 597</li>
          </ul>
        </div>

        <div className="footer-section-four-fourth">
          <h3 className="email-footer"><span className="circle-footer"><MdEmail size={15} /></span>Email</h3>
          <ul>
            <li>tamilculturalacademy@gmail.com</li>
            {/* <li>+91 - 9840 239 597</li> */}
          </ul>
        </div>

      </section>
      <section className="text-center p-4 footer-section-2 text-[white]">
        Copyright ©️ 2024
        <span className="alegreya-class text-[red]">
          &nbsp; Tamil Cultural Acedamy&nbsp;
        </span>
        |
        powered By
        <span className="alegreya-class hover:text-[red] text-[white] underline" >
          &nbsp;
          <a href="https://rakumuraitsolutions.com/" target="_blank" rel="noopener noreferrer" >
            Rakumara IT Solutions
          </a> &nbsp;
        </span>
      </section>
    </footer>
  );
};

export default Footer;
