import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { IoMoon,IoSunny  } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { DarkModeContext } from '../../context/DarkModeTheme';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const navItems = [
    { to: '/', label: 'HOME' },
    { to: '/about', label: 'ABOUT' },
    { to: '/projects', label: 'PROJECTS' },
    { to: '/contact', label: 'CONTACT' },
  ];

  return (
    <div className='w-full fixed top-0 z-50'>
      <nav className={`flex items-center justify-between p-6 flex-wrap ${isDarkMode ? 'bg-[#151515]' : 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...'}`}>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-2xl tracking-normal">Neha</span>
        </div>
        <div className='block lg:hidden'>
          <button onClick={() => setToggle(!toggle)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            {toggle ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center  lg:w-auto lg:text-right ${toggle ? "block" : "hidden"}`}>
          <div className='text-sm lg:text-center lg:flex-grow lg:text-[17px]'>
            {navItems.map((item, index) => (
              <Link key={index} to={item.to} className="block mt-4 lg:inline-block lg:mt-0 text-white-700 font-semibold uppercase cursor-pointer lg:hover:scale-125 duration-200  mr-6">{item.label}</Link>
            ))}
          </div>
          <button onClick={toggleDarkMode} className='flex gap-1 items-center mt-5 lg:mt-0'>
            <span className='text-xl'>{isDarkMode ? <IoSunny /> : <IoMoon />}</span>
            <span>{isDarkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
