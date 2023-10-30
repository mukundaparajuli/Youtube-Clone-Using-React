import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_APIS } from "../utils/Config";
import { VideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import ButtonList from "./ButtonList";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_APIS);
    const json = await data.json();
    setVideos(json.items);
    console.log(json.items);
  };
  return (
    <div>
      <ButtonList />
      <div className="flex flex-wrap justify-evenly scroll-auto">
        {videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
