import React from 'react'
import Nav from './Nav'
import { Footer } from './Footer'

const UploadWork = () => {
    return (
        <div className='bg-[url(/Ellipse13.png)] bg-right-bottom bg-contain bg-opacity-10  bg-no-repeat' >
            <Nav />
            <div className=" pb-20">
                <p className=" text-white justify-center flex text-5xl pt-32">Upload HomeWork!</p>

                <div className="flex justify-evenly mt-20 ">
                    <div className=''>


                        <div className=" text-white  border-2 border-solid border-white w-72 rounded-xl ">
                            <p className='text-3xl border-2 border-solid border-white px-2 py-2 w-72 rounded-xl'>Subject : </p>
                            <div className='flex justify-center p-16 '>
                                <img src="/pdfimg.png" alt="img" />
                            </div>

                            <p className='text-3xl border-2 border-solid border-white px-2 py-2 w-72 rounded-xl'>Time-Slot:</p>

                        </div>
                        <div className='pt-20'>
                            <p className=' border-opacity-50 border-2 border-solid border-white px-2 py-2 w-72 rounded-xl text-opacity-40 text-white text-2xl'>DESCRIPTION</p>
                        </div>
                    </div>
                    <div className=''>


                        <div className=" text-white  border-2 border-solid border-white w-72 rounded-xl ">
                            <p className='text-3xl border-2 border-solid border-white px-2 py-2 w-72 rounded-xl'>Subject : </p>
                            <div className='flex justify-center p-16 '>
                                <img src="/pdfimg.png" alt="img" />
                            </div>

                            <p className='text-3xl border-2 border-solid border-white px-2 py-2 w-72 rounded-xl'>Time-Slot:</p>

                        </div>
                        <div className='pt-20'>
                            <p className=' border-opacity-50 border-2 border-solid border-white px-2 py-2 w-72 rounded-xl text-opacity-40 text-white text-2xl'>DESCRIPTION</p>
                        </div>
                    </div>
                    <div className=''>


                        <div className=" text-white  border-2 border-solid border-white w-72 rounded-xl ">
                            <p className='text-3xl border-2 border-solid border-white px-2 py-2 w-72 rounded-xl'>Subject : </p>
                            <div className='flex justify-center p-16 '>
                                <img src="/pdfimg.png" alt="img" />
                            </div>

                            <p className='text-3xl border-2 border-solid border-white px-2 py-2 w-72 rounded-xl'>Time-Slot:</p>

                        </div>
                        <div className='pt-20'>
                            <p className=' border-opacity-50 border-2 border-solid border-white px-2 py-2 w-72 rounded-xl text-opacity-40 text-white text-2xl'>DESCRIPTION</p>
                        </div>
                    </div>

                </div>

                <div className='flex justify-center pt-20 ' >
                    <button className=' text-white text-2xl border-4 border-solid border-white px-12 py-4 rounded-xl'> ADD MORE + </button>
                </div>

            </div>
            <Footer />

        </div>
    )
}

export default UploadWork