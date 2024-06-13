import Link from "next/link";
import React from "react";

function Navbar() {
  // const data = [
   
  //   {
  //     title: "login",
  //     url: "/Login",
  //   },
  // ];
  return (
    <div>
    <div className="w-[100vw] h-[50px] flex flex-row  justify-between gap-5 align-middle items-center pl-10 pr-10 bg-indigo-600">
        <h1 className="font-bold ">LOGO</h1>
     <div>
      <button>
        Log out
      </button>
     </div>
    </div>
    </div>
  );
}

export default Navbar;
