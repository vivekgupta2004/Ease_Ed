import React from 'react'
import Nav from './Nav'
import Checkprogress from './Checkprogress'

const Leaderboard = () => {
  return (
    <div className='text-white'>
      <Nav/>
      <div className='h-[300vh] w-screen bg-[#0D0C1A] p-1'>
        <img src="/Ellipse14.png" alt="" className='absolute -top-[10vh] h-1/3 w-full left-0' />
        <Checkprogress/>

        <div className='text-white mt-64'>
        <div>
         <div className=' flex flex-row  items-center gap-40 ml-40  '>
          <div className=' h-55 w-400 p-3 mr-10 '>
            <h1 className='font- text-5xl mb-2 ' >Hard Work Section</h1>
            <p className='font-bold text-base p-2 m-4'>Embrace the grind,for its's the path to <br /> greatness.</p>
          </div>
          <div className=' h-50 w-50'>
            <img src="public/vvt.png" alt="" />
            </div>
         </div>
         <div className='  flex flex-row  items-center gap-40 ml-40 mb-9   '>
         
        <div className='border border-white-400 rounded-lg p-5 bg-green-500 '> 
          <div className='flex flex-row  items-center justify-between gap-40' > <h1 className=' text-3xl mb-2 ' >Already Completed Task.</h1> 
        <div>12:00-1:00</div>
        </div>
          <p className='font-bold text-base'>Completed</p></div>
         
         
         <div className='border border-white-400 rounded-tl-lg rounded-tr-lg bg-green-500 '> 
         <h3 className='text-base font-bold m-3 ' >Upload work</h3>
         </div>
         </div>
         <div className='  flex flex-row  items-center gap-40 ml-40 mb-9   '>
         
        <div className='border border-white-400 rounded-lg p-5 bg-green-500 '> 
          <div className='flex flex-row  items-center justify-between gap-40' > <h1 className=' text-3xl mb-2 ' >To  Be  Completed.    </h1> 
        <div>12:00-1:00</div>
        </div>
          <p className='font-bold text-base'>Pending</p></div>
         
         
         <div className='border border-white-400 rounded-tl-lg rounded-tr-lg bg-green-500 '> 
         <h3 className='text-base font-bold m-3 ' >Upload work</h3>
         </div>
         </div>
         <div className='  flex flex-row  items-center gap-40 ml-40 mb-9  '>
         
        <div className='border border-white-400 rounded-lg p-5 bg-green-500 '> 
          <div className='flex flex-row  items-center justify-between gap-40' > <h1 className=' text-3xl mb-2 ' >Not Be Completed.</h1> 
        <div>12:00-1:00</div>
        </div>
          <p className='font-bold text-base'>Incomplete</p></div>
         
         
         <div className='border border-white-400 rounded-tl-lg rounded-tr-lg bg-green-500 '> 
         <h3 className='text-base font-bold m-3 ' >Upload work</h3>
         </div>
         </div>
        </div>
        </div>
       

      </div>
    </div>
  )
}

export default Leaderboard