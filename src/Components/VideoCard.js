import React from "react";
import { FaUser } from "react-icons/fa";
import { timeSince } from "../utils/timeSince";
import { formatViews } from "../utils/formatViews";

// YouTube Video Card
export const VideoCard = ({ info }) => {
  return (
    <div className="w-[310px] h-[280px] m-1 my-2 rounded-sm shadow-sm cursor-pointer">
      <img
        className="rounded-md w-full h-[160px] object-cover"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt="Video"
      />
      <div className="gap-1 px-2">
        <div className="grid grid-cols-6 items-center justify-center p-1">
          <FaUser className="col-span-1 rounded-full border-black border pt-1 h-8 w-8" />
          <div className="col-span-5">
            <h1 className="font-semibold text-[16px] leading-tight font-roboto">
              {info?.snippet?.title.length <= 50
                ? info.snippet.title
                : info.snippet.title.slice(0, 50) + "..."}
            </h1>
          </div>
        </div>
        <div className="mx-1">
          <div className="flex items-center space-x-2">
            <p className="text-[14px] font-semibold text-gray-500 font-roboto">
              {info?.snippet?.channelTitle.length <= 40
                ? info.snippet.channelTitle
                : info.snippet.channelTitle.slice(0, 40) + "..."}
            </p>
          </div>
        </div>
        <div className="bottom-4">
          <p className="text-[14px] text-gray-500 font-roboto">
            {formatViews(info?.statistics?.viewCount.toLocaleString())} • {timeSince(info?.snippet?.publishedAt.split("T")[0])}
          </p>
        </div>
      </div>
    </div>
  );
};

// YouTube Ad Video Card
export const AdVideo = ({ info }) => {
  return (
    <div className="w-[310px] h-[280px] m-1 my-2 rounded-md shadow-sm border-gray-300 border-4  p-2">
      <img
        className="rounded-md w-full h-[160px] object-cover"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt="Video"
      />
      <div className="gap-1">
        <div className="grid grid-cols-6 items-center justify-center p-1">
          {/* <FaUser className="col-span-1 rounded-full border-black border pt-1 h-8 w-8" /> */}
          <div className="col-span-5">
            <h1 className="font-semibold text-[16px] leading-tight font-roboto">
              {info?.snippet?.title.length <= 50
                ? info.snippet.title
                : info.snippet.title.slice(0, 50) + "..."}
            </h1>
          </div>
        </div>

        <div className="bottom-4">
          <p className="text-gray-600 text-xl font-roboto font-bold ">
            Advertisement
          </p>
        </div>
      </div>
    </div>
  );
};
