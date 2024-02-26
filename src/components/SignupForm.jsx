import React from 'react'
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setLoggedIn }) => {
    const navigate = useNavigate();
    const [seePass1, setSeePass1] = useState(false);
    const [seePass2, setSeePass2] = useState(false);
    const [userType, setUserType] = useState("student");
    const [details, setDetails] = useState(
        {
            firstName: "", email: "", lastName: "", createPass: "", cnfmPass: ""
        }
    );

    function changeHandler(event) {
        setDetails((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ));
    }
    function submitHandler(e) {
        e.preventDefault();

        if (e.target.cnfmPass.value != e.target.createPass.value) {
            toast.error("Passwords do not match");
            return;
        }
        setLoggedIn(true);
        toast.success("Signup success");
        console.log("Signup success. Here are the details entered!")
        console.log({...details, userType});
        navigate("/dashboard");
    }

    return (
        <div>
            <div className='flex p-1 gap-1 my-6 rounded-full bg-gray-800 max-w-max'>
                <button className={`${userType=="student"?"bg-gray-900":"bg-gray-800"} rounded-full py-2 px-5 transition-all duration-200`} onClick={
                    () => {
                        setUserType("student")
                    }
                }>Student</button>
                <button className={`${userType=="instructor"?"bg-gray-900":"bg-gray-800"} rounded-full py-2 px-5 transition-all duration-200`} onClick={
                    () => {
                        setUserType("instructor")
                    }
                }>Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
                <div className='flex flex-col gap-3 mt-4'>
                    <div className='flex justify-between gap-4'>
                        <div>
                            <label htmlFor="firstName" className='text-[0.975rem] leading-[1.375rem] mb-1 font-normal'>First Name<sup className='text-pink-600'>*</sup></label>
                            <input required onChange={changeHandler} value={details.firstName} type="text" id="firstName" name='firstName' placeholder='Enter first name' className='bg-gray-900 p-[12px] rounded-md text-white w-full mt-2' />
                        </div>
                        <div>
                            <label htmlFor="lastName" className='text-[0.975rem] leading-[1.375rem] mb-1 font-normal'>Last Name<sup className='text-pink-600'>*</sup></label>
                            <input required onChange={changeHandler} value={details.lastName} type="text" id="lastName" name='lastName' placeholder='Enter last name' className='bg-gray-900 p-[12px] rounded-md text-white w-full mt-2' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className='text-[0.975rem] leading-[1.375rem] mb-1 font-normal'>Email Address<sup className='text-pink-600'>*</sup></label>
                        <input required onChange={changeHandler} value={details.email} type="email" id="email" name='email' placeholder='Enter email address' className='bg-gray-900 p-[12px] rounded-md text-white w-full mt-2' />
                    </div>

                    <div className='flex gap-4 justify-between'>
                        <div>
                            <label className='text-[0.975rem] leading-[1.375rem] mb-1 font-normal relative'>
                                <div>Create Password<sup className='text-pink-600'>*</sup></div>
                                <input required onChange={changeHandler} value={details.seePass1} type={seePass1 == true ? "text" : "password"} id="createPass" name='createPass' placeholder='Enter Password' className='bg-gray-900 p-[12px] rounded-md text-white w-full mt-2' />
                                <span onClick={
                                    () => {
                                        setSeePass1(!seePass1);
                                    }
                                } className='absolute right-3 top-[67%] text-[24px]'>
                                    {seePass1 == true ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                </span>
                            </label>
                        </div>
                        <div>
                            <label className='text-[0.975rem] leading-[1.375rem] mb-1 font-normal relative' >
                                <div>Confirm Password<sup className='text-pink-600'>*</sup></div>
                                <input required onChange={changeHandler} value={details.seePass2} type={seePass2 == true ? "text" : "password"} id="cnfmPass" name='cnfmPass' placeholder='Confirm Password' className='bg-gray-900 p-[12px] rounded-md text-white w-full mt-2' />
                                <span onClick={
                                    () => {
                                        setSeePass2(!seePass2);
                                    }
                                } className='absolute right-3 top-[67%] text-[24px]'>
                                    {seePass2 == true ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                </span>
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Create Account" className='w-full px-3 py-2 bg-yellow-400 rounded-md text-black font-medium mt-3' />

                </div>
            </form>
        </div>
    )
}

export default SignupForm
