import React from 'react'
import Template from '../components/Template'

const SignUp = ({setLoggedIn}) => {
  return (
      <div>
        <Template title="Join the millions learning to code with StudyNotion for free" formType={"signup"} setLoggedIn={setLoggedIn}/>
      </div>
  )
}

export default SignUp
