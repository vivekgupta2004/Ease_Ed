import React from 'react'
import Nav from './Nav'
import Checkprogress from './Checkprogress'

const Leaderboard = () => {
  return (
    <div className='text-white'>
      <Nav/>
      <div className='h-screen w-screen bg-[#0D0C1A] p-1'>
        <Checkprogress/>
      </div>
    </div>
  )
}

export default Leaderboard