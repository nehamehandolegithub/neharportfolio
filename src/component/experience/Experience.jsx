import React from 'react'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaShopify, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";

const Experience = () => {
  return (
    <>
      <div className='animated animatedFadeInUp fadeInUp'>
        <div className='text-center mt-[7rem]'>
          <h1 className='text-[29px] font-semibold'>EXPERIENCE</h1>
          <p className='font-semibold text-[#47e1e1] text-[20px] mt-2'>These are the technologies I've worked with</p>
        </div>
        <div className=" flex items-center justify-center mt-[2rem]">
          <div className=' lg:w-[60%]'>


            <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5'>
              <button
                className='hover:scale-110 duration-200 lg:w-[110px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                <span>
                  <FaHtml5 className='text-2xl text-orange-500' />
                </span>
                <span>HTML</span>
              </button>
              <button
                className='hover:scale-110 duration-200 lg:w-[110px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                <span>
                  <FaCss3Alt className='text-2xl text-blue-600' />
                </span>
                <span>CSS</span>
              </button>
              <button
                className='hover:scale-110 duration-200 lg:w-[130px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                <span>
                  <IoLogoJavascript className='text-2xl text-yellow-400' />
                </span>
                <span className='lg:text-[17px] sm:text[10px]'>javascript</span>
              </button>
              <button
                className='hover:scale-110 duration-200 lg:w-[130px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                <span>
                  <FaReact className='text-2xl text-[#61dafb]' />
                </span>
                <span>React.Js</span>
              </button>
              <button
                className='hover:scale-110 duration-200 lg:w-[130px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                <span>
                  <FaBootstrap className='text-2xl text-blue-400' />
                </span>
                <span>Bootstrap</span>
              </button>
              <button
                className='hover:scale-110 duration-200 lg:w-[150px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                <span>
                  <SiTailwindcss className='text-2xl text-[#38bdf8]' />
                </span>
                <span>Tailwind css</span>
              </button>
              <button
                className='hover:scale-110 duration-200 lg:w-[120px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                <span>
                  <RiNextjsLine className='text-2xl text-[black]' />
                </span>
                <span>Next.js</span>
              </button>
              <button
                className='hover:scale-110 duration-200 lg:w-[120px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                <span>
                  <FaShopify className='text-2xl text-green-700' />
                </span>
                <span>Shopify</span>
              </button>
              <button
                className='hover:scale-110 duration-200 lg:w-[110px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                <span>
                  <FaGitAlt className='text-2xl text-[orange]' />
                </span>
                <span>Git</span>
              </button>
              <button
                className='hover:scale-110 duration-200 lg:w-[110px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                <span>
                  <FaGithub className='text-2xl text-[black]' />
                </span>
                <span>GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience
