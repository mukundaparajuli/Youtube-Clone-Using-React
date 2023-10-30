import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UnCollapsedSideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="w-[400px] h-[100vh] overflow-auto shadow-lg">
      <div className="main p-2 border-b-4 border-solid border-black">
        <ul className="font-bold">
          <Link to="/">
            <li className="p-2">Home</li>
          </Link>
          <li className="p-2">Shorts</li>
          <li className="p-2">Trending</li>
          <li className="p-2">Subscription</li>
        </ul>
      </div>
      <div className="main p-2 border-b-4 border-solid border-black">
        <h1 className="text-[22px]">You &gt;</h1>
        <ul className="font-bold">
          <li className="p-2">Your Channel</li>
          <li className="p-2">History</li>
          <li className="p-2">Library</li>
          <li className="p-2">Your Videos</li>
          <li className="p-2">Watch Later</li>
          <li className="p-2">Your Clips</li>
        </ul>
      </div>
      <div className="main p-2 border-b-4 border-solid border-black">
        <h1 className="text-[22px]">Subscriptions</h1>
        <ul className="font-bold">
          <li className="p-2">Random Channel</li>
          <li className="p-2">Random Channel</li>
          <li className="p-2">Random Channel</li>
          <li className="p-2">Random Channel</li>
          <li className="p-2">Random Channel</li>
          <li className="p-2">Random Channel</li>
          <li className="p-2">Random Channel</li>
          <li className="p-2">Random Channel</li>
        </ul>
      </div>
      <div className="main p-2 border-b-4 border-solid border-black">
        <h1 className="text-[22px]">Explore</h1>
        <ul className="font-bold">
          <li className="p-2">Trending</li>
          <li className="p-2">Music</li>
          <li className="p-2">Gaming</li>
          <li className="p-2">Sports</li>
        </ul>
      </div>
    </div>
  );
};

export default UnCollapsedSideBar;
