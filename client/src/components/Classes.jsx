import React from 'react'
import Nav from './Nav'
import { Footer } from './Footer'

const Classes = () => {
    return (
        <div className='bg-[url(/Ellipse13.png)] bg-right-bottom bg-contain bg-opacity-10  bg-no-repeat' >
            <Nav/>
            <div className=" pb-32">
            <p className=" text-white justify-center flex text-5xl pt-32">YOUR CLASSES!</p>
            <div className='text-white flex justify-center pt-20 gap-60'>
                <button className='text-3xl border-2 border-solid border-white px-12 py-2 '>
                    Class 1
                </button>
                <button className='text-3xl border-2 border-solid border-white px-12 py-2 '>
                    Class 1
                </button>
            </div>
            <div className='text-white flex justify-center pt-20 gap-60'>
                <button className='text-3xl border-2 border-solid border-white px-12 py-2 '>
                    Class 1
                </button>
                <button className='text-3xl border-2 border-solid border-white px-12 py-2 '>
                    Class 1
                </button>
            </div>
             <div className='flex justify-center pt-20 ' >
             <button className=' text-white text-2xl border-4 border-solid border-white px-12 py-4 rounded-xl'> ADD NEW CLASS + </button>
             </div>
           
            </div>
            <Footer/>

        </div>
    )
}

export default Classes