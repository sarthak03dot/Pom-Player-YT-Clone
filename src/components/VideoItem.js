import React from 'react';

const VideoItem = React.memo(({ video, onVideoSelect }) => {
  return (
    <div
      className="card bg-gray-900 rounded-xl overflow-hidden hover-glow slide-in"
      onClick={() => onVideoSelect(video)}
      style={{ cursor: 'pointer' }}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        className="w-full h-48 object-cover"
        alt={video.snippet.title}
      />
      <div className="p-4">
        <h6 className="font-semibold text-sm">{video.snippet.title}</h6>
        <p className="text-gray-400 text-xs mt-1">{video.snippet.channelTitle}</p>
      </div>
    </div>
  );
});

export default VideoItem;