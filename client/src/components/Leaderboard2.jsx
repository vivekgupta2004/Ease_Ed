import React from 'react'
import Nav from './Nav'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'
import { GoTrophy } from "react-icons/go";
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
        <div id='detailContainer ' className=' w-[80vw]  mx-auto mb-10' >
          <div className='w-fit border px-5 py-3  mx-auto rounded-lg flex items-center justify-center gap-5 '>
          <GoTrophy className='scale-150'/>
          <h1 className='text-2xl '>You Ranked <b>1</b> out of <b>56</b> Students</h1>
          </div>
          <div id='heightContainer' className='w-[79vw]  text-[#8E8DB9] flex justify-around mt-4'>
            <span>Places</span>
            <span>Username</span>
            <span>Points</span>
            <span>Grade</span>
          </div>
          <div id='gradeContainer' className='w-[82vw] h-20 border flex  items-center justify-around rounded-lg mt-4'>
            <span className='flex gap-1 items-center '><img src="/diamong.png" alt="" className='h-[20px]' />4</span>
            <span className=''>Sam</span>
            <span className=''>180</span>
            <span className='px-7 py-1  border rounded-lg'>B+</span>
          </div>
          <div id='gradeContainer' className='w-[82vw] h-20 border flex  items-center justify-around rounded-lg mt-4'>
            <span className='flex gap-1 items-center '><img src="/diamong.png" alt="" className='h-[20px]' />4</span>
            <span className=''>Sam</span>
            <span className=''>180</span>
            <span className='px-7 py-1  border rounded-lg'>B+</span>
          </div>
          <div id='gradeContainer' className='w-[82vw] h-20 border flex  items-center justify-around rounded-lg mt-4'>
            <span className='flex gap-1 items-center '><img src="/diamong.png" alt="" className='h-[20px]' />4</span>
            <span className=''>Sam</span>
            <span className=''>180</span>
            <span className='px-7 py-1  border rounded-lg'>B+</span>
          </div>
          <div id='gradeContainer' className='w-[82vw] h-20 border flex  items-center justify-around rounded-lg mt-4'>
            <span className='flex gap-1 items-center '><img src="/diamong.png" alt="" className='h-[20px]' />4</span>
            <span className=''>Sam</span>
            <span className=''>180</span>
            <span className='px-7 py-1  border rounded-lg'>B+</span>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Leaderboard2