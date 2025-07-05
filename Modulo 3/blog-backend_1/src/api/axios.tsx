import axios from 'axios';

const axiosInstance = axios.create({
  //baseURL: import.meta.env.VITE_API_URL,
//  baseURL: process.env.REACT_APP_API_URL,
 baseURL: process.env.VITE_API_URL,
});

export default axiosInstance;