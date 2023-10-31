import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { YOUTUBE_SUGESSTION_API } from "../utils/Config";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);

  // useEffect to make an api call
  useEffect(
    (getSearchSugestion) => {
      setTimeout(() => getSearchSuggestion(), 200);
    },
    [searchQuery]
  );

  // getSearchSugestion Function
  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SUGESSTION_API + searchQuery);
    const json = await data.json();
  };
  return (
    <div className="grid grid-flow-col h-auto bg-white w-screen shadow ">
      <div className="flex col-span-2  ">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          className="h-10 self-center col-span-1 m-2"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="Menu"
        />
        <a href="/">
          <img
            className="h-16 self-center col-span-3 m-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrALTBCvrwh81xkrAfH-XsstbsTKaQv0HiO6ckyuZU&s"
            alt="Logo"
          />
        </a>
      </div>
      <div className="h-12 m-4 flex col-span-11 self-center justify-center">
        <input
          type="text"
          className="w-3/5 border-solid border-gray-500 border-2 border-r-0 flex self-center rounded-l-full h-10 p-1"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button className="border-solid border-gray-500 border-2 self-center  rounded-r-full h-10 p-1  bg-gray-300 w-20">
          <img
            className="h-8 pl-3 flex"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/search-button-3766671-3146070.png?f=webp"
            alt="Search"
          />
        </button>
      </div>
      <img
        className="h-8 m-4 col-span-2 self-center"
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
        alt="user "
      />
    </div>
  );
};

export default Header;
