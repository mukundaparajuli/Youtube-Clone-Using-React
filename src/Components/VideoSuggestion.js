import React, { useEffect, useState } from "react";
import SuggestionVideoCard from "./SuggestionVideoCard";
import { YOUTUBE_VIDEOS_APIS } from "../utils/Config";
import { Link } from "react-router-dom";

const VideoSuggestion = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_APIS);
    const json = await data.json();
    setVideos(json.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div>
      {videos.map((video, id) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
            <SuggestionVideoCard info={video}/>
        </Link>
      ))}
    </div>
  );
};

export default VideoSuggestion;
