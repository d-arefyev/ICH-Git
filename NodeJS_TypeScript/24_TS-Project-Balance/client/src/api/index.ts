import axios from "axios";

export const $api = axios.create({ baseURL: "http://localhost:3000" });

// interceptor
$api.interceptors.request.use((request) => {
  // const token = sessionStorage.getItem("token");
  const token = "123";
  request.headers.Authorization = "Bearer " + token;
  return request;
});
