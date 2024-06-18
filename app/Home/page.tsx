// // import React from 'react'

// // const page = () => {
// //   return (
// //     <div>page</div>
// //   )
// // }

// // export default page

// "use client"
// import React from 'react';
// import Cookies from 'js-cookie';

// const Home = ({ onLogout }) => {
//   const user = JSON.parse(Cookies.get('loggedInUser'));

//   const handleLogout = () => {
//     Cookies.remove('loggedInUser');
//     onLogout();
//   };

//   return (
//     <div>
//       <h2>Welcome, {user ? user.email : 'Guest'}!</h2>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Home;

"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie, deleteCookie } from 'cookies-next';

const Home = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = getCookie('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      router.push('/Login');
    }
  }, []);

  const handleLogout = () => {
    deleteCookie('loggedInUser');
    router.push('/Login');
  };

  if (!user) return null; // Prevent flicker while checking auth

  return (
    <div>
      <h2>Welcome, {user.email}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
