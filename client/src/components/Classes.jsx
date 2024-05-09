import React, { useEffect, useRef, useState } from 'react'
import Nav from './Nav'
import { Footer } from './Footer'

import Modal from './Model'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Classes = () => {
    const navigate = useNavigate()
    const [response, setResponse] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => {
        return setShowModal(false)
    }
    function parseJwt(token) {
        const [header, payload, signature] = token.split('.')
        const decodedPayload = atob(payload);
        const parsedPayload = JSON.parse(decodedPayload);
        return parsedPayload;
    }

    const logedUserToken = localStorage.getItem('superToken');
    const logedEmail = (parseJwt(logedUserToken)).email;

    useEffect(() => {
        const sendEmail = async () => {
            const responseTemp = await axios.post("http://localhost:3000/classRender", {
                email: logedEmail
            })
            setResponse(responseTemp.data);
            console.log(response)
        }
        sendEmail();
    }, [])

    const handleClass = async(item) => {
        console.log(item)
        const response = await axios.post("http://localhost:3000/navigateTeacher",{
            className: item
        })
        console.log(response.data.classid);
        navigate(`/uploadwork/${response.data.classid}`)
        
    }



    return (
        <div className='bg-[url(/Ellipse13.png)] bg-right-bottom bg-contain bg-opacity-10  bg-no-repeat' >
            <Nav />
            <div className=" pb-32">
                <p className=" text-white justify-center flex text-5xl pt-32">YOUR CLASSES!</p>

                {response ? response.map((item, index) => (
                    <div key={index} className='text-white flex justify-center pt-20 gap-60'>
                        <button onClick={() => {
                            handleClass(item)
                        }} className='text-3xl border-2 border-solid border-white px-12 py-2 '>
                            {item}
                        </button>

                    </div>
                )) : <h1>Loading...</h1>}






                <div className='flex justify-center pt-20 ' >
                    <button className=' text-white text-2xl border-4 border-solid border-white px-12 py-4 rounded-xl' onClick={() => { setShowModal(true) }}> ADD NEW CLASS + </button>
                    <button className=' text-white text-2xl border-4 border-solid border-white px-12 py-4 rounded-xl ml-10' onClick={() => { setShowModal(true) }}> ADD existing CLASS + </button>
                </div>

            </div>

            {showModal && <Modal closeModal={closeModal} />}

            <Footer />

        </div>
    )
}

export default Classes