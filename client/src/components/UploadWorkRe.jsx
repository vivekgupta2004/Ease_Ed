import React, { useEffect, useRef } from 'react'
import Nav from './Nav'
import { GoAlertFill } from "react-icons/go";

import axios from 'axios';
import { useParams } from 'react-router-dom';
import TimeSloat from './TimeSloat';
function UploadWorkRe() {



    const { classid } = useParams();
    useEffect(() => {
        const getalottimetable = async () => {
            const response = await axios.post("http://localhost:3000/alottimetable", {
                classid: classid
            })
            console.log(response.data);

        }
        getalottimetable();
    }, [])



    return (
        <div className='w-screen bg-[#0D0C1A] p-1 text-white'>
            <Nav />
            <div className=' w-[50vw] border mx-auto mt-52 relative'>
                <hr className='absolute rotate-90 -left-[46vw] text-white top-[121vh] w-[242vh]' />
                <div className='h-20 w-full border-b-2 mb-4 flex items-center p-7'>
                    <h1 className='text-2xl'>Time-Slots</h1>
                    <h1 className='ml-52 text-2xl'>Title</h1>
                </div>
                <TimeSloat timeinterval='00:00-01:00' timematch='00,01' />
                <TimeSloat timeinterval='01:00-02:00' timematch='01,02' />
                <TimeSloat timeinterval='02:00-03:00' timematch='02,03' />
                <TimeSloat timeinterval='03:00-04:00' timematch='03,04' />
                <TimeSloat timeinterval='04:00-05:00' timematch='04,05' />
                <TimeSloat timeinterval='05:00-06:00' timematch='05,06' />
                <TimeSloat timeinterval='06:00-07:00' timematch='06,07' />
                <TimeSloat timeinterval='07:00-08:00' timematch='07,08' />
                <TimeSloat timeinterval='08:00-09:00' timematch='08,09' />
                <TimeSloat timeinterval='09:00-10:00' timematch='09,10' />
                <TimeSloat timeinterval='10:00-11:00' timematch='10,11' />
                <TimeSloat timeinterval='11:00-12:00' timematch='11,12' />
                <TimeSloat timeinterval='12:00-13:00' timematch='12,13' />
                <TimeSloat timeinterval='13:00-14:00' timematch='13,14' />
                <TimeSloat timeinterval='14:00-15:00' timematch='14,15' />
                <TimeSloat timeinterval='15:00-16:00' timematch='15,16' />
                <TimeSloat timeinterval='16:00-17:00' timematch='16,17' />
                <TimeSloat timeinterval='17:00-18:00' timematch='17,18' />
                <TimeSloat timeinterval='18:00-19:00' timematch='18,19' />
                <TimeSloat timeinterval='19:00-20:00' timematch='19,20' />
                <TimeSloat timeinterval='20:00-21:00' timematch='20,21' />
                <TimeSloat timeinterval='21:00-22:00' timematch='21,22' />
                <TimeSloat timeinterval='22:00-23:00' timematch='22,23' />


            </div>
        </div>
    )
}

export default UploadWorkRe