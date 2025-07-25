import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className="grid grid-cols-1 gap-4 slide-in">
      {videos.map((video) => (
        <VideoItem
          key={video.id.videoId || video.id}
          video={video}
          onVideoSelect={onVideoSelect}
        />
      ))}
    </div>
  );
};

export default VideoList;
