import axios from 'axios';

const requestID = () => Math.random().toString(36).substring(2, 15);
const instance = axios.create({
    baseURL: ,
    timeout: 10000,
    headers: { 
        Accept: "*/*",
    },
});

instance.interceptors.request.use(
    (config) => {
        config.headers['X-Request-ID'] = requestID();

        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token invalid/expired → redirect to login
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;