import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/AppSlice";
import { YOUTUBE_SUGESSTION_API } from "../config/Config";
import { cacheResults } from "./searchSlice";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);

  // useEffect to make an api call
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugestion();
      }
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  // getSearchSugestion Function
  const getSearchSugestion = async () => {
    try {
      const data = await fetch(YOUTUBE_SUGESSTION_API + searchQuery);
      const json = await data.json();
      console.log(json);
      setSuggestions(json[1]);
      // dispatch
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch {
      console.log("Error while fetching search results.");
    }
  };

  return (
    <div className="grid grid-flow-col h-auto bg-white w-screen shadow ">
      <div className="flex col-span-2  ">
        <FaBars className="h-6 w-6 self-center col-span-1 m-2 cursor-pointer" onClick={() => toggleMenuHandler()} />
        <a href="/">
          <img
            className="h-16 self-center col-span-3 m-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrALTBCvrwh81xkrAfH-XsstbsTKaQv0HiO6ckyuZU&s"
            alt="Logo"
          />
        </a>
      </div>
      <div className=" h-auto m-4 col-span-11">
        <div className="flex h-12 self-center justify-center w-[100%]">
          <input
            type="text"
            className="w-3/5 border-solid border-gray-500 border-2 border-r-0 flex self-center rounded-l-full h-10 p-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            onPointerOut={() => setShowSuggestion(false)}
          />
          <button className="border-solid border-gray-500 border-2 self-center  rounded-r-full h-10 p-1  bg-gray-300 w-20">
            <img
              className="h-8 pl-3 flex"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/search-button-3766671-3146070.png?f=webp"
              alt="Search"
            />
          </button>
        </div>
        {showSuggestion && (
          <div
            className=" fixed flex justify-self-center
        px-4 mx-40 w-[41%] bg-white h-auto border-2 border-gray-500 rounded-xl shadow-sm on-focus"
          >
            <ul className="w-[100%]">
              {suggestions.map((suggestion) => (
                <li
                  className="py-1 shadow-sm p-2 w-[100%] hover:bg-gray-200"
                  key={suggestion}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="h-8 m-4 col-span-2 self-center"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
          alt="user "
        />
      </div>
    </div>
  );
};

export default Header;
