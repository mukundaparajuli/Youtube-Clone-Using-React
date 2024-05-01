import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UnCollapsedSideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="w-[400px] h-[100vh] overflow-auto shadow-lg">
      <div className="main p-2 border-b-2  ">
        <ul className=" text-lg ">

          <Link to="/">
            <li className="p-2 flex items-center gap-4">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-11 h-11 p-2">
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
              </div>
              <div>Home</div>
            </li>
          </Link>


          <li className="p-2 flex items-center gap-4">
            <div><img src="https://storage.googleapis.com/support-forums-api/attachment/thread-192129487-1835648349494362801.png" alt="" srcset="" className="h-12" />
            </div>
            <div>Shorts</div>
          </li>


          <li className="p-2 flex items-center gap-4">
            <div><img src="https://icons.iconarchive.com/icons/pictogrammers/material/512/youtube-subscription-icon.png" alt="" srcset="" className="h-6 m-2" />
            </div>
            <div>Subscriptions</div>
          </li>

        </ul>
      </div>


      <div className="main p-2">
        <h1 className="text-xl">You &gt;</h1>
        <ul className="text-md">
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
