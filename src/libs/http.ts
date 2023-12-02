import axios from "axios";
const http = axios.create({
  baseURL: "https://ulitmate-blog-app-production.up.railway.app/api",
  timeout: 10000,
});
export default http;
