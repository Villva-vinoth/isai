import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
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



import Contact from './components/Contact';


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



  return (
    <div className=''>
      <BrowserRouter>
      <Navbar />
        <Routes>
      
          <Route path='' element={<Hero />} />
          <Route path='/gallery' element={<Gallery imageData={season1} />} />
          <Route path='/2017' element={<Gallery imageData={y_2017} title={'2017 ( season 1 )'} seasons={seasons} value={4} />} />
          <Route path='/2018' element={<Gallery imageData={y_2018} title={'2018 ( season 2 )'} seasons={seasons} value={4} />} />
          <Route path='/2019' element={<Gallery imageData={y_2019} title={'2019 ( season 3 )'} seasons={seasons} value={4} />} />
          <Route path='/2020' element={<Gallery imageData={y_2020} title={'2020 ( season 4 )'} seasons={seasons} value={4} />} />
          <Route path='/2021' element={<Gallery imageData={y_2021} title={'2021 ( season 5 )'} seasons={seasons} value={4} />} />
          <Route path='/2022' element={<Gallery imageData={y_2022} title={'2022 ( season 6 )'} seasons={seasons} value={4} />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/season2' element={<Gallery imageData={season1} value={3} />} />
          <Route path='/about-us' element={<About />} />
        </Routes>
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
