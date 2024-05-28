import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import '../css/Navbar.css'
import logo1 from '../assets/home/logo.png'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {


  const [navi, setNavi] = useState(false);

  const [navigation,setNavigation] = useState(0)

  const handleNav = () => {
    setNavi(!navi);
  };

  const nav = useNavigate()

  return (
    <div className='flex justify-between items-center h-24 w-[full] mx-auto px-4 text-[#000] lg:text-lg md:text-sm font-bold'>

      <img src={logo1} alt='' className='lg:w-50 lg:h-20 lg:m-10 w-30 h-16 mt-1 m-0' />
      <ul className='hidden md:flex gap-5'>
        <li className= {window.location.pathname== '/' ?'p-3 cursor-pointer navigation navi' :'p-3 navigation cursor-pointer'} onClick={()=>{setNavigation(0);nav('/')}}>HOME</li>
        <li className= {window.location.pathname== '' ?'p-3 cursor-pointer navigation navi' :'p-3 navigation cursor-pointer'} onClick={()=>setNavigation(1)}>INTERNATIONAL BRANCHES</li>
        <li className= {window.location.pathname== '/2017' || window.location.pathname== '/2018' || window.location.pathname== '/2019' || window.location.pathname== '/2020' || window.location.pathname== '/2021' || window.location.pathname== '/2022' ?'p-3 cursor-pointer navigation navi' :'p-3 navigation cursor-pointer'} onClick={()=>{setNavigation(7);nav('/2017')}}>EVENTS</li>
        <li className= {window.location.pathname== '' ?'p-3 cursor-pointer navigation navi' :'p-3 navigation cursor-pointer'} onClick={()=>setNavigation(3)}>KODAI ISAI</li>
        <li className= {window.location.pathname== '' ?'p-3 cursor-pointer navigation navi' :'p-3 navigation cursor-pointer'} onClick={()=>setNavigation(4)}>AWARDS</li>
        <li className= {window.location.pathname== '/about-us' ?'p-3 cursor-pointer navigation navi' :'p-3 navigation cursor-pointer'} onClick={()=>{setNavigation(5);nav('/about-us')}}>ABOUT</li>
        <li className= {window.location.pathname== '/contact-us' ?'p-3 cursor-pointer navigation navi' :'p-3 navigation cursor-pointer'} onClick={()=>{setNavigation(6);nav('/contact-us')}}>CONTACT</li>
      </ul>
      <div className='relative'>
      <div onClick={handleNav} className='block md:hidden '>
          {navi ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
      </div>
      <ul className={navi ? 'fixed left-0 top-0 w-[80%] h-[100%] border-r border-r-gray-900 bg-[white] ease-in-out duration-500 index' : 'ease-in-out duration-10 fixed left-[-100%]'}>
      <img src={logo1} alt='' className='w-50 h-20 m-10'  />
          <li className='p-4 border-b border-gray-600 cursor-pointer'  onClick={()=>{handleNav();nav('/')}}>Home</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer'  onClick={()=>{handleNav();nav('')}}>INTERNATIONAL BRANCHES</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer'  onClick={()=>{handleNav();nav('/2017')}}>EVENTS</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer'  onClick={()=>{handleNav();nav('/')}}>KODAI ISAI</li>
          {/* <li className='p-4 border-b border-gray-600 cursor-pointer'  onClick={()=>{setNavigation(0);nav('/')}}>SUPPORTERS</li> */}
          <li className='p-4 border-b border-gray-600 cursor-pointer'  onClick={()=>{handleNav();nav('/')}}>AWARDS</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer'  onClick={()=>{handleNav();nav('/about-us')}}>ABOUT</li>
          <li className='p-4 cursor-pointer'  onClick={()=>{handleNav();nav('/contact-us')}}>CONTACT</li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
