"use client";

import Link from "next/link";
import { useState } from "react";
import { Ubuntu } from 'next/font/google';
import NavLink from "./NavLink";

const ubuntu = Ubuntu({
  subsets: ['latin', 'latin-ext'], // Customize the character set as needed
  weight: ['400', '700'], // Specify font weights
});

const Header = ({navItems}) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-14">
        <div className="flex flex-col items-center py-4 gap-y-10 ">
          {/* Logo */}
          <div className="flex justify-between w-full">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center gap-x-10">
                {/* <div className="w-12 h-12 border-2 border-teal-600 flex items-center justify-center">
                  <span className="text-[#008080] font-bold text-xl">H&M</span>
                </div> */}
                <img src="/handmlogo.png" alt="logo"
                width={80}
                height={80}
                 />
                <span  className={`${ubuntu.className} text-[#008080] text-2xl font-bold`}>
                  HANDLES & MORE
                </span>
              </a>
            </div>

            {/* Search Bar */}
            <div className=" flex-1 max-w-lg mx-8 justify-center items-center flex">
              <div className="relative px-2 flex flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border-b-2 border-[#008080] py-1 pr-10 focus:outline-none focus:border-teal-600 px-2"
                  placeholder="Search..."
                />
                <div className="absolute right-0 top-0 px-2">
                  {/* <Search className="h-6 w-6 text-gray-400" /> */}
                  <img src="/searchIcon.png" alt="search-icon" 
                  className="h-6 w-6 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <NavLink navItems={navItems} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
