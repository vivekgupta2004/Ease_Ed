import React, { useState } from 'react'
import { MdOutlineFileUpload } from "react-icons/md";

import axios from 'axios'







const PendingLeaderboard = ({ title,timeslot,status }) => {
  const [file, setFile] = useState();
  function parseJwt(token){
    const [header,payload,signature]=token.split('.')
    const decodedPayload=atob(payload);
    const parsedPayload=JSON.parse(decodedPayload);
    return parsedPayload;
  }

  const logedUserToken=localStorage.getItem('token');
  const logedEmail=(parseJwt(logedUserToken)).email;
  const handleSubmit = async (e) => {
    
    e.preventDefault();

    const response = await axios.post("http://localhost:3000/userupdatestatus", {
      id: status,
      token:logedUserToken


    })
    const formData = new FormData();
    
    formData.append("file", file);
    const email=logedEmail;
    const result = await axios.post("http://localhost:3000/uploadfiles", formData, {
      Headers: { "Content-Type": "multipart/form-data" },
      params:{email:email}
    })
    // const result =await axios.post("http://localhost:3000/uploadfiles",{
    //   email:logedEmail,
    //   fileName:file1
    // })
  }
  return (
    <div className='w-full flex gap-64 items-center'>
      <div className='card w-[60%] h-32 rounded-lg border border-zinc-400 flex justify-center py-7 gap-96'>
        <div>
          <h1 className='text-3xl tracking-wide font-light'>{title}</h1>
          <p className='mt-1 font-semibold ml-1'>Pending</p>
        </div>
        <p className='font-semibold mt-2'>{timeslot}</p>
      </div>
      <form onSubmit={handleSubmit} className='flex items-center'>
        <input className='cursor-pointer' accept="application/pdf" type="file" required
          onChange={(e) => setFile(e.target.files[0])}
        />


        <button type='submit' className='h-1/2 border px-5 py-3 rounded-full border-slate-500 flex items-center gap-4 font-semibold tracking-wide'>Upload <MdOutlineFileUpload className='scale-125' /></button>
      </form>
    </div>
  )
}

export default PendingLeaderboard