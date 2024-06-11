"use client"

import React, { useState } from 'react'
// import './login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

// import { useFormik } from 'formik';

const Loginpage = () => {


  const [action, setAction] = useState('');
  const [userName, setuserName] = useState('');
  const [password1, setPassword1] = useState('');
  const [email,setEmail] = useState('');

  const registerLink = () => {
    setAction(' active');
  };

  const loginLink = () => {
    setAction('');
  };
function data() {
// console.log(password1,"password")
alert("Username: " + userName + "\nPassword: " + password1);
}

function data1() {
  // console.log(password1,"password")
  alert("Username: " + userName +"\nemail:" + email+ "\nPassword: " + password1 );
  }
  return (
    <div className={`wrapper${action}`}>
      <div className='form-box login'>
        <form action="">
          <h1>Login</h1>
          <div className='input-box'>

            <input type="text" placeholder='Username' id='username' required onChange={(e)=>setuserName(e.target.value)}/>
            <FaUser className='icon'/>
          </div>
          <div className='input-box'>

            <input type="password" placeholder='Password' id='password' required onChange={(e)=>setPassword1(e.target.value)}/>
            <FaLock className='icon'/>
          </div>
          <div className='remember-forgot'>
            <label> <input type="checkbox" /> Remember me</label>
            <a href="#">Forgor password?</a>
          </div>
          <button type='submit' onClick={data}><a href='/Home'></a>Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="/Register" >Register</a></p>
          </div>
        </form>
      </div>

      {/* <div className='form-box register'>
        <form action="">
          <h1>Register</h1>
          <div className='input-box'>

            <input type="text" placeholder='Username' required  onChange={(e)=>setuserName(e.target.value)}/>
            <FaUser  className='icon'/>
          </div>
          <div className='input-box'>

            <input type="email" placeholder='Email' required  onChange={(e)=>setPassword1(e.target.value)}/>
            <FaEnvelope  className='icon'/>
          </div>
          <div className='input-box'>

            <input type="password" placeholder='Password' required onChange={(e)=>setEmail(e.target.value)} />
            <FaLock  className='icon'/>
          </div>
          <div className='remember-forgot'>
            <label> <input type="checkbox" />I agree to terms & conditions</label>
           
          </div>
          <button type='submit' onClick={data1}>Register</button>
          <div className="login-link">
            <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
          </div>
        </form>

      </div> */}
    </div>

  )
}

export default Loginpage