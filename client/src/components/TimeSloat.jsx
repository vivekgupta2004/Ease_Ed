import axios from 'axios';
import React, { useRef } from 'react'
import { MdOutlineFileUpload } from "react-icons/md";

const TimeSloat = ({ timeinterval,timematch }) => {
    let flag=1;
    const title = useRef(null);
    const firstInput = useRef([0, 1]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/uploadtimetable", {
            title: title.current.value,
            classid: localStorage.getItem('justCreatedClass'),
            timeslot: firstInput.current.value
        })
         const temp = timeinterval.split("-")
         const temp1 = temp[0].split(":")
        
         if(timematch==temp1[0]){
            flag=0
         }


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='h-20 w-full border-b-2 mb-4 flex items-center p-7'>
                    <input className='hidden' ref={firstInput} type="text" value={timematch} />
                    <h1 className='text-2xl'>{timeinterval}</h1>
                    <input ref={title} className='ml-[10vw] border px-3 py-1 bg-transparent rounded-full text-lg' placeholder='Enter the title ' />
                    <button  type='submit' className={` ${flag?'block':'hidden'} border px-5 py-3 rounded-full border-slate-500 flex items-center gap-4 font-semibold tracking-wide ml-44`}>Upload <MdOutlineFileUpload className='scale-125' /></button>
                </div>
            </form>
        </div>
    )
}

export default TimeSloat