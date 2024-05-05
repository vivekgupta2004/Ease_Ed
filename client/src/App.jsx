import { useEffect, useState } from "react";
import axios from 'axios'
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import HowItWork from "./components/HowItWork";
import { Footer } from "./components/Footer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import Routing from "./utils/Routing";
function App() {
  return (
    <div className="bg-[#0D0C1A]  w-screen">
      <Routing/>
    </div>
  )

}

export default App;