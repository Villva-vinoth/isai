import { useState } from 'react';
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { FaInfo } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

import '../css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <>
      <div className='contactpage bg-transparent w-[100%]'>
        <h2 className='text-xl font-bold p-2 mx-8'>Location :</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7772.066541214467!2d80.292197!3d13.097078000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f4f896fe035%3A0x171c58b3055a974b!2s136%2C%20Linghi%20Chetty%20Street%2C%20Mannadi%2C%20George%20Town%2C%20Chennai%2C%20Tamil%20Nadu%20600001%2C%20India!5e0!3m2!1sen!2sus!4v1716795713956!5m2!1sen!2sus" 
          style={{ border: "0", width: "90%", height: '300px',marginInline:'auto' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <form className="contactss" onSubmit={handleSubmit}>
        <h2 className='text-xl font-bold p-1 my-2'>Contact Us :</h2>
        <div className="form-row">
          <div className="formss">
            <label htmlFor="name"><IoPerson /> Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formss">
            <label htmlFor="email"><MdEmail /> Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formss">
            <label htmlFor="subject"><FaInfoCircle /> Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="formss">
          <label htmlFor="phone"><FaMessage /> Message:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit-btn p-1 my-2">Submit</button>
      </form>
    </>
  );
}

export default Contact;