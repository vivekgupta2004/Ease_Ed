import React from 'react'
import Meteors from './Meteor'

const Checkprogress = () => {
  return (
    <div className='h-[70vh] w-[80vw] mx-auto  mt-[20vh]'>
      <h1 className='text-6xl font-light'>Check Your Progress</h1>




      <div className='h-[70vh] w-[80vw]  absolute '>
      <div className="relative flex h-full -left-12 top-10 items-center justify-center overflow-hidden rounded-lg  bg-background p-20 md:shadow-xl ">
      <Meteors number={60} />
    </div>
      </div>



      <p className='w-1/2 mt-5 ml-9 inline-block'>Every step forward is a milestone on the journey of progress.
        Keep checking, keep moving, and celebrate every inch gained! </p>
        <div className='progressContainer h-[60vh] w-[80vw] mx-auto mt-10 flex items-center gap-72 relative'>
          <img className='mt-40' src="/earth.png" alt="" />
          <img className='h-72 -mt-40 ml-20 z-10' src="/moon.png" alt="" />
          <div className='h-[200px] w-[200px] bg-white absolute right-48 top-0 rounded-full blur-[100px]'></div>
          <div className='absolute z-10'>
          <p className='text-zinc-500'>Progress 10%</p>
          <img className=' z-10 ' src="/progressAstro.png" alt="" />
          </div>
        <div className='ellipse h-[50vh] w-[80vw] border border-slate-700 absolute top-6 -left-10 rounded-[100%] -rotate-12'></div>
        </div>
    </div>
  )
}

export default Checkprogress