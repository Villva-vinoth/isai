import React, { useState } from 'react'
import { RiMenuFill, RiMenu4Fill } from "react-icons/ri";
import logo1 from '../assets/home/logo.png'
import '../css/Navbar.css'
import { RiArrowUpSLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Navbar = ({ isHam, setIsHam }) => {
  // const [ham,setHam] = useState()
  // const [isHam, setIsHam] = useState(true)

  const handleNav = () => {
    setIsHam(!isHam);
  };
  const [eventSubMenu, setEventSubMenu] = useState(false)
  return (
    <div className='navigation-cont h-[100%]'>
      <section className='w-[100%]'>
        <div className='p-0' onClick={() => { setIsHam(!isHam) }}>{isHam == false ? <RiMenuFill size={40} /> : <RiMenu4Fill size={40} />}</div>
      </section>
      <section className={isHam ? 'w-[100%] h-[100%] flex flex-col bg-transparent ease-in-out duration-500 index' : 'ease-in-out duration-10 fixed left-[-100%]'}>
        <ul >
          <img src={logo1} alt='' className='w-50 h-20 m-10' />
          <li className='p-3  cursor-pointer flex gap-5 items-center' onClick={() => {
            //  handleNav(); 
            //  nav('/')
          }}><span className=''><AiFillHome /></span>Home</li>
          <li className='p-3  cursor-pointer flex gap-5 items-center' onClick={() => {
            //  handleNav();
            // nav('') 
          }}><span><BsFillInfoCircleFill /></span>About Us</li>
          <li className='p-3  cursor-pointer flex gap-5 items-center  ' onClick={() => {
            // handleNav();
            //  nav('/2017')
            setEventSubMenu(!eventSubMenu)
          }}>EVENTS
            {
              eventSubMenu == true ? (
                <span> <RiArrowUpSLine /></span>
              ) : (
                <span> <MdKeyboardArrowDown /></span>
              )
            }
          </li>
          {
            eventSubMenu && (<ul className='pt-1 px-4'>
              <li className='p-1 flex gap-5 items-center'>Kodai isai</li>
              <li className='p-1 flex gap-5 items-center'>Mega isai</li>
            </ul>)
          }

          {/* <li className='p-4 border-b border-gray-600 cursor-pointer'  onClick={()=>{setNavigation(0);nav('/')}}>SUPPORTERS</li> */}
          <li className='p-3 cursor-pointer flex gap-5 items-center' onClick={() => {
            // handleNav(); 
            //  nav('/awards')
          }}>AWARDS</li>
          <li className='p-3  cursor-pointer flex gap-5 items-center' onClick={() => {
            //  handleNav();
            // nav('/about-us') 
          }}>International Branches</li>  
          <li className='p-3 cursor-pointer flex gap-5 items-center' onClick={() => {
            //  handleNav();
            //  nav('/contact-us')
          }}>CONTACT</li>

        </ul>
        <footer className='social-media-nav p-1 flex flex-col p-3'>
          <h3>Social media</h3>
          <ul className='flex gap-2 p-1'>
            <li> you</li>
            <li>face</li>
            <li>what</li>
            <li>insta</li>
          </ul>
        </footer>

      </section>

    </div>
  )
}

export default Navbar