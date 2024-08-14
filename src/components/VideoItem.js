import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className='video-item' onClick={() => onVideoSelect(video)}>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <div>
        <h4 className='title'>{video.snippet.title}</h4>
      </div>
    </div>
  );
};

export default VideoItem;