import React, { useState } from 'react'
import Login from '../components/login'
import Signup from '../components/signup'


function Loginpage() {
  const [form,setform]=useState(true)

  let signupClick=()=>{
         setform(!form)
         console.log(form)
  }
  return (
    
       <div>
         {form?<Login signupClick={signupClick}/>: <Signup/>}
    </div>

    
  )
 
}

export default Loginpage