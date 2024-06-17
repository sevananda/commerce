// // "use client"

// // import React, { useState } from 'react'
// // import Cookies from 'js-cookie';

// // // import './login.css';
// // import { FaUser } from "react-icons/fa";
// // import { FaLock } from "react-icons/fa";
// // import { FaEnvelope } from "react-icons/fa";

// // // import { useFormik } from 'formik';

// // const Loginpage = ({onLogin}) => {


// //   const [action, setAction] = useState('');
// //   const [userName, setuserName] = useState('');
// //   const [password1, setPassword1] = useState('');
// //   const [email,setEmail] = useState('');

// // const handleLogin = () => {
// //   const users = JSON.parse(Cookies.get('users') || '[]');
// //   const user = users.find(user => user.email === email && user.password === password);

// //   if (user) {
// //     Cookies.set('loggedInUser', JSON.stringify(user));
// //     onLogin();
// //   } else {
// //     alert('Invalid credentials');
// //   }
// // };
// //   const registerLink = () => {
// //     setAction(' active');
// //   };

// //   const loginLink = () => {
// //     setAction('');
// //   };
// // function data() {
// // // console.log(password1,"password")
// // alert("Username: " + userName + "\nPassword: " + password1);
// // }

// // function data1() {
// //   // console.log(password1,"password")
// //   alert("Username: " + userName +"\nemail:" + email+ "\nPassword: " + password1 );
// //   }
// //   return (
// //     <div className={`wrapper${action}`}>
// //       <div className='form-box login'>
// //         <form action="">
// //           <h1>Login</h1>
// //           <div className='input-box'>

// //             <input type="text" placeholder='Username' id='username' required onChange={(e)=>setuserName(e.target.value)}/>
// //             <FaUser className='icon'/>
// //           </div>
// //           <div className='input-box'>

// //             <input type="password" placeholder='Password' id='password' required onChange={(e)=>setPassword1(e.target.value)}/>
// //             <FaLock className='icon'/>
// //           </div>
// //           <div className='remember-forgot'>
// //             <label> <input type="checkbox" /> Remember me</label>
// //             <a href="#">Forgor password?</a>
// //           </div>
// //           <button type='submit' onClick={handleLogin}><a href='/Home'></a>Login</button>
// //           <div className="register-link">
// //             <p>Don't have an account? <a href="/Register" >Register</a></p>
// //           </div>
// //         </form>
// //       </div>

// //       {/* <div className='form-box register'>
// //         <form action="">
// //           <h1>Register</h1>
// //           <div className='input-box'>

// //             <input type="text" placeholder='Username' required  onChange={(e)=>setuserName(e.target.value)}/>
// //             <FaUser  className='icon'/>
// //           </div>
// //           <div className='input-box'>

// //             <input type="email" placeholder='Email' required  onChange={(e)=>setPassword1(e.target.value)}/>
// //             <FaEnvelope  className='icon'/>
// //           </div>
// //           <div className='input-box'>

// //             <input type="password" placeholder='Password' required onChange={(e)=>setEmail(e.target.value)} />
// //             <FaLock  className='icon'/>
// //           </div>
// //           <div className='remember-forgot'>
// //             <label> <input type="checkbox" />I agree to terms & conditions</label>
           
// //           </div>
// //           <button type='submit' onClick={data1}>Register</button>
// //           <div className="login-link">
// //             <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
// //           </div>
// //         </form>

// //       </div> */}
// //     </div>

// //   )
// // }

// // export default Loginpage

// // // "use client"
// // // import React, { useState } from 'react';
// // // import Cookies from 'js-cookie';

// // // const Login = ({ onLogin }) => {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');

// // //   const handleLogin = () => {
// // //     const users = JSON.parse(Cookies.get('users') || '[]');
// // //     const user = users.find(user => user.email === email && user.password === password);

// // //     if (user) {
// // //       Cookies.set('loggedInUser', JSON.stringify(user));
// // //       onLogin();
// // //     } else {
// // //       alert('Invalid credentials');
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Login</h2>
// // //       <input className='input-box'
// // //         type="email"
// // //         placeholder="Email"
// // //         value={email}
// // //         onChange={(e) => setEmail(e.target.value)}
// // //       />
// // //       <input className='input-box'
// // //         type="password"
// // //         placeholder="Password"
// // //         value={password}
// // //         onChange={(e) => setPassword(e.target.value)}
// // //       />
// // //       <button onClick={handleLogin}>Login</button>
// // //     </div>
// // //   );
// // // };

// // // export default Login;

// "use client"

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// import { setCookie } from 'cookies-next';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleLogin = () => {
//     const users = JSON.parse(localStorage.getItem('users') || '[]');
//     const user = users.find(user => user.email === email && user.password === password);
 
//     if (user) {
//       setCookie('loggedInUser', JSON.stringify(user));
//       router.push('/dashboard');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black">
//     <div className="p-6 bg-white rounded shadow-md">
//       <h2 className="mb-4 text-xl font-semibold">Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="w-full px-3 py-2 mb-4 border rounded text-black"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="w-full px-3 py-2 mb-4 border rounded text-black"
//       />
//       <button
//         onClick={handleLogin}
//         className="w-full px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
//       >
//         Login
//       </button>
//       <div className=" text-black">
//           <p>Don't have an account? <a href="/Register">Register</a></p>
//           </div>
//     </div>
//   </div>
//   );
// };

// export default Login;



"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { setCookie } from 'cookies-next';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();  // Prevent the default form submission behavior

    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(user => user.email === email && user.password === password);
 
    if (user) {
      setCookie('loggedInUser', JSON.stringify(user));
      router.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 mb-4 border rounded text-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 mb-4 border rounded text-black"
          />
          <button
            type="submit"
            className="w-full px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="text-black mt-4">
          <p>Don't have an account? <a href="/Register" className="text-blue-500">Register</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
