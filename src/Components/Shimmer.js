import React from "react";

export const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-evenly">
      {Array(50)
        .fill("")
        .map((e, index) => (
          <div
            className="w-[290px] h-[320px] m-2  rounded-lg justify-center px-2 border shadow-lg bg-gray-200 "
            key={index}
          >
            <div className="rounded-2xl p-1 bg-gray-400 h-[160px] w-[270px] my-4 flex justify-center"></div>
            <div className="rounded-2xl p-1 bg-gray-400 h-[10px] w-[270px] my-4 flex justify-center"></div>
            <div className="rounded-2xl p-1 bg-gray-400 h-[10px] w-[270px] my-4 flex justify-center"></div>
            <div className="rounded-2xl p-1 bg-gray-400 h-[10px] w-[270px] my-4 flex justify-center"></div>
            <div className="rounded-2xl p-1 bg-gray-400 h-[10px] w-[270px] my-4 flex justify-center"></div>
          </div>
        ))}
    </div>
  );
};
