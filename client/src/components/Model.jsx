import axios from 'axios'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Modal = ({ closeModal }) => {
    const [responseData, setResponseData] = useState(null); 

    const email = useRef(null)
    const accessGrant = useRef(null)
    const classname = useRef(null)
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post("http://localhost:3000/addClass", {
            email: email.current.value,
            accessGrant: accessGrant.current.value.split(","), // we will get a string but backend is accepting an array
            className: classname.current.value,
        }
        )
        console.log(email.current.value)
        
        setResponseData(response.data.classId)

        localStorage.setItem("justCreatedClass",response.data.classId);
    }

    return (
        <main className='main'>
            <div className='fixed left-0 right-0 bottom-0 top-0 bg-[#2e2b2be6]' onClick={closeModal}></div>

            <form action="" className=" flex  justify-center items-center" onSubmit={handleSubmit} >
                <div className='fixed top-44 p-10  bg-slate-900 rounded-xl'>



                    <div className=' flex flex-col gap-6 text-white    '>

                        <label className='text-2xl text-white'>Email</label>
                        <input ref={email} placeholder='Enter your Email' className='text-2xl rounded-2xl p-4 border-2 border-solid border-white bg-transparent  ' />
                        <label className='text-2xl text-white'>Access Grant</label>
                        <input ref={accessGrant} placeholder='Enter your Access Grant' className='text-2xl rounded-2xl p-4 border-2 border-solid border-white bg-transparent ' />
                        <label className='text-2xl text-white'>Class Name</label>
                        <input ref={classname} placeholder='Enter your Class Name' className='text-2xl rounded-2xl p-4 border-2 border-solid border-white bg-transparent ' />

                        <button onClick={navigate('/uploadwork')} className='text-white border-2 border-solid border-white   text-2xl rounded-2xl p-2 flex justify-center ' type='submit'  >Add Class</button>
                    </div>
                </div>

            </form>
            {responseData && alert(responseData)}
        </main>
    )
}

export default Modal