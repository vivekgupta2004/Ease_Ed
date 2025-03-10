import React from 'react'
import Ellipse from './Ellipse'
import Card from './Card'
import Cards from './Cards'

const About = () => {
  return (
    <div className='text-white h-[120vh]  w-screen bg-[#0D0C1A] mt-10 bg-[url("/Ellipse14.png")]  bg-center bg-cover bg-opacity-10 bg-blend-screen bg-no-repeat p-5 md:p-16'>
        <h1 className=' text-4xl md:text-5xl leading-none font-light'>About</h1>
        <p className='w-full md:w-1/3 text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus dolores ad eligendi nam deleniti quasi non illo id amet sint!</p>
        <Cards/>
    </div>

  )
}

export default About


// bg-[url("../../public/aboutEllipse.png")]