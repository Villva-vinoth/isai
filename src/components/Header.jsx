import React, { useState } from 'react'
import '../css/header.css'


import { RiMenu4Fill, RiMenuFill } from 'react-icons/ri';
const Header = ({ isHam, setIsHam }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className='flex w-[100%] justify-between bg-[white] header-main-div'>
            <div className='p-2' onClick={() => { setIsHam(!isHam) }}>{isHam == false ? <RiMenuFill size={40} /> : <RiMenu4Fill size={40} />}</div>
            <div>
                <ul className='flex'>
                    <li>New release</li>
                    <li>Shufftle play</li>
                    <li>Live Events</li>

                </ul>
            </div>
            <div className="toggle-container">
                <input type="checkbox" id="switch" checked={theme === 'dark'} onChange={toggleTheme} />
                <label htmlFor="switch" className="toggle-label"></label>
            </div>
        </div>
    )
}

export default Header