import React from 'react'
import { GiCheckMark } from "react-icons/gi";
const CompletedLeaderboard = () => {
  return (
    <div className='w-full flex gap-64 items-center'>
    <div className='card w-[60%] h-32 rounded-lg bg-[#15803D] flex justify-center py-7 gap-72'>
      <div>
        <h1 className='text-3xl tracking-wide font-light'>Already Completed Class</h1>
        <p className='mt-1 font-semibold ml-1'>Completed</p>
      </div>
      <p className='font-semibold mt-2'>12:00-1:00</p>
    </div>
    <button className='h-1/2 bg-[#15803D] px-5 py-3 rounded-full font-semibold flex items-center gap-1'>Uploaded <GiCheckMark /></button>
  </div>
  )
}

export default CompletedLeaderboard