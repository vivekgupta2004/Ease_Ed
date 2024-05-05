import React, { useRef, useState } from 'react'
import Nav from './Nav'
import { Footer } from './Footer'
import axios from 'axios'
const Classes = () => {
    const email = useRef(null)
    const accessGrant = useRef(null)
    const classname = useRef(null)
    
    const [responseData,setResponseData]=useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
       
        const response = await axios.post("http://localhost:3000/addClass", {
            email: email.current.value,
            accessGrant: accessGrant.current.value.split(","), // we will get a string but backend is accepting an array
            className: classname.current.value,
        }
        )
        setResponseData(response.data.classId)
    }
    return (
        <div className='bg-[url(/Ellipse13.png)] bg-right-bottom bg-contain bg-opacity-10  bg-no-repeat' >
            <Nav />
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
            <form action="" className=" flex  justify-evenly mt-28 pb-12 bg-[url(/aboutEllipse.png)]" onSubmit={handleSubmit}>

                <div className='flex flex-col   w-2/6 gap-9 '>

                    <label className='text-3xl'>Email</label>
                    <input ref={email} placeholder='Enter your Email' className='text-2xl rounded-2xl p-4 border-2 border-solid border-white bg-transparent  ' />
                    <label className='text-3xl'>Access Grant</label>
                    <input ref={accessGrant} placeholder='Enter your Access Grant' className='text-2xl rounded-2xl p-4 border-2 border-solid border-white bg-transparent ' />
                    <label className='text-3xl'>Class Name</label>
                    <input ref={classname} placeholder='Enter your Class Name' className='text-2xl rounded-2xl p-4 border-2 border-solid border-white bg-transparent ' />

                    <button className='border-2 border-solid border-white  w-28 text-2xl rounded-2xl p-2 flex justify-center ' type='submit' >Sign Up</button>
                </div>
                <img src="/signin.png" alt="signup" />

            </form>

            {responseData ? <h1>{responseData}</h1> : <h1>Class Id will appear here:</h1>}
            <Footer />

        </div>
    )
}

export default Classes