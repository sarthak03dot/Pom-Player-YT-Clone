import React, { useState, useEffect } from "react";
import { decode } from "html-entities";

const VideoDetails = React.memo(({ video }) => {
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (video) {
      setLoading(true);
      // Fetch likes
      fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${video.id.videoId || video.id}&key=YOUR_API_KEY`)
        .then(response => response.json())
        .then(data => {
          if (data.items && data.items.length > 0) {
            setLikes(data.items[0].statistics.likeCount);
          }
        })
        .catch(error => console.error("Error fetching likes:", error));

      // Fetch comments
      fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${video.id.videoId || video.id}&maxResults=10&key=YOUR_API_KEY`)
        .then(response => response.json())
        .then(data => {
          if (data.items) {
            setComments(data.items.map(item => item.snippet.topLevelComment.snippet));
          }
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching comments:", error);
          setLoading(false);
        });
    }
  }, [video]);

  if (!video) return <div className="text-center py-10"><div className="spinner mx-auto"></div></div>;

  const videoId = video.id.videoId || video.id;
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`; // Autoplay on load
  const title = decode(video.snippet.title);
  const description = decode(video.snippet.description);
  const channelTitle = video.snippet.channelTitle;
  const publishDate = new Date(video.snippet.publishedAt).toLocaleDateString();

  const shareVideo = () => {
    navigator.clipboard.writeText(`https://www.youtube.com/watch?v=${videoId}`);
    alert("Video link copied to clipboard!");
  };

  return (
    <div className="fade-in">
      <div className="relative aspect-video mb-4 rounded-xl overflow-hidden shadow-2xl">
        <iframe src={videoSrc} title={title} allowFullScreen className="w-full h-full" />
      </div>
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg slide-in">
        <div className="flex justify-between items-start mb-3">
          <h4 className="font-bold text-xl">{title}</h4>
          <button onClick={shareVideo} className="text-gray-300 hover:text-red-500 transition">
            <i className="fa-solid fa-share mr-2"></i>Share
          </button>
        </div>
        <div className="flex justify-between text-sm text-gray-400 mb-3">
          <span><i className="fa-solid fa-circle-user mr-2"></i>{channelTitle}</span>
          <span><i className="fa-regular fa-clock mr-2"></i>{publishDate}</span>
        </div>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="mb-4">
          <span className="text-gray-400 text-sm"><i className="fa-solid fa-thumbs-up mr-2"></i>{likes.toLocaleString()} Likes</span>
        </div>
        <div className="mt-4">
          <h5 className="font-semibold text-lg mb-3">Comments</h5>
          {loading ? (
            <div className="text-center py-4"><div className="spinner mx-auto"></div></div>
          ) : comments.length > 0 ? (
            <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
              {comments.map((comment, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded-lg slide-in">
                  <p className="text-sm text-gray-300">{comment.textDisplay}</p>
                  <p className="text-xs text-gray-500 mt-1">{comment.authorDisplayName} - {new Date(comment.publishedAt).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No comments available.</p>
          )}
        </div>
      </div>
    </div>
  );
});

export default VideoDetails;