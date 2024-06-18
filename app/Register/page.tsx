// "use client"

// import React, { useState } from 'react'
// // import { useNavigate } from 'react-router-dom';
// import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";
// import { FaEnvelope } from "react-icons/fa";
// import Cookies from 'js-cookie';

// const Page = ({onSignUp}) => {

//     const [action, setAction] = useState('');
//   const [userName, setuserName] = useState('');
//   const [password1, setPassword1] = useState('');
//   const [email,setEmail] = useState('');

// const handleSignUp = () => {
//   const users = JSON.parse(Cookies.get('users') || '[]');
//   users.push({userName, email, password1 });
//   Cookies.set('users', JSON.stringify(users));
//   onSignUp();
// };
//     // const navigate = useNavigate();
// // local storage

// // const handleSignup = () => {
// //   localStorage.setItem('user', JSON.stringify({userName, password1, email}));
// //    navigate('/Login');
// // }

//   const registerLink = () => {
//     setAction(' active');
//   };

// //   const loginLink = () => {
// //     setAction('');
// //   };
// // function data() {
// // // console.log(password1,"password")
// // alert("Username: " + userName + "\nPassword: " + password1);
// // }

// function data1() {
//   // console.log(password1,"password")
//   alert("Username: " + userName +"\nemail:" + email   + "\nPassword: " + password1 );
//   }
//   return (
//     <div>
//          <div className='form-box register'>
//         <form action="">
//           <h1>Register</h1>
//           <div className='input-box'>

//             <input type="text" placeholder='Username' required  onChange={(e)=>setuserName(e.target.value)}/>
//             <FaUser  className='icon'/>
//           </div>
//           <div className='input-box'>

//             <input type="email" placeholder='Email' required  onChange={(e)=>setPassword1(e.target.value)}/>
//             <FaEnvelope  className='icon'/>
//           </div>
//           <div className='input-box'>

//             <input type="password" placeholder='Password' required onChange={(e)=>setEmail(e.target.value)} />
//             <FaLock  className='icon'/>
//           </div>
//           <div className='remember-forgot'>
//             <label> <input type="checkbox" />I agree to terms & conditions</label>

//           </div>
//           <button type='submit' onClick={handleSignUp}  >Register</button>
//           <div className="login-link">
//             <p>Already have an account? <a href="/Login" onClick={registerLink}>Login</a></p>
//           </div>
//         </form>

//       </div>
//     </div>
//   )
// }

// export default Page

// // "use client"

// // import React, { useState } from 'react';
// // import Cookies from 'js-cookie';

// // const SignUp = ({ onSignUp }) => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSignUp = () => {
// //     const users = JSON.parse(Cookies.get('users') || '[]');
// //     users.push({ email, password });
// //     Cookies.set('users', JSON.stringify(users));
// //     onSignUp();
// //   };

// //   return (
// //     <div>
// //       <h2>Sign Up</h2>
// //       <input className='input-box'
// //         type="email"
// //         placeholder="Email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //       />
// //       <input className='input-box'
// //         type="password"
// //         placeholder="Password"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //       />
// //       <button onClick={handleSignUp}>Sign Up</button>
// //     </div>
// //   );
// // };

// // export default SignUp;

"use client";
import { useState } from "react";
import { setCookie } from "cookies-next";
import { FaUser, FaUserLock } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    router.push("/Login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-black wrapper ">
      <div className="p-6 input-box">
        <h2 className="mb-4 text-xl font-semibold">Sign Up</h2>
        <input
          type="username"
          placeholder="username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 mb-4 border rounded text-black "
        />
        <FaUser className="absolute right-9  top-[115px] font-semibold translate-y-28" />
        <input
          type="email"
          placeholder="Email"
          value={email}
          required 
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 mb-4 border rounded text-black"
        />
        <FaEnvelope className="absolute right-9  top-[190px] font-semibold translate-y-28" />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 mb-4 border rounded text-black"
        />
        <FaUserLock className="absolute right-9  top-[270px] font-semibold translate-y-28" />
        <div className="">
          <label className=" flex flex-row pr-[200px] ">
            <input type="checkbox" />I agree to terms & conditions
          </label>
        </div>
        <button
          onClick={handleSignUp}
          className="w-full px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
        <div className="login-link ">
          <p>
            Already have an account? <a href="/Login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
