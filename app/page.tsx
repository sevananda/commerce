// import Index from "@/components/Sidebar";
// import Navbar from "@/components/navbar";
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div>
//       <Link href="/dashboard">
        
//      <button>Welcome Back</button>
//       </Link>
//     </div>
//   );
// }

"use client"
import React, { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';
import SignUp from './Register/page';
import Login from './Login/page';
import Home from './Home/page';

const App = () => {
  const [view, setView] = useState('login'); // Possible values: 'signup', 'login', 'home'
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedInUser = Cookies.get('loggedInUser');
    if (loggedInUser) {
      setIsAuthenticated(true);
      setView('home');
    }
  }, []);

  const handleSignUp = () => {
    setView('login');
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setView('home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setView('login');
  };

  return (
    <div>
      {view === 'signup' && <SignUp onSignUp={handleSignUp} />}
      {view === 'login' && <Login onLogin={handleLogin} />}
      {view === 'home' && isAuthenticated && <Home onLogout={handleLogout} />}
      {!isAuthenticated && (
        <div>
          <button onClick={() => setView('signup')}>Go to Sign Up</button>
          <button onClick={() => setView('login')}>Go to Login</button>
        </div>
      )}
    </div>
  );
};

export default App;

