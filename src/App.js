import React, { useState, useEffect } from 'react';
import PomPlayer from './PomPlayer';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails'; // Fixed import
import './App.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('Nature');
  }, []);

  const onTermSubmit = async (term) => {
    try {
      const response = await PomPlayer.get('/search', {
        params: {
          q: term,
        },
      });
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div>
      <SearchBar onFormSubmit={onTermSubmit} />
      <div>
        <VideoDetails video={selectedVideo} />
        <VideoList videos={videos} onVideoSelect={onVideoSelect} />
      </div>
    </div>
  );
};

export default App;