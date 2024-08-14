import React from 'react';
import { useParams } from 'react-router-dom';

const VideoDetails = ({ video }) => {
  const { id } = useParams();

  if (!video) return <div>Loading ...</div>;

  return (
    <div>
      <iframe
        title='video player'
        width='100%'
        height='400px'
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameBorder='0'
      />
      <h4>{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetails;