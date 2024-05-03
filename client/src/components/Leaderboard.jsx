import React from 'react'
import Nav from './Nav'
import Checkprogress from './Checkprogress'

const Leaderboard = () => {
  return (
    <div className='text-white'>
      <Nav />
      <div className='h-[300vh] w-screen bg-[#0D0C1A] p-1'>
        <img src="/Ellipse14.png" alt="" className='absolute -top-[10vh] h-1/3 w-full left-0' />
        <Checkprogress />

        <div className='text-white mt-40 py-10 px-36'>
          <div className='w-full flex items-center justify-between'>
            <div className='w-full'>
            <h1 className='text-5xl font-light'>Hard Work Section</h1>
          <p className='w-1/4 mt-2 text-lg font-light ml-5 leading-6'>Embrace the grind, for it's the path to greatness.</p>
            </div>
          <img src="/vvt.png" alt="" />
          </div>

          <div id="parentContainer" className='w-full h-fit  mt-10 flex items-center justify-center gap-10 flex-col p-5'>
            <div className='w-full flex gap-64 items-center'>
              <div className='card w-[60%] h-32 rounded-lg bg-[#15803D] flex justify-center py-7 gap-72'>
                <div>
                  <h1 className='text-3xl tracking-wide font-light'>Already Completed Class</h1>
                  <p className='mt-1 font-semibold ml-1'>Completed</p>
                </div>
                <p className='font-semibold mt-2'>12:00-1:00</p>
              </div>
              <button className='h-1/2 border px-5 py-3 rounded-full'>Upload Work</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Leaderboard