import React from "react";
import logo from "../img/y18.gif";

function NavbarMain() {
  return (
    <nav className="bg-[#ff6600] text-black text-[13.3px] leading-3 p-1.5 md:p-0.5 grid grid-cols-2 gap-1 md:grid-cols-8 md:gap-2 items-center">
      <div className="flex gap-1 col-span-2 md:col-span-1">
        <img
          src={logo}
          alt="logo"
          width={19}
          height={19}
          className="border border-white inline-block"
        />
        <span className="font-bold self-center">Hacker News</span>
      </div>

      <div className="flex gap-x-1.5 flex-wrap [&>a]:py-[2px] md:[&>a]:py-[0px] md:flex-nowrap md:col-span-6">
        <a href="#" className="text-white">new</a> |<a href="#">past</a> |<a href="#">comments</a> |
        <a href="#">ask</a> |<a href="#">show</a> |<a href="#">jobs</a> |
        <a href="#">submit</a>
      </div>
      <a href="#" className="text-right pr-1">
        login
      </a>
    </nav>
  )
}

export default NavbarMain;
