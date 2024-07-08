import React, { useContext } from 'react'
import menimg from '../../assets/men.jpg'
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram } from "react-icons/fi";
import { DarkModeContext } from '../../context/DarkModeTheme';


const About = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <div className='animated animatedFadeInUp fadeInUp'>
        <div className="flex flex-col md:flex-row lg:mt-[8rem]">
          {/* left side */}
          <div className="md:w-1/3 lg:w-1/4 ">
            <div className="text-center md:text-left">
              <div className='relative lg:bottom-[4rem]'>
                <img src={menimg} alt="" />
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="md:w-2/3 p-4 lg:w-[60%] ">
            <div className="text-center md:text-left">
              <h1 className='text-[16px] font-semibold'>GET TO KNOW</h1>
              <h1 className='text-[29px] font-semibold'>ABOUT ME</h1>
              <div className='mt-[20px] lg:text-justify'>
              Every day, I eagerly embrace the path of continuous learning, channeling my passion for Front-end Development to create captivating digital experiences. My fascination with crafting frontend marvels guides me. I've transformed myself into a <span className='font-bold text-[#ff0044]'>self-taught coder</span> , conquering HTML, CSS, Tailwind CSS, JavaScript, React.js, and Next.js against all odds.
              </div>
              <div className='text-[17px] mt-[20px] lg:text-justify'>
                My motto is quality, and I'm devoted to user experience. I champion impactful code, excited to collaborate with fellow visionaries. Let's craft web stories that leave a mark.
              </div>
              <div className='mt-3 text-[30px] font-semibold text-[#47e1e1] '>
                Lets Connect!
              </div>
              <div className='flex text-center gap-7 justify-center text-[25px]  mt-4 '>
                <span className='hover:scale-110 duration-200'>
                  <a href="https://www.linkedin.com/in/neha-mehandole-845268208/" target='blank' className={`${isDarkMode ? 'text-white' : 'text-black'} hover:text-white`}><FiLinkedin /></a>
                </span>
                <span className='hover:scale-110 duration-200'>
                  <a href="https://github.com/nehamehandolegithub" target='blank' className={`${isDarkMode ? 'text-white' : 'text-black'} hover:text-white`}><FiGithub /></a>
                </span>
                <span className='hover:scale-110 duration-200'>
                  <a href="" className={`${isDarkMode ? 'text-white' : 'text-black'} hover:text-white`}><FiTwitter /></a>
                </span>
                <span className='hover:scale-110 duration-200'>
                  <a href="" className={`${isDarkMode ? 'text-white' : 'text-black'} hover:text-white`}><FiInstagram /></a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
