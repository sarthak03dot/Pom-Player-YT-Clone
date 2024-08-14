// import React from 'react';
// import VideoItem from './VideoItem';

// const VideoList = ({videos , onVideoSelect}) => {
//     const renderVideos = videos.map((videos) => {
//         return(
//             <VideoItem key={videos.id.videoId} video = {videos} onVideoSelect= {onVideoSelect} />
//         );
//     });
//     return(
//         <div>{renderVideos}</div>
//     );
// }


// export default VideoList;



import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderVideos = videos.map((video) => {
    return (
      <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
    );
  });

  return <div>{renderVideos}</div>;
};

export default VideoList;