// import axios from 'axios';

// const API_KEY = process.env.REACT_APP_YT_API_KEY;
// export default axios.create({
//   baseURL: 'https://www.googleapis.com/youtube/v3',
//   params: {
//     part: 'snippet',
//     maxResults: 25,
//     type: 'video',
//     key: API_KEY,
//   },
// });

import axios from "axios";

const getApiKey = () => {
  // Retrieve API key from localStorage (simulating user-specific key)
  return localStorage.getItem("userApiKey") || process.env.REACT_APP_YT_API_KEY;
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 25,
    type: "video",
    key: getApiKey(), // Dynamically use user-specific or fallback key
  },
});

// PomPlayer.js
// import axios from "axios";

// const PomPlayer = (accessToken) => {
//   return axios.create({
//     baseURL: "https://www.googleapis.com/youtube/v3",
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//     params: {
//       part: "snippet",
//       maxResults: 25,
//       type: "video",
//     },
//   });
// };

// export default PomPlayer;



// import axios from "axios";

// const PomPlayer = (accessToken) => {
//   return axios.create({
//     baseURL: "https://www.googleapis.com/youtube/v3",
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//     params: {
//       part: "snippet",
//       maxResults: 25,
//       type: "video",
//     },
//   });
// };

// export default PomPlayer;