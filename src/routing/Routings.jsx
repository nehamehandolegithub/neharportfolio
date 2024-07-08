import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../component/home/Home'
import About from '../component/about/About'
import Projects from '../component/projects/Projects'
import Contact from '../component/contact/Contact'
import DarkModeTheme from '../context/DarkModeTheme';

const Routings = () => {
  return (
    <div>
     <DarkModeTheme>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      </DarkModeTheme>
    </div>
  )
}

export default Routings
