import React, { useState } from "react";
import { FaSearch, FaRegSun } from "react-icons/fa";
import SearchResult from "./SearchResult";

function NavbarSearch({ query }) {
  const [inputValue, setInputValue] = useState(query);

  return (
    <>
      <nav className="p-[10px] bg-[#ff742b] flex gap-4 items-center w-screen md:w-full text-[18px]">
        <span className="flex gap-2 items-center">
          <img
            src="//d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png"
            className="h-[48px] w-[48px]"
          />
          <span className="leading-none hidden md:inline-block">
            Search
            <br />
            Hacker News
          </span>
        </span>
        <span className="bg-white h-[42px] flex-1">
          <span className="flex p-[8px] gap-2 items-center text-[#ff742b]">
            <FaSearch />
            <form className="flex-1">
              <input
                type="text"
                value={inputValue?inputValue:""}
                onChange={(e) => setInputValue(e.target.value)}
                onClick={(e) => setInputValue(e.target.value)}
                className="w-full text-black focus:outline-0"
              />
            </form>
          </span>
        </span>
        <span className="flex gap-2 items-center">
          <FaRegSun />
          <span className="leading-none hidden md:inline-block">Settings</span>
        </span>
      </nav>
      <SearchResult query={inputValue}/>
    </>
  );
}

export default NavbarSearch;
