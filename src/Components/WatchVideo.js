import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./Comment";
import LiveChat from "./LiveChat";
const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex">
      <div className="m-6 p-4">
        <iframe
          className="border-2 border-gray-500 rounded-lg bg-gray-300"
          width="1000"
          height="552"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <CommentContainer />
      </div>
      <div className="my-9 mx-2 w-full border border-black h-[552px] rounded-lg bg-slate-200 overflow-y-scroll flex-row-reverse">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchVideo;
