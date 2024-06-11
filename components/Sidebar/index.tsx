import Link from "next/link";
import React from "react";

function Index() {
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
    <div className="w-[200px] h-[calc(100vh-100px)] flex flex-col items-center text-start bg-cyan-400 pt-11">
      <div className="flex flex-col justify-center gap-5 ">
        {data.map((navbar) => {
          return (
            <Link href={navbar.link}>
            <div className="text-black cursor-pointer bg-stone-500 w-[160px] text-center p-2">{navbar.title}</div>
        </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
