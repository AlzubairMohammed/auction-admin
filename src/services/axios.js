import axios from 'axios';

const axiosInstance = axios.create({
 baseURL: 'http://localhost:7070/api/v1',
 timeout: 5000,
 headers: {
  // 'Content-Type': 'application/json',
  'Content-Type': 'multipart/form-data',
 },
});

export default axiosInstance;
