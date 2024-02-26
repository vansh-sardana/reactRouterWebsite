import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../assets/Logo.svg"
// import { toast } from 'react-toastify'
import toast from 'react-hot-toast';

const Navbar = (props) => {
    const navigate = useNavigate();
    const loggedIn= props.loggedIn;
    const setLoggedIn= props.setLoggedIn;
    //true for login, false for signup
    const [formType, setFormType]= useState(true);
    function logoutHandler(){
        toast.success("logged out");
        setLoggedIn(false);
        navigate("/");
    }
    
  return (
    <div className='flex w-11/12 mx-auto justify-between max-w-[1160px] items-center py-4'>

        <div>
            <Link to="/">
                <img src={logo} alt="StudyNotion" width="160px" loading='lazy'/>
            </Link>
        </div>

      <ul className='flex justify-center align-center gap-10 text-white text-opacity-90'>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/contactus">Contact Us</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
      </ul>

      <ul className='flex justify-center gap-5'>
        { !loggedIn &&
            <li>
                <Link to="/login" className=' bg-gray-900 py-2 px-3 rounded-md border border-gray-700 text-white text-opacity-65'>Log in</Link>
            </li>
        }
        {   !loggedIn &&
            <li>
                <Link to="/signup" className=' bg-gray-900 py-2 px-3 rounded-md border border-gray-700 text-white text-opacity-65'>Sign Up</Link>
            </li>
        }
        { loggedIn &&
            <li>
            <Link to="/dashboard" className=' bg-gray-900 py-2 px-3 rounded-md border border-gray-700 text-white text-opacity-65'>Dashboard</Link>
            </li>
        }
        { loggedIn &&
            <li>
                <Link to="/" onClick={logoutHandler} className=' bg-gray-900 py-2 px-3 rounded-md border border-gray-700 text-white text-opacity-65'>Logout</Link>
            </li>
        }
      </ul>
    </div>
  )
}

export default Navbar
