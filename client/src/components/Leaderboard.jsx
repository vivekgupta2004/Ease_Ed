import React from 'react'
import Nav from './Nav'
import Checkprogress from './Checkprogress'

const Leaderboard = () => {
  return (
    <div className='text-white'>
      <Nav/>
      <div className='h-[200vh] w-screen bg-[#0D0C1A] p-1'>
        <img src="/Ellipse14.png" alt="" className='absolute -top-[10vh] h-1/3 w-full left-0' />
        <Checkprogress/>

        <div className='text-white mt-64'>HardWorkSection</div>
      </div>
    </div>
  )
}

export default Leaderboard