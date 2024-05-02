import React from 'react'
import Nav from './Nav'
import HeroSection from './HeroSection'
import About from './About'
import HowItWork from './HowItWork'
import { Footer } from './Footer'

const Home = () => {
  return (
    <div>   
    <Nav/>
    <HeroSection/>
    <About/>
    <HowItWork/>
    <Footer/></div>
  )
}

export default Home