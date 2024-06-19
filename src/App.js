import React, { useEffect, useRef, useState } from 'react';
import Footer from './components/Footer';
import './App.css'

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Gallery from './components/Gallery';
import season1 from './datas/season1'
import y_2017 from './datas/2017'
import seasons from './datas/seasons'
import y_2018 from './datas/2018'
import y_2019 from './datas/2019'
import y_2020 from './datas/2020'
import y_2021 from './datas/2021'
import y_2022 from './datas/2022'
import video from './datas/video'
import kodai_seasons from './datas/kodaiSeasons';
import Kodai_s1 from './datas/kodai-s1'
import Kodai_s2 from './datas/kodai-s2'
import Kodai_s3 from './datas/kodai-s3'
import Kodai_s4 from './datas/kodai-s4'
import Kodai_s5 from './datas/kodai-s5'
import photo from './datas/photo'
import awards from './datas/awards'

import Contact from './components/Contact';
import VideoPlayer from './components/Video';
import Nomination from './components/Nomination';
import Header from './components/Header';
import Music from './components/Music';

import albumArt1 from './assets/music/musicimg1.png';
import albumArt2 from './assets/music/musicimg2.png';
import albumArt3 from "./assets/music/musicimg3.png";
import audio from "./assets/music/aud2.mp3"
import InternationalBranches from './components/InternationalBranches';



function App() {

  const [scrollbtn, setScrollbtn] = useState(false)



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollbtn(true);
      } else {
        setScrollbtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const [isHam, setIsHam] = useState(false)

  const songs = [
    {
      title: 'Song Title 1',
      artist: 'Artist Name 1',
      albumArt: albumArt1,
      year: 2002,
      audioSrc: audio
    },
    {
      title: 'Song Title 2',
      artist: 'Artist Name 2',
      albumArt: albumArt2,
      year: 2004,
      audioSrc: audio
    },
    {
      title: 'Song Title 3',
      artist: 'Artist Name 3',
      albumArt: albumArt3,
      year: 2008,
      audioSrc: audio
    },
    {
      title: 'Song Title 3',
      artist: 'Artist Name 3',
      albumArt: albumArt3,
      year: 2008,
      audioSrc: audio
    },

  ];

  const mainWidth = isHam == true ? "60%" : "80%"

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
  };

  console.log("theme",theme)

  const css = theme =='dark' ? {
    backgroundColor:"#530018",
    width: `${mainWidth}`,
  }:{
    backgroundColor:"white",
    width: `${mainWidth}`,
  }

  return (
    <div className={theme == 'light' ? 'app-main light' : 'app-main dark'}>
      <BrowserRouter>
        <Header setIsHam={setIsHam} isHam={isHam} theme={theme} setTheme={setTheme}  toggleTheme={toggleTheme}/>
        <div className='app-main-cont'>
          <div className={isHam ? "nav" : "nav-hide"}>
            <Navbar setIsHam={setIsHam} isHam={isHam} theme={theme} />
          </div>
          <div className='rem-nav' style={css}>
            <Routes>

              <Route path='' element={<Hero songs={songs} />} />
              <Route path='/gallery' element={<Gallery imageData={season1} />} />
              <Route path='/2017' element={<Gallery imageData={y_2017} title={'2017 ( season 1 )'} seasons={seasons} value={4} />} />
              <Route path='/2018' element={<Gallery imageData={y_2018} title={'2018 ( season 2 )'} seasons={seasons} value={4} />} />
              <Route path='/2019' element={<Gallery imageData={y_2019} title={'2019 ( season 3 )'} seasons={seasons} value={4} />} />
              <Route path='/2020' element={<Gallery imageData={y_2020} title={'2020 ( season 4 )'} seasons={seasons} value={4} />} />
              <Route path='/2021' element={<Gallery imageData={y_2021} title={'2021 ( season 5 )'} seasons={seasons} value={4} />} />
              <Route path='/2022' element={<Gallery imageData={y_2022} title={'2022 ( season 6 )'} seasons={seasons} value={4} />} />
              <Route path='/kodai-s1' element={<Gallery imageData={Kodai_s1} title={'Kodai ( season 1)'} seasons={kodai_seasons} value={3} />} />
              <Route path='/kodai-S2' element={<Gallery imageData={Kodai_s2} title={'Kodai ( season 2)'} seasons={kodai_seasons} value={3} />} />
              <Route path='/kodai-S3' element={<Gallery imageData={Kodai_s3} title={'Kodai ( season 3)'} seasons={kodai_seasons} value={3} />} />
              <Route path='/kodai-S4' element={<Gallery imageData={Kodai_s4} title={'Kodai ( season 4)'} seasons={kodai_seasons} value={3} />} />
              <Route path='/kodai-S5' element={<Gallery imageData={Kodai_s5} title={'Kodai ( season 5)'} seasons={kodai_seasons} value={3} />} />
              <Route path='/photos' element={<Gallery imageData={photo} title={'photo'} seasons={seasons} value={3} />} />
              <Route path='/awards' element={<Gallery imageData={awards} title={'Awards'} value={3} />} />

              <Route path='/videos' element={<VideoPlayer videoData={video} />} />
              <Route path='/nomination' element={<Nomination />} />
              <Route path='/international-branch' element={<InternationalBranches />} />

              <Route path='/contact-us' element={<Contact />} />
              <Route path='/season2' element={<Gallery imageData={season1} value={3} />} />
              <Route path='/about-us' element={<About />} />
            </Routes>

          </div>
          <div className='rem-sub-nav'>
            <Music songs={songs} theme={theme}/>
          </div>


        </div>
        <Footer />
      </BrowserRouter>
      {scrollbtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-black text-white p-2 rounded btn-ani"
        >
          <span className='ani'>↑</span>
        </button>
      )}
    </div>
  );
}

export default App;
