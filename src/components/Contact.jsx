import React, { useEffect } from 'react'
import "../css/Contact.css"
import { FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaInfo } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='contact'>
      <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7772.066541214467!2d80.292197!3d13.097078000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f4f896fe035%3A0x171c58b3055a974b!2s136%2C%20Linghi%20Chetty%20Street%2C%20Mannadi%2C%20George%20Town%2C%20Chennai%2C%20Tamil%20Nadu%20600001%2C%20India!5e0!3m2!1sen!2sus!4v1716795713956!5m2!1sen!2sus" style={{ border: "0", width: "100%", height: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        </div>
      <div className='form'>
        <h2 className='text-[#D24545] font-bold text-3xl'>Contact Us</h2>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, natus?</p> */}
        <div className='contact-form'>
          <div>
            <span><FaUser /></span>
            <input type='text' placeholder='Name' />
          </div>

          <div>
            <span><MdAlternateEmail /></span>
            <input type='text' placeholder='Email' />
          </div>

          <div>
            <span><FaInfo /></span>
            <input type='text' placeholder='Subject' />
          </div>
          <div>
            <span><RiMessage2Fill /></span>
            <textarea rows={5} placeholder='Message'></textarea>
          </div>
        </div>
        <div className='send-btn'>
          <button > SEND MESSAGE</button>
        </div>
      </div>
    </div>
  )
}

export default Contact