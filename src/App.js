import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import Footer from "./components/Footer";
import VideoItem from "./components/VideoItem";
import PomPlayer from "./PomPlayer";
const App = () => {
  const items = [
    "Dog",
    "Cat",
    "Elephant",
    "Monkey",
    "Tom and Jerry",
    "Bablu Dablu",
    "Jungle Book",
    "Pakadan Pakdai",
    "Transformer Cartoon",
    "Chhota Bheem",
    "React",
    "Nextjs",
    "Mern",
  ];
  const categories = ["All", "Cartoons", "Tutorials", "Music"];

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("videoHistory")) || []
  );
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem("searchHistory")) || []
  );
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const idx = Math.floor(Math.random() * items.length);
    onTermSubmit(items[idx]);
  }, []);

  useEffect(() => {
    localStorage.setItem("videoHistory", JSON.stringify(history));
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [history, searchHistory]);

  const onTermSubmit = async (term) => {
    try {
      const response = await PomPlayer.get("/search", { params: { q: term } });
      setVideos(response.data.items);
      if (response.data.items[0]) {
        setSelectedVideo(response.data.items[0]);
        setHistory((prev) => [
          response.data.items[0],
          ...prev
            .filter((v) => v.id.videoId !== response.data.items[0].id.videoId)
            .slice(0, 4),
        ]);
      }
      setSearchHistory((prev) => [
        term,
        ...prev.filter((t) => t !== term).slice(0, 4),
      ]);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
    setHistory((prev) => [
      video,
      ...prev.filter((v) => v.id.videoId !== video.id.videoId).slice(0, 4),
    ]);
    const videoElement = document.querySelector(
      `iframe[src*="youtube.com/embed/${video.id.videoId}"]`
    );
    if (videoElement) {
      videoElement.src = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.className = isDarkTheme
      ? "bg-white text-black min-h-screen"
      : "bg-black text-white min-h-screen";
  };

  return (
    <div
      className={isDarkTheme ? "bg-black text-white" : "bg-white text-black"}
    >
      <SearchBar
        onFormSubmit={onTermSubmit}
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
      />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 mb-6 slide-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                onTermSubmit(
                  category === "All"
                    ? items[Math.floor(Math.random() * items.length)]
                    : category
                );
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                selectedCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              } transition`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <VideoDetails video={selectedVideo} />
          </div>
          <div>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
            {history.length > 0 && (
              <div className="mt-6 slide-in">
                <h5 className="font-semibold text-lg mb-3">Watch History</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {history.map((video) => (
                    <VideoItem
                      key={video.id.videoId || video.id}
                      video={video}
                      onVideoSelect={onVideoSelect}
                    />
                  ))}
                </div>
              </div>
            )}
            {searchHistory.length > 0 && (
              <div className="mt-6 slide-in">
                <h5 className="font-semibold text-lg mb-3">Search History</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {searchHistory.map((term, index) => (
                    <button
                      key={index}
                      onClick={() => onTermSubmit(term)}
                      className="bg-gray-800 text-gray-300 hover:bg-gray-700 rounded-lg p-2 text-sm transition"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
