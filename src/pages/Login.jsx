import React from 'react'
import Template from '../components/Template.jsx'

const Login = ({setLoggedIn}) => {
  return (
    <div>
      <Template title="Welcome Back" formType="login" setLoggedIn={setLoggedIn}/>
    </div>
  )
}

export default Login
