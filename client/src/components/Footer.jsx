import React from 'react'
import { CiFacebook } from "react-icons/ci";


export const Footer = () => {
    return (
        <div className=' bg-[#141426]'>
            <h1 className='text-white text-7xl flex justify-center pt-5 font-bold font-serif'>
                EASE-ED
            </h1>
            <div className="text-white flex justify-center items-center pt-10  ">
                <ul className='flex gap-11  text-2xl'>
                    <li> Home</li>
                    <li>About</li>
                    <li>Latest Blog</li>
                    <li>Contact Us</li>
                    <li>Testimonial</li>
                </ul>

            </div>
            <div className="text-white flex justify-center items-center pt-10 ">
                <ul className='flex gap-11 font-bold text-5xl'>
                    <li><CiFacebook /> </li>
                    <li><CiFacebook /> </li>
                    <li><CiFacebook /> </li>
                    <li><CiFacebook /> </li>
                    
                </ul>

            </div>
            <p className='text-white flex justify-center pt-10 pb-8'>Made with love by Dev Dynasty</p>
        </div>
    )
}

