
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React from 'react'
import { useState } from 'react'
const Signup = () => {
const [email,setemail]=useState('')
const [password,setPassword]=useState('')

  
const auth = getAuth();
const signupSubmit=()=>{
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    alert(user)
  
  })
  .catch((error) => {
  console.log("--------",error);
  
    const errorCode = error.code;
    const errorMessage = error.message;
   
  });
}
  return (
    <div className="container-fluid py-5">
    <div className="container py-5">
    <h1 className="mb-4">Sign Up </h1>
    <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e)=>{setemail(e.target.value)}} 
              required
            />
              <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}} 
              required
            />
            <button onClick={signupSubmit}>Signup</button>
        </div>
        </div>
  )

}


export default Signup