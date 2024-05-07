import React, { useRef } from 'react'
import { Footer } from './Footer'
import Nav from './Nav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const EnrolledClass = () => {
    const email = useRef(null);
    const classid = useRef(null);
    const navigate=useNavigate();

    const handleSubmit=async (e)=>{
      e.preventDefault();
      const response = await axios.post("http://localhost:3000/enrollclass",{
        email:email.current.value,
        classid:classid.current.value
      })
      console.log(response.data);
      
      navigate(`/leaderboard/${email.current.value}`)

    };
    


    
    return (
        <div className='p-1'>
            <Nav/>
            <form action="" className=" flex  justify-evenly mt-64 pb-12 bg-[url(/aboutEllipse.png)]" onSubmit={handleSubmit}>

                <div className='flex flex-col   w-2/6 gap-9 '>
                    
                    <label className='text-3xl'>Email</label>
                    <input ref={email} placeholder='Enter your Email' className='text-2xl rounded-2xl p-4 border-2 border-solid border-white bg-transparent  ' />
                    <label className='text-3xl'>Class Id</label>
                    <input ref={classid} placeholder='Enter your class id' className='text-2xl rounded-2xl p-4 border-2 border-solid border-white bg-transparent ' />

                    <button className='border-2 border-solid border-white  w-28 text-2xl rounded-2xl p-2 flex justify-center ' type='submit' >Sign Up</button>
                </div>
                <img src="/signin.png" alt="signup" />



            </form>
            <Footer/>
        </div>
    )
}

export default EnrolledClass