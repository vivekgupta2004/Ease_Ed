import React from 'react'

const HeroSection = () => {
    return (
        <div className="bg-[url('../../public/heroSection.png')] h-screen w-screen bg-center">
            <div className="flex justify-center items-center text-white pt-60 flex-col">
                <h1 className="text-6xl w-1/2 text-center">Let's Make the future of the Students Bright</h1>
                <p className='p-5 text-2xl w-1/2 text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at it</p>

            </div>
            <div className="flex justify-center items-center">
                <img src="/heroImage.png" alt="" />
                <div className="w-52 h-16 border-2 border-solid border-white rounded-2xl flex justify-center items-center opacity-0 md:opacity-100 -ml-24 ">
                    <button className='cursor-pointer text-white text-2xl '>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection