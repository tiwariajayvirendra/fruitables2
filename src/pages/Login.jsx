
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import React from 'react'
import { useState } from 'react'
const Login = () => {
const [email,setemail]=useState('')
const [password,setPassword]=useState('')

  
const auth = getAuth();
const LoginSubmit=()=>{
    signInWithEmailAndPassword(auth,email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user)
    alert(user.email)
  
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
            <button onClick={LoginSubmit}>Login</button>
        </div>
        </div>
  )

}


export default Login