import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import "./index.css"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PrivateRoutes from './components/PrivateRoutes'


const App = () => {
  const [loggedIn, setLoggedIn]= useState(false);
  return (
    <div className='overflow-y-auto overflow-x-hidden bg-black text-white w-screen min-h-screen relative flex flex-col'>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contactus" element={<Contact/>}></Route>
        <Route path='/signup' element={<SignUp setLoggedIn={setLoggedIn}/>}></Route>
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn}/>}></Route>
        <Route path='/dashboard' element={
          <PrivateRoutes loggedIn={loggedIn}>
            <Dashboard/>
          </PrivateRoutes>
        }>
        </Route>
        <Route path='*' element={<div>404 Not Found</div>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
