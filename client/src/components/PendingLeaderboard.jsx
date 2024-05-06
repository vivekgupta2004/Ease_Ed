import React from 'react'
import { MdOutlineFileUpload } from "react-icons/md";


const PendingLeaderboard = ({title}) => {
  return (
    <div className='w-full flex gap-64 items-center'>
    <div className='card w-[60%] h-32 rounded-lg border border-zinc-400 flex justify-center py-7 gap-96'>
      <div>
        <h1 className='text-3xl tracking-wide font-light'>{title}</h1>
        <p className='mt-1 font-semibold ml-1'>Pending</p>
      </div>
      <p className='font-semibold mt-2'>12:00-1:00</p>
    </div>
    <button className='h-1/2 border px-5 py-3 rounded-full border-slate-500 flex items-center gap-4 font-semibold tracking-wide'>Upload <MdOutlineFileUpload  className='scale-125'/></button>
  </div>
  )
}

export default PendingLeaderboard