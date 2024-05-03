import React from 'react'
import { GoAlertFill } from "react-icons/go";
const IncompleteLeaderboard = () => {
  return (
    <div className='w-full flex gap-64 items-center'>
    <div className='card w-[60%] h-32 rounded-lg bg-[#757575] flex justify-center py-7 gap-96'>
      <div>
        <h1 className='text-3xl tracking-wide font-light text-[#434242]'>Not Completed</h1>
        <p className='mt-1 font-semibold ml-1 text-[#434242]'>Incomplete</p>
      </div>
      <p className='font-semibold mt-2 text-[#434242]'>12:00-1:00</p>
    </div>
    <button className='h-1/2 bg-[#757575] px-5 py-3 rounded-full text-[#434247] font-semibold flex gap-4 items-center'>Upload<GoAlertFill className='scale-125'/></button>
  </div>
  )
}

export default IncompleteLeaderboard