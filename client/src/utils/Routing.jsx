import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Leaderboard from '../components/Leaderboard'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
      </Routes>
    </div>
  )
}

export default Routing