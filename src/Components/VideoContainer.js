import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_APIS } from "../utils/Config";
import { VideoCard, AdVideo } from "./VideoCard";
import { Link } from "react-router-dom";
import ButtonList from "./ButtonList";
import { Shimmer } from "./Shimmer";
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
      {videos.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-evenly scroll-auto">
          {<AdVideo info={videos[0]} />}
          {videos.map((video) => (
            <Link to={"/watch?v=" + video.id} key={video.id}>
              <VideoCard key={video.id} info={video} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
