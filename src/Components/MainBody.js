import React from "react";
import { Outlet } from "react-router-dom";

const MainBody = () => {
  return (
    <div className="overflow-auto w-[1800px] h-[100vh]">
      <Outlet />
    </div>
  );
};

export default MainBody;
