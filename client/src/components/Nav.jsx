import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
const Nav = () => {
  let [flag,setFlag]=useState(false);
  return (
    <div className=''>
      <div className=" flex justify-center h-20 ">
        <div className="flex justify-around mt-5 w-5/6 items-center font-bold text-[#C8C0C0] bg-[#141426] rounded-2xl ">
          <div className="">
            <img src="expmple.png" alt="Logo" />
          </div>
          <div className="">
            <ul className='flex space-x-16 '>
              <li href='#' className='cursor-pointer hidden md:block'>Home</li>
              <li href='#' className='cursor-pointer hidden md:block'>LeaderBoard</li>
              <li href='#' className='cursor-pointer hidden md:block'>TimeTable</li>
            </ul>

          </div>
          <div className="flex items-center justify-center">

            <ul className='w-28 h-12 bg-[#15803D] rounded-2xl flex justify-center items-center opacity-0 md:opacity-100'>

              <li className='cursor-pointer '>Login</li>
            </ul>

            {flag ? <RxCross1 className='md:hidden text-3xl z-10' onClick={()=>setFlag(prev=>!prev)} />:<RxHamburgerMenu className='md:hidden text-3xl z-10' onClick={()=>setFlag(prev=>!prev)}/>}


          </div>
        </div>
            <div className={`h-[100vh] w-[100vw] bg-black ${flag ? "absolute" : "hidden"} flex items-center justify-center`}>
            <ul className='flex flex-col gap-5'>
              <li href='#' className='cursor-pointer md:hidden block text-white text-4xl'>Home</li>
              <li href='#' className='cursor-pointer md:hidden block text-white text-4xl'>LeaderBoard</li>
              <li href='#' className='cursor-pointer md:hidden block text-white text-4xl'>TimeTable</li>
              <li href='#' className='cursor-pointer md:hidden block text-white text-4xl'>Login</li>
            </ul>
            </div>
      </div>
    </div>
  )
}

export default Nav