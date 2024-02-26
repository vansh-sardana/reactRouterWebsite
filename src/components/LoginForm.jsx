import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setLoggedIn}) => {
  const navigate= useNavigate();
  const [details, setDetails]= useState(
    {
      email: "",
      pass: ""
    }
  );
  const [seePass, setSeePass] = useState(false);
  function changeHandler(event){
    setDetails((prevData)=>(
      {
        ...prevData, 
        [event.target.name]:event.target.value
      }
    ));
    }
    function submitHandler(e){
      e.preventDefault();
      setLoggedIn(true);
      toast.success("Signin success");
      navigate("/dashboard");
    }
  
  return (
    <div>
      <form onSubmit={submitHandler} className='flex flex-col w-full mt-6 gap-y-4'>
            <div>
              <label htmlFor="email" className='text-[0.975rem] leading-[1.375rem] mb-1 font-normal'><div>Email Address <sup className='text-pink-600'>*</sup></div></label>
              <input required onChange={changeHandler} value={details.email} type="email" name="email" id="email" placeholder='Enter email address' className='bg-gray-900 p-[12px] rounded-md text-white w-full mt-2'/>
            </div>
            <div >
              <label className='relative'>
                
                <div className='text-[0.975rem] leading-[1.375rem] mb-1 font-normal'>
                  Password <sup className='text-pink-600'>*</sup>
                </div>
                <input required onChange={changeHandler} value={details.pass} type={seePass == true ? "text" : "password"} name="pass" id="pass" placeholder='Enter Password' className='bg-gray-900 p-[12px] rounded-md text-white w-full mt-2'/>
                <span onClick={()=>{
                  setSeePass(!seePass);
                }} className='absolute right-3 top-[73%] text-[24px]'>
                  {seePass==true?<AiOutlineEyeInvisible/>:<AiOutlineEye/>}
                </span>
              </label>
              
              <Link to="#" >
                <p className='mt-1 text-xs text-blue-400 max-w-max ml-auto' onClick={()=>toast.success("You can enter any password")
                }>forgot password</p>
                </Link>
              
            </div>
            <input type="submit" value="Sign in" className='w-full px-3 py-2 bg-yellow-400 rounded-md text-black font-medium mt-3'/>
            
        </form>
    </div>
  )
}

export default LoginForm
