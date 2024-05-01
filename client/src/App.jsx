import { useState } from "react";
import axios from 'axios'
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import HowItWork from "./components/HowItWork";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="bg-[#0D0C1A]  w-screen">
    <Nav/>
    <HeroSection/>
    <About/>
    <HowItWork/>
    <Footer/>
    </div>
  )

}

export default App;