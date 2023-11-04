import React from "react";

const SuggestionVideoCard = ({ info }) => {
  return (
    <div className="flex shadow-lg" >
      <img
        className="rounded-sm h-[106px] my-3 mx-2 align-middle"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt="Video"
      />
      <div className="p-2">
        <h1 className="font-semibold text-[14px]">{info?.snippet?.title}</h1>
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
        <div>
          <p className="text-[14px] ">{info?.statistics?.viewCount} views</p>
        </div>
      </div>
    </div>
  );
};

export default SuggestionVideoCard;
