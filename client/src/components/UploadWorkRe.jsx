import React from 'react'
import Nav from './Nav'
import { GoAlertFill } from "react-icons/go";
function UploadWorkRe() {
  return (
    <div className='h-screen w-screen bg-[#0D0C1A] p-1 text-white'>
        <Nav/>
        <div className='h-[70vh] w-[50vw] border mx-auto mt-52 relative'>
            <hr className='absolute rotate-90 -left-16 text-white top-80 w-[70vh]'/>
            <div className='h-20 w-full border-b-2 mb-4 flex items-center p-7'>
                <h1 className='text-2xl'>Time-Slots</h1>
                <h1 className='ml-[10vw] text-2xl'>Title</h1>
            </div>
            <div className='h-20 w-full border-b-2 mb-4 flex items-center p-7'>
                <h1 className='text-2xl'>12:00-1:00</h1>
                <input className='ml-[10vw] border px-3 py-1 bg-transparent rounded-full text-lg' placeholder='Enter the title '/>
                <button className=' bg-[#757575] px-5 py-3 rounded-full text-[#434247] font-semibold flex gap-4 items-center ml-52'>Upload<GoAlertFill className='scale-125'/></button>
            </div>
            <div className='h-20 w-full border-b-2 mb-4 flex items-center p-7'>
                <h1 className='text-2xl'>Time-Slots</h1>
                <h1 className='ml-[16vw] text-2xl'>Title</h1>
            </div>
        </div>
    </div>
  )
}

export default UploadWorkRe