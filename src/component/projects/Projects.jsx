import React from 'react'
import FoodWebsite from '../projectlist/FoodWebsite'
import WeatherApp from '../projectlist/WeatherApp'
import TodoList from '../projectlist/TodoList'
import Learningweb from '../projectlist/Learningweb'

const Projects = () => {
  return (
    <>
      <div className='animated animatedFadeInUp fadeInUp'>
        <div className='text-center mt-[7rem]'>
        <h1 className='text-[29px] font-semibold'>PROJECTS</h1>
        <p className='font-semibold text-[#47e1e1] text-[20px] mt-2'>Check out some of my work right here</p>
        </div>
        <div>
          <FoodWebsite />
          <WeatherApp />
          <TodoList />
          <Learningweb />
        </div>
      </div>
    </>
  )
}

export default Projects
