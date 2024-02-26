import React from 'react'
import { FcGoogle } from "react-icons/fc";
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import login from '../assets/login.png'
import frame from '../assets/frame.png'
import signup from '../assets/signup.png'

const Template = ({title, formType, setLoggedIn}) => {
  return (
    <div className='flex max-w-[1160px] gap-x-12 w-11/12 m-auto py-12 justify-between'>
      <div className='w-11/12 max-w-[450px]'>
        <h2 className='font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h2>
        <p className=' mt-4 text-[1.275rem] leading-[1.875rem] text-white text-opacity-70'>Build skills for today, tomorrow, and beyond.</p>
        <p className=' text-[1.275rem] leading-[1.875rem] text-blue-300 italic'>Education to future-proof your career.</p>
        {formType==="signup"?<SignupForm setLoggedIn={setLoggedIn}/>:<LoginForm setLoggedIn={setLoggedIn}/>}
         
        <div className='w-full flex items-center my-4 gap-x-2'>
          <div className='bg-white bg-opacity-20 h-[1px] w-full'></div>
          <p className='text-white opacity-45 leading-[1.375rem] '>OR</p>
          <div className='bg-white bg-opacity-20 h-[1px] w-full'></div>
        </div>
        <button className='flex justify-center items-center border border-white border-opacity-25 w-full rounded-md font-medium mt-6 px-3 py-2 gap-3 opacity-65'><FcGoogle/> <p>Sign in with Google</p></button>
      </div>
      <div className='relative w-11/12 max-w-[450px]'>
        <img src={frame} alt="" width="555px" loading='lazy'/>
        <img src={formType==="signup"?signup:login} alt="" width="555px" loading='lazy' className='absolute -top-4 -left-4 z-10'/>
      </div>
    </div>
  )
}

export default Template
