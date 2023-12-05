import axios from "axios";
const http = axios.create({
  baseURL: "https://ulitmate-blog-app-production.up.railway.app/api",
  timeout: 10000,
});
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default http;
