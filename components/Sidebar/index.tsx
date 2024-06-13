import Link from "next/link";
import React from "react";

function Sidebar() {
  const data = [
    {
      title: "Home",
      link: "/",
    },
    
    {
      title: "about",
      link: "/about",
    },
    {
      title: "blog",
      link: "/",
    },

  ];
  return (
    <div className="w-[400px] h-[100vh] flex flex-col items-center text-start bg-purple-800 pt-11 pl-6 pr-6">
      <div className="flex flex-col justify-center gap-5 ">
        {data.map((navbar) => {
          return (
            <Link href={navbar.link}>
            <div className="text-black cursor-pointer bg-orange-300  rounded-full w-[160px] text-center p-2">{navbar.title}</div>
        </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
