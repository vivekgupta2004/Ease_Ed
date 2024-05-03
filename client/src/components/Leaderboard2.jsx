import React from 'react'
import Nav from './Nav'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'

const Leaderboard2 = () => {
  return (
    <div className=' w-full text-white p-1 -z-20'>
      <Nav />
      <div id='main' className='h-full w-full mt-32 '>
        <div className=" flex justify-center items-center font-light">
          <div className="bg-[#2C2C51] w-96 h-16 flex justify-center items-center gap-16 rounded-full ">
            <Link to='' className="text-2xl cursor-pointer ">Daily</Link>
            <Link to='' className=" px-11 py-3 bg-[#0D0C1A] rounded-full text-2xl cursor-pointer">Montly</Link>
          </div>
        </div>

        <div id='stageContainer' className='w-[90vw] h-[80vh] mx-auto pl-52 mt-24 flex items-center justify-center  mb-10'>
          <div className='z-50 mt-60 relative'>
          <div className='h-60 w-60 bg-white absolute top-0 left-0 z-10 blur-[300px] rounded-full'>
          </div>
          <img src="/signin.png" alt=""  className='absolute -top-48 -left-5 h-[30vh]'/>
          <img src="/stage.png" alt="" className='h-1/2 w-1/2 ' />
          <img src="/Silver.png" alt="" className='absolute h-[9vh] top-7 left-12' />
          <h1 className=' w-fit ml-16'>Username</h1>
          </div>
          <div className='-mt-60 relative'>
          <img src="/signin.png" alt=""  className='absolute -top-48 -left-5 h-[30vh]'/>
          <img src="/stage.png" alt="" className='h-1/2 w-1/2 z-50' />
          <img src="/Gold.png" alt="" className='absolute h-[13vh] top-4 left-9' />
          <div className='h-60 w-60 bg-white absolute top-0 left-0 z-10 blur-[300px] rounded-full'></div>
          <h1 className=' w-fit ml-16'>Username</h1>
          </div>
          <div className='mt-60 relative'>
          <img src="/signin.png" alt=""  className='absolute -top-48 -left-5 h-[30vh]'/>
          <img src="/stage.png" alt="" className='h-1/2 w-1/2 ' />
          <div className='h-60 w-60 bg-white absolute top-0 left-0 z-10 blur-[300px] rounded-full'></div>
          <img src="/Bronze.png" alt="" className='absolute h-[9vh] top-7 left-16' />
          <h1 className=' w-fit ml-16'>Username</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Leaderboard2