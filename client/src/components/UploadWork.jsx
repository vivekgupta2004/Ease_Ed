import React, { useEffect, useRef, useState } from 'react'
import Nav from './Nav'
import { GoAlertFill } from "react-icons/go";

import axios from 'axios';
import { useParams } from 'react-router-dom';
import TimeSloat from './TimeSloat';
function UploadWork() {

    let [resData,setresdata]=useState([]);
    let [flag1,setFlag1]=useState(1);
    let [flag2,setFlag2]=useState(1);
    let [flag3,setFlag3]=useState(1);
    let [flag4,setFlag4]=useState(1);
    let [flag5,setFlag5]=useState(1);
    let [flag6,setFlag6]=useState(1);
    let [flag7,setFlag7]=useState(1);
    let [flag8,setFlag8]=useState(1);
    let [flag9,setFlag9]=useState(1);
    let [flag10,setFlag10]=useState(1);
    let [flag11,setFlag11]=useState(1);
    let [flag12,setFlag12]=useState(1);
    let [flag13,setFlag13]=useState(1);
    let [flag14,setFlag14]=useState(1);
    let [flag15,setFlag15]=useState(1);
    let [flag16,setFlag16]=useState(1);
    let [flag17,setFlag17]=useState(1);
    let [flag18,setFlag18]=useState(1);
    let [flag19,setFlag19]=useState(1);
    let [flag20,setFlag20]=useState(1);
    let [flag21,setFlag21]=useState(1);
    let [flag22,setFlag22]=useState(1);
    let [flag23,setFlag23]=useState(1);

    const { classid } = useParams();
  

    useEffect(() => {
        const getalottimetable = async () => {
            const response = await axios.post("http://localhost:3000/alottimetable", {
                classid: classid
            })
            // setresdata(response.data);
            const temp=(response.data.timeSlot);
            
            const temp1=temp.map((item)=>{
                return(item.split(","))
            });
            const temp2=temp1.map((item)=>{
                return item[0]
            })
            setresdata(temp2);
            // console.log(resData);
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
                <TimeSloat timeinterval='00:00-01:00' timematch={resData} flag={flag1} setFlag={setFlag1}/>
                <TimeSloat timeinterval='01:00-02:00' timematch={resData} flag={flag2} setFlag={setFlag2}/>
                <TimeSloat timeinterval='02:00-03:00' timematch={resData} flag={flag3} setFlag={setFlag3}/>
                <TimeSloat timeinterval='03:00-04:00' timematch={resData} flag={flag4} setFlag={setFlag4}/>
                <TimeSloat timeinterval='04:00-05:00' timematch={resData} flag={flag5} setFlag={setFlag5}/>
                <TimeSloat timeinterval='05:00-06:00' timematch={resData} flag={flag6} setFlag={setFlag6}/>
                <TimeSloat timeinterval='06:00-07:00' timematch={resData} flag={flag7} setFlag={setFlag7}/>
                <TimeSloat timeinterval='07:00-08:00' timematch={resData} flag={flag8} setFlag={setFlag8}/>
                <TimeSloat timeinterval='08:00-09:00' timematch={resData} flag={flag9} setFlag={setFlag9}/>
                <TimeSloat timeinterval='09:00-10:00' timematch={resData} flag={flag10} setFlag={setFlag10}/>
                <TimeSloat timeinterval='10:00-11:00' timematch={resData} flag={flag11} setFlag={setFlag11}/>
                <TimeSloat timeinterval='11:00-12:00' timematch={resData} flag={flag12} setFlag={setFlag12}/>
                <TimeSloat timeinterval='12:00-13:00' timematch={resData} flag={flag13} setFlag={setFlag13}/>
                <TimeSloat timeinterval='13:00-14:00' timematch={resData} flag={flag14} setFlag={setFlag14}/>
                <TimeSloat timeinterval='14:00-15:00' timematch={resData} flag={flag15} setFlag={setFlag15}/>
                <TimeSloat timeinterval='15:00-16:00' timematch={resData} flag={flag16} setFlag={setFlag16}/>
                <TimeSloat timeinterval='16:00-17:00' timematch={resData} flag={flag17} setFlag={setFlag17}/>
                <TimeSloat timeinterval='17:00-18:00' timematch={resData} flag={flag18} setFlag={setFlag18}/>
                <TimeSloat timeinterval='18:00-19:00' timematch={resData} flag={flag19} setFlag={setFlag19}/>
                <TimeSloat timeinterval='19:00-20:00' timematch={resData} flag={flag20} setFlag={setFlag20}/>
                <TimeSloat timeinterval='20:00-21:00' timematch={resData} flag={flag21} setFlag={setFlag21}/>
                <TimeSloat timeinterval='21:00-22:00' timematch={resData} flag={flag22} setFlag={setFlag22}/>
                <TimeSloat timeinterval='22:00-23:00' timematch={resData} flag={flag23} setFlag={setFlag23}/>


            </div>
        </div>
    )
}

export default UploadWork