import axios from 'axios';

const API_KEY = process.env.REACT_APP_POM_PLAYER_API_KEY;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 50,
    key: API_KEY,
  },
});