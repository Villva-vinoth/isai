import React, { useState } from 'react'
import '../css/header.css'
import { MdCircleNotifications } from 'react-icons/md'

import { RiMenu4Fill, RiMenuFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
const Header = ({ isHam, setIsHam,theme,setTheme,toggleTheme }) => {

    const nav = useNavigate()
    // const [theme, setTheme] = useState('light');

    // const toggleTheme = () => {
    //     setTheme(theme === 'light' ? 'dark' : 'light');
    // };

    const css = theme == 'dark' ? {
        backgroundColor:"#530018"
    }: {
        backgroundColor:"white"
    }

    return (
        <div className='flex w-[100%] justify-between  header-main-div' style={css}>
            <div className='p-2 header-sub-one' onClick={() => { setIsHam(!isHam) }}>{isHam == false ? <RiMenuFill size={40} /> : <RiMenu4Fill size={40} />}</div>
            <div className='header-sub-two hidden-com'>
                <ul className='flex justify-evenly p-1 hidden-com'>
                    <li >New release</li>
                    <li>Shufftle play</li>
                    <li className='live-Event'>Live Events</li>
                </ul>
            </div>
            <div className='text-center  mobile' onClick={()=>nav('/')}>
                Tamil Cultural Academy
            </div>
            <div className="toggle-container flex gap-5 items-center">
                <input type="checkbox" id="switch" checked={theme === 'dark'} onChange={toggleTheme} />
                <label htmlFor="switch" className="toggle-label"></label>
                <span className='p-1 m-1 '><MdCircleNotifications size={40} /></span>
            </div>

        </div>
    )
}

export default Header