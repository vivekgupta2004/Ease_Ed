import React from 'react'
import VericalProgress from './VericalProgress'

const HowItWork = () => {
    return (
        <>
            <div className='h-[300vh] w-screen text-white p-12 bg-[url("../../public/aboutEllipse.png")]  bg-center bg-cover bg-opacity-10 bg-no-repeat")]'>
                <h1 className='text-5xl font-light mt-10'>How It Works?</h1>
                <p className='text-lg w-1/3 mt-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit repellendus quisquam provident quibusdam consequuntur voluptate aliquam amet iure vero.</p>

                <div className='h-32 w-[60vw]  mx-auto relative top-[20vh] flex items-center justify-center gap-20 '>
                    <p className='  inline-block w-1/4 text-right opacity-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum.</p>
                    <div className='h-[27px] w-[27px] rounded-full bg-[#E1A448] relative top-[14px] z-10 '></div>
                    <h1 className='text-white inline-block w-1/4 text-5xl font-light'>Get Started</h1>
                </div>
                <div className='  h-32 w-[60vw]  mx-auto relative top-[60vh] flex items-center justify-center gap-20'>
                    <p className='text-sm  inline-block w-1/4 text-center text-white'>Teacher can enroll in more than one class, But Student can enroll in only one class</p>
                    <div className='h-[27px] w-[27px] rounded-full bg-[#E1A448] relative top-[14px] z-10 '></div>
                    <h1 className='text-white inline-block w-1/4 text-3xl font-light'>Enroll as a Student or Teacher.</h1>
                </div>
                <div className='  h-32 w-[60vw]  mx-auto relative top-[100vh] flex items-center justify-center gap-20'>
                    <p className='text-sm  inline-block w-1/4 text-center text-white'>Teacher will Provide the Unique Verification Code to the Students.</p>
                    <div className='h-[27px] w-[27px] rounded-full bg-[#E1A448] relative top-[14px] z-10 '></div>
                    <h1 className='text-white inline-block w-1/4 text-3xl font-light'>Class Enrollment Code.</h1>
                </div>
                <div className='  h-32 w-[60vw]  mx-auto relative top-[140vh] flex items-center justify-center gap-20'>
                    <p className='text-sm  inline-block w-1/4 text-center text-white'>Students must Enter the Verification Code to Enroll in the Class and get Started.</p>
                    <div className='h-[27px] w-[27px] rounded-full bg-[#15803D] relative top-[14px] z-10 '></div>
                    <h1 className='text-white inline-block w-1/4 text-3xl font-light'>Verify Class.</h1>
                </div>
                <VericalProgress />

            </div>

        </>
    )
}

export default HowItWork


{/* <div className='h-[27px] w-[27px] rounded-full bg-white relative top-[14px] z-10 '></div> */ }