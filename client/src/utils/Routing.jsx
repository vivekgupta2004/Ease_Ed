import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Leaderboard from '../components/Leaderboard'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import UploadWork from '../components/UploadWork'
import Classes from '../components/Classes'
import Leaderboard2 from '../components/Leaderboard2'
import SuperUser from '../components/SuperUser'
import EnrolledClass from '../components/EnrolledClass'
import UploadWorkRe from '../components/UploadWorkRe'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/leaderboard/:id' element={<Leaderboard />} />
        <Route path='/timetable' element={<Leaderboard2/>}/>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/classes' element={<Classes/>} />
        <Route path='/uploadwork' element={<UploadWorkRe/>} />
        <Route path='/superuser' element={<SuperUser/>} />
        <Route path='/enrollclass' element={<EnrolledClass/>} />
      </Routes>
    </div>
  )
}

export default Routing