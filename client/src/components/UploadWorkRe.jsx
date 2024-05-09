import React, { useRef } from 'react'
import Nav from './Nav'
import { GoAlertFill } from "react-icons/go";
import { MdOutlineFileUpload } from "react-icons/md";
import axios from 'axios';
import { useParams } from 'react-router-dom';
function UploadWorkRe() {
    const title = useRef(null);
    const firstInput=useRef([0,1]);
    console.log(firstInput);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/uploadtimetable", {
            title: title.current.value,
            classid:localStorage.getItem('justCreatedClass'),
            timeslot:firstInput.current.value
        })
        console.log(response)

    }

    const {classid}= useParams();
    console.log(classid);


    return (
        <div className='w-screen bg-[#0D0C1A] p-1 text-white'>
            <Nav />
            <div className=' w-[50vw] border mx-auto mt-52 relative'>
                <hr className='absolute rotate-90 -left-[46vw] text-white top-[121vh] w-[242vh]' />
                <div className='h-20 w-full border-b-2 mb-4 flex items-center p-7'>
                    <h1 className='text-2xl'>Time-Slots</h1>
                    <h1 className='ml-52 text-2xl'>Title</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='h-20 w-full border-b-2 mb-4 flex items-center p-7'>
                        <input className='hidden' ref={firstInput} type="text" value={[0,1]}/>
                        <h1 className='text-2xl'>00:00-01:00</h1>
                        <input ref={title} className='ml-[10vw] border px-3 py-1 bg-transparent rounded-full text-lg' placeholder='Enter the title ' />
                        <button type='submit' className=' border px-5 py-3 rounded-full border-slate-500 flex items-center gap-4 font-semibold tracking-wide ml-44'>Upload <MdOutlineFileUpload className='scale-125' /></button>
                    </div>
                </form>
               
            </div>
        </div>
    )
}

export default UploadWorkRe