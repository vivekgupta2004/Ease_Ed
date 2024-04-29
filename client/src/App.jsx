import { useState } from "react";
import axios from 'axios'
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";

function App() {



  return (
    <div className="bg-[#0D0C1A]  w-screen">
    <Nav/>
    <HeroSection/>
    </div>
  )

}

export default App;