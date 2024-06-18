import React, { useState } from 'react'
import { RiMenuFill, RiMenu4Fill } from "react-icons/ri";
import logo1 from '../assets/home/logo.png'
import '../css/Navbar.css'
import { RiArrowUpSLine } from "react-icons/ri";
import { MdKeyboardArrowDown, MdEmojiEvents, MdCalendarMonth, MdPhone } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill, BsYoutube, BsFacebook } from "react-icons/bs";
import { SiOpenstreetmap } from "react-icons/si";
import { CgInstagram } from "react-icons/cg";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isHam, setIsHam }) => {
  // const [ham,setHam] = useState()
  // const [isHam, setIsHam] = useState(true)

  console.log('win',window.location.pathname)

  const nav = useNavigate()
  const handleNav = () => {
    setIsHam(!isHam);
  };
  const [eventSubMenu, setEventSubMenu] = useState(false)
  return (
    <div className='navigation-cont h-[100%]'>
      <section className='w-[100%]'>
        <div className='p-0' onClick={() => { setIsHam(!isHam) }}>{isHam == false ? <RiMenuFill size={40} /> : <RiMenu4Fill size={40} />}</div>
      </section>
      <section className={isHam ? 'w-[100%] h-[95%] flex flex-col justify-between bg-transparent ease-in-out duration-500 index' : 'ease-in-out duration-10 fixed left-[-100%]'}>
        <ul className='flex flex-col'>
          <img src={logo1} alt='' className='w-20 h-20 m-10' />
          <h4 className='px-3'>Menu</h4>
          <li className={window.location.pathname == '/' ? 'p-3  cursor-pointer  flex gap-5 items-center active-navbar' : 'p-3  cursor-pointer flex gap-5 items-center'} onClick={() => {
             handleNav(); 
            nav('/')
          }}><span className=''><AiFillHome size={20} /></span>Home</li>
          <li className={window.location.pathname == '/about-us' ? 'p-3  cursor-pointer flex gap-5 items-center active-navbar' : 'p-3  cursor-pointer flex gap-5 items-center'} onClick={() => {
             handleNav();
            nav('/about-us')
          }}><span><BsFillInfoCircleFill size={20} /></span>About Us</li>

          <li className='p-3  cursor-pointer flex gap-5 items-center ' onClick={() => {
           
            //  nav('/2017')
            setEventSubMenu(!eventSubMenu)
          }}>
            <span><MdCalendarMonth size={20} /></span>
            Events
            {
              eventSubMenu == true ? (
                <span> <RiArrowUpSLine /></span>
              ) : (
                <span> <MdKeyboardArrowDown /></span>
              )
            }
          </li>
          {
            eventSubMenu &&
            (
              <ul className='pt-1 px-10'>
                <li className={window.location.pathname == '/kodai-s1' ? 'p-1 flex gap-5 items-center cursor-pointer active-navbar' : 'p-1 flex gap-5 items-center cursor-pointer'} onClick={() => {nav('/kodai-s1'); handleNav();}}>Kodai isai</li>
                <li className={window.location.pathname == '/2017' ? 'p-1 flex gap-5 items-center cursor-pointer active-navbar' : 'p-1 flex gap-5 items-center cursor-pointer'} onClick={() => {nav('/2017');  handleNav();}}>Mega isai</li>
              </ul>
            )
          }

          {/* <li className='p-4 border-b border-gray-600 cursor-pointer'  onClick={()=>{setNavigation(0);nav('/')}}>SUPPORTERS</li> */}
          <li className={window.location.pathname == '/awards' ? 'p-3 cursor-pointer flex gap-5 items-center active-navbar' : 'p-3 cursor-pointer flex gap-5 items-center'} onClick={() => {
            handleNav(); 
            nav('/awards')
          }}>
            <span><MdEmojiEvents size={20} /></span>
            Awards</li>
          <li className={window.location.pathname == '/international-branch' ? 'p-3 cursor-pointer flex gap-5 items-center active-navbar':'p-3  cursor-pointer flex gap-5 items-center'} onClick={() => {
             handleNav();
            nav('/international-branch') 
          }}>  
            <span><SiOpenstreetmap size={20} /></span>
            International Branches</li>

          <li className={window.location.pathname == '/contact-us' ? 'p-3 cursor-pointer flex gap-5 items-center active-navbar' : 'p-3 cursor-pointer flex gap-5 items-center'} onClick={() => {
             handleNav();
            nav('/contact-us')
          }}>
            <span><MdPhone size={20} /></span>
            Contact</li>

        </ul>
        <footer className='social-media-nav p-1 flex flex-col p-3'>
          <h3 className='text-xl font-medium my-2 p-1'>Social media</h3>
          <ul className='flex gap-5 p-1'>
            <li className='cursor-pointer'>
              <span><BsYoutube size={30} color='red' /></span>
              </li>
            <li className='cursor-pointer'>
              <span><BsFacebook size={30} color='blue' /></span>
              </li>
            <li className='cursor-pointer'>
              <span><CgInstagram size={30} color='purple' /></span>
              </li>
            {/* <li className='cursor-pointer'><span><BiLogoWhatsappSquare size={25} color='green' /></span></li> */}
          </ul>
        </footer>

      </section>

    </div>
  )
}

export default Navbar