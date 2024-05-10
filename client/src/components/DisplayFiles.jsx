import React, { useEffect, useState } from 'react'
import axios from "axios"
const DisplayFiles = () => {
  const [toBeMapped,settoBeMapped]=useState([]);
  function parseJwt(token){
    const [header,payload,signature]=token.split('.')
    const decodedPayload=atob(payload);
    const parsedPayload=JSON.parse(decodedPayload);
    return parsedPayload;
  }

  const logedUserToken=localStorage.getItem('superToken');
  const logedEmail=(parseJwt(logedUserToken)).email;
  console.log(logedEmail)
  useEffect(()=>{
    const getFiles=async ()=>{


      const response=await axios.post("http://localhost:3000/viewFile",{
        email:logedEmail,
    })
    console.log(response.data)
    settoBeMapped(response.data.arr);

    }
    getFiles();


  },[])
  console.log(toBeMapped)
  const handleInput=async(item)=>{
    console.log(item);
  /*   const response = await axios.post("http://localhost:3000/handleUrl",{
      item:item
    }) */
    window.location.href = `http://localhost:3000/files/${item}`;

    
  }
  return (
    toBeMapped.length &&    <div className='text-white flex gap-10 h-screen flex-col items-center'>
    <h1>Jai shri Ram!!</h1>
      {toBeMapped.map((item,index)=>{
       return item.map((innerItem)=><button onClick={()=>handleInput(innerItem)} className='bg-slate-500 w-fit' key={index}>{innerItem}</button>)
      })}
  </div>
  )
}

export default DisplayFiles