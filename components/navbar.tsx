"use client"
import Link from "next/link";
import React from "react";


import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';
function Navbar() {
  // const data = [

  //   {
  //     title: "login",
  //     url: "/Login",
  //   },
  // ];
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear(); 
    deleteCookie('loggedInUser'); 
    router.push('/login'); 
  };
  
  return (
    <div>
      <div className="w-[100vw] h-[50px] flex flex-row  justify-between gap-5 align-middle items-center pl-10 pr-10 bg-indigo-600">
        <h1 className="font-bold ">LOGO</h1>
        <div>
          <Link href={`/Login`}>
            {/* <img src={data.bgImg}></img> */}
            <button onClick={handleLogout}>Log out</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
