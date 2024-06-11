import Link from "next/link";
import React from "react";

function Navbar() {
  const data = [
    {
      title: "Home",
      url: "/Home",
    },
    {
      title: "about",
      url: "/about",
    },
    {
      title: "blog",
      url: "/",
    },
    {
      title: "login",
      url: "/Login",
    },
  ];
  return (
    <div className="w-[100vw] h-[100px] flex flex-row justify-center gap-5 align-middle items-center text-center bg-indigo-600">
      <div className="flex flex-row justify-center gap-5">
        {data.map((navbar) => {
          return (
                <Link href={navbar.url}>
            <div className="text-black cursor-pointer">{navbar.title}</div>
                </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
