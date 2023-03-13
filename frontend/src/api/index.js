import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("nykaProfile")) {
    const token = localStorage.getItem("nykaProfile");
    req.headers.Authorization = `Bearer ${JSON.parse(token).token}`;
  }
  return req;
});

export const getHome = () => API.get("/gethome").then((res) => res.data);
export const postUser = (data) => API.post("/signup", data).then((res) => res);
export const loginUser = (data) => API.post("/signin", data).then((res) => res);
