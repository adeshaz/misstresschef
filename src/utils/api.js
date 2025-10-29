import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5900/api",
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

