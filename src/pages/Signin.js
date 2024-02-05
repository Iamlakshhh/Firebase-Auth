import React from 'react';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {app} from '../firebase';

const auth  = getAuth(app);

const Signin = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


const signinUser = ()=>{
    signInWithEmailAndPassword(auth,email,password).then((value)=>console.log("signin Success")).catch((err)=>console.log(err));
}



  return (
    <div className='signin-page'>
        <h1>Signin Page</h1>
        <label>Enter your Email</label>
        <input onChange={e=>setEmail(e.target.value)} value={email} type='email' placeholder='Enter your Email here' required/>
        <label>Enter your Password</label>
        <input onChange={e=>setPassword(e.target.value)} value={password} type='password' placeholder='Enter your Password here' required/>
        <button onClick={signinUser}>Sign me in</button>
    </div>
  )
}

export default Signin