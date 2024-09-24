import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHome, FaCompass, FaHistory, FaPlayCircle, FaRegClock, FaMusic, FaGamepad, FaTrophy, FaUser } from "react-icons/fa";

const UnCollapsedSideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-[300px] h-[100vh] overflow-y-auto  shadow-lg text-gray-800">
      {/* Main Navigation */}
      <div className="main p-2 border-b-[1px] border-gray-300 ">
        <div className="text-md">
          <Link to="/" className="w-full">
            <div className="p-2 flex items-center gap-4 hover:bg-gray-100 rounded-lg w-full">
              <FaHome className="w-6 h-6 " />
              <span>Home</span>
            </div>
          </Link>

          <Link to="/shorts">
            <div className=" flex items-center gap-2 hover:bg-gray-100 rounded-lg w-full">
              <img
                src="https://storage.googleapis.com/support-forums-api/attachment/thread-192129487-1835648349494362801.png"
                alt="Shorts"
                className="h-10 w-10"
              />
              <span>Shorts</span>
            </div>
          </Link>

          <Link to="/subscriptions">
            <div className="p-2 flex items-center gap-4 hover:bg-gray-100 rounded-lg cursor-pointer">
              <img
                src="https://icons.iconarchive.com/icons/pictogrammers/material/512/youtube-subscription-icon.png"
                alt="Subscriptions"
                className="h-6 w-6"
              />
              <span>Subscriptions</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Library Section */}
      <div className="main p-2 border-b-[1px] border-gray-300">
        <ul className="text-md">
          <div className="p-2 flex items-center gap-4 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaPlayCircle className="w-6 h-6 " />
            <span>Your Videos</span>
          </div>
          <div className="p-2 flex items-center gap-4 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaHistory className="w-6 h-6 " />
            <span>History</span>
          </div>
          <div className="p-2 flex items-center gap-4 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaRegClock className="w-6 h-6 " />
            <span>Watch Later</span>
          </div>
          <div className="p-2 flex items-center gap-4 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaPlayCircle className="w-6 h-6 " />
            <span>Your Clips</span>
          </div>
        </ul>
      </div>

      {/* Subscriptions */}
      <div className="main p-2 border-b-[1px] border-gray-300">
        <h1 className="text-md font-semibold mb-2">Subscriptions</h1>
        <ul className="text-md font-bold">
          <div className="p-2 hover:bg-gray-100 rounded-lg flex gap-2 items-center cursor-pointer"><FaUser />  Channel Name </div>
          <div className="p-2 hover:bg-gray-100 rounded-lg flex gap-2 items-center cursor-pointer"><FaUser />  Channel Name </div>
          <div className="p-2 hover:bg-gray-100 rounded-lg flex gap-2 items-center cursor-pointer"><FaUser />  Channel Name </div>
          <div className="p-2 hover:bg-gray-100 rounded-lg flex gap-2 items-center cursor-pointer"><FaUser />  Channel Name </div>
          <div className="p-2 hover:bg-gray-100 rounded-lg flex gap-2 items-center cursor-pointer"><FaUser />  Channel Name </div>
          <div className="p-2 hover:bg-gray-100 rounded-lg flex gap-2 items-center cursor-pointer"><FaUser />  Channel Name </div>
        </ul>
      </div>

      {/* Explore Section */}
      <div className="main p-2">
        <h1 className="text-md font-semibold mb-2">Explore</h1>
        <ul className="text-md font-bold">
          <div className="p-2 flex items-center gap-4 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaCompass className="w-6 h-6 " />
            <span>Trending</span>
          </div>
          <div className="p-2 flex items-center gap-4 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaMusic className="w-6 h-6 " />
            <span>Music</span>
          </div>
          <div className="p-2 flex items-center gap-4 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaGamepad className="w-6 h-6 " />
            <span>Gaming</span>
          </div>
          <div className="p-2 flex items-center gap-4 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaTrophy className="w-6 h-6 " />
            <span>Sports</span>
          </div>
          <div className="p-2 flex items-center gap-4 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaTrophy className="w-6 h-6 " />
            <span>Sports</span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default UnCollapsedSideBar;
