import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) return <div>Loading ...</div>;
  // const videoId = video.id.videoId || video.id;
  return (
    <div>
      <iframe
        title="video player"
        width="100%"
        height="600px"
        src={`https://www.youtube.com/embed/${video.id.videoId || video.id}`}
        allowFullScreen
      />
      <h4>{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetails;
