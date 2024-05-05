import React, { useRef } from 'react'
import Nav from './Nav'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SignIn = () => {
    const email=useRef(null);
    const username=useRef(null);
    const password=useRef(null);

    const handleSubmit=async(event)=>{
        console.log(username.current.value,email.current.value,password.current.value)
        event.preventDefault();
       const response= await axios.post("http://localhost:3000/login",{
            username:username.current.value,
            email:email.current.value,
            password:password.current.value
        })
        console.log("hello",response);
        localStorage.setItem('token', response.data.token)
        window.location.href="/";
    }
    return (
        <div className='text-white'>
            <Nav />
            <div className="pt-36 flex justify-center items-center ">
                <div className="bg-[#2C2C51] w-96 h-20 flex justify-center items-center gap-16 rounded-full ">
                    <Link to='/signin' className=" px-11 py-4 bg-[#0D0C1A] rounded-full text-2xl cursor-pointer ">SignIn</Link>
                    <Link to='/signup' className="text-2xl cursor-pointer">SignUp</Link>
                </div>
            </div>
            <form onSubmit={handleSubmit} action="" className=" flex  justify-evenly mt-28 pb-12 bg-[url(/aboutEllipse.png)] ">

                <div className='flex flex-col   w-2/6 gap-9 '>
                    <p className='text-5xl mb-5'>HELLO<br></br> KIDDO!</p>
                    <label className='text-3xl'>Username</label>
                    <input ref={username} placeholder='Enter your Username' className='text-2xl rounded-2xl p-4 border-2 border-solid border-white bg-transparent  ' />
                    <label className='text-3xl'>Email</label>
                    <input ref={email} placeholder='Enter your Email' className='text-2xl rounded-2xl p-4 border-2 border-solid border-white bg-transparent  ' />
                    <label className='text-3xl'>Password</label>
                    <input ref={password} placeholder='Enter your Password' className='text-2xl rounded-2xl p-4 border-2 border-solid border-white bg-transparent ' />

                    <button className='border-2 border-solid border-white  w-28 text-2xl rounded-2xl p-2 flex justify-center ' type='submit' >Sign In</button>
                </div>
                <img src="/signin.png" alt="signin" />



            </form>
            <Footer/>


        </div>
    )
}

export default SignIn