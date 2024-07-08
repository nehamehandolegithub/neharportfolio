import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className='mt-[5rem] animated animatedFadeInUp fadeInUp'>
      <div className='items-center justify-center mt-[7rem]'>
        <h3 className="text-[30px] font-semibold uppercase text-center"> GET IN TOUCH </h3>
      </div>
      <div className='lg:flex md:flex md:gap-[4rem] lg:gap-[10rem] items-center justify-center lg:py-[2rem]'>
        <div className='flex items-center gap-3 text-[1.5rem] lg:text-[2rem]'>
          <span><MdEmail /></span>
          <h2 className='font-medium lg:text-[25px] text-[20px]'>neha11mehandole@gmail.com</h2>
        </div>
        <div className='flex items-center gap-3 text-[1.5rem] lg:text-[2rem] mt-3'>
          <span><FaPhoneVolume /></span>
          <h2 className='font-medium lg:text-[25px] text-[20px]'>+91 9359515775</h2>
        </div>
      </div>
      <div className='flex items-center justify-center mt-5'>
        <form action="">
          <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-[2rem] gap-[2rem]'>
            <div>
              <label htmlFor="">First Name:</label><br />
              <input
                value={fName}
                onChange={(e) => setFName(e.target.value)}
                type="text"
                className="rounded-md px-5 py-2 text-black focus:border-none focus:outline-none hover:border-none"
                required
              />
            </div>
            <div>
              <label htmlFor="">Last Name:</label><br />
              <input
                value={lName}
                onChange={(e) => setLName(e.target.value)}
                type="text"
                className="rounded-md px-5 py-2 text-black focus:border-none focus:outline-none hover:border-none"
                required
              />
            </div>
            <div>
              <label htmlFor="">Email:</label><br />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="rounded-md px-5 py-2 text-black focus:border-none focus:outline-none hover:border-none"
                required
              />
            </div>
            <div>
              <label htmlFor="">Phone:</label><br />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel" // Changed to type "tel" for better mobile support
                maxLength={10} // Added maxLength to restrict the input to 10 characters
                className="rounded-md px-5 py-2 text-black focus:border-none focus:outline-none hover:border-none"
                required
              />
            </div>
          </div>
          <div className='mt-[2rem]'>
            <label htmlFor="">Message:</label><br />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              className='rounded-md px-5 py-5 lg:w-[31rem] text-black focus:border-none focus:outline-none hover:border-none'
              required
            />
          </div>
          <button className='mt-3 mb-5 bg-green-400 rounded-md py-2 px-4' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
