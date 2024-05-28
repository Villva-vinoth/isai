import React from 'react'
import '../css/Nomination.css'
import { HiCursorClick } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Nomination = () => {
    const handleClick = () => {
        toast.success('Form Submitted Successfully !')
    }
    return (
        <div className='Nomination-container p-5 my-2'>
            <h1 className='text-2xl lg:text-3xl flex items-center justify-center alegreya-class font-bold text-[#D24545] my-5'>Nomination</h1>
            <div className=' nomination-input '>
                <div className='my-4 flex justify-evenly'>
                    <div className='flex gap-5'><input type='checkbox' /> Cultural</div>
                    <div className='flex gap-5'><input type='checkbox' /> Social responsibility</div>
                    <div className='flex gap-5'><input type='checkbox' /> Business excellence</div>

                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 place-items-center w-[100%] mx-auto nomination-text-type my-4'>

                    <input placeholder='Enter your First Name' type='text' />
                    <input placeholder='Enter your Last Name' type='text' />
                    <input type='date' />
                    <input placeholder='Enter your Educational Qualification' type='text' />
                    <input placeholder='Enter your Profession' type='text' />

                    <select >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </select>
                    <input placeholder='Enter your Address' type='text' />
                    <input placeholder='Enter your Phone' type='text' />
                    <input placeholder='Enter your E-mail' type='text' />
                    <input placeholder='Enter your Website' type='text' />

                </div>
                <div className='nomination-text my-4'>
                    <textarea placeholder='Have You Received Any Awards ? If So, Provide Details :' />
                </div>
                <div className='my-4 flex justify-center'>
                    <div className='flex gap-5'>
                        <input type='checkbox' />  I hereby declare that the information provided above are true to the best of my knowledge & belief
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='submit-nomination' onClick={() => handleClick()}>Submit <span><HiCursorClick /></span></button>
                </div>
            </div>
            <ToastContainer />

        </div>
    )
}

export default Nomination