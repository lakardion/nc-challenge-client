import axios from 'axios';
const axiosInstance = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
};
export default axiosInstance();
