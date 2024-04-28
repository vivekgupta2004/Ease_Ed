import React from 'react'

const Nav = () => {
  return (
    <div className=''>
      <div className=" flex justify-center h-20 ">
        <div className="flex justify-around mt-5 w-5/6 items-center font-bold text-[#C8C0C0] bg-[#141426] rounded-2xl">
          <div className="">
            <img src="expmple.png" alt="Logo" />
          </div>
          <div className="">
            <ul className='flex space-x-16 '>
              <li href='#' className='cursor-pointer'>Home</li>
              <li href='#' className='cursor-pointer'>LeaderBoard</li>
              <li href='#' className='cursor-pointer'>TimeTable</li>
            </ul>

          </div>
          <div className="">
            <ul className='w-28 h-12 bg-[#15803D] rounded-2xl flex justify-center items-center'>
              <li className='cursor-pointer'>Login</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav