import React from "react";

export const VideoCard = ({ info }) => {
  return (
    <div className="w-[290px] h-[320px] m-2 rounded-lg shadow-lg">
      <img
        className="rounded-2xl p-1"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt="Video"
      />
      <h1 className="font-bold p-1">{info?.snippet?.title}</h1>
      <div className="m-1">
        <div className="flex self-center">
          <img
            className="h-[14px] self-center"
            src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
            alt="User"
          />
          <p className="text-[14px] font-semibold">
            {info?.snippet?.channelTitle}
          </p>
        </div>
      </div>
      <div>
        <p className="text-[14px] ">{info?.statistics?.viewCount} views</p>
      </div>
    </div>
  );
};
