import React from "react";
import ButtonList from "./ButtonList";
// import VideoContainer from "./VideoContainer";
// import WatchVideo from "./WatchVideo";
import { Outlet } from "react-router-dom";

const MainBody = () => {
  return (
    <div className="overflow-auto w-[1800px] h-[100vh]">
      <Outlet />
    </div>
  );
};

export default MainBody;
