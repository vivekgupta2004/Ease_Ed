import React, { useState } from 'react'
import Nav from './Nav'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='text-white'>
            <Nav />
            <div className="pt-36 flex justify-center items-center ">
                <div className="bg-[#2C2C51] w-96 h-20 flex justify-center items-center gap-16 rounded-full ">
                    <Link to='/signin' className="text-2xl cursor-pointer ">SignIn</Link>
                    <Link to='/signup' className=" px-11 py-4 bg-[#0D0C1A] rounded-full text-2xl cursor-pointer">SignUp</Link>
                </div>
            </div>
            <form action="" className=" flex  justify-evenly mt-28 pb-12 bg-[url(/aboutEllipse.png)]">

                <div className='flex flex-col   w-2/6 gap-9 '>
                    <p className='text-5xl mb-5'>HELLO<br></br> KIDDO!</p>
                    <label className='text-3xl'>Email</label>
                    <input placeholder='Enter your Email' className='text-2xl rounded-2xl p-4 border-2 border-solid border-white bg-transparent  ' />
                    <label className='text-3xl'>Password</label>
                    <input placeholder='Enter your Password' className='text-2xl rounded-2xl p-4 border-2 border-solid border-white bg-transparent ' />

                    <button className='border-2 border-solid border-white  w-28 text-2xl rounded-2xl p-2 flex justify-center ' >Sign Up</button>
                </div>
                <img src="/signin.png" alt="signup" />



            </form>
            <Footer/>


        </div>
    )
}

export default SignUp