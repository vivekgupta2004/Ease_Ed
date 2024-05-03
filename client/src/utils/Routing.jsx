import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Leaderboard from '../components/Leaderboard'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import Leaderboard2 from '../components/Leaderboard2'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/timetable' element={<Leaderboard2/>}/>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default Routing