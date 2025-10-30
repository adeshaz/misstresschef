import axios from "axios";

const API = axios.create({
  baseURL: "https://mistresscheffbe.onrender.com/api",
});

// Attach correct token depending on route
API.interceptors.request.use((req) => {
  if (req.url.startsWith("/admin")) {
    const token = localStorage.getItem("adminToken");
    if (token) req.headers.Authorization = `Bearer ${token}`;
  } else {
    const token = localStorage.getItem("userToken");
    if (token) req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;

