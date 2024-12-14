import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 5000,
});

// Add an interceptor to include the auth token if it's available
httpClient.interceptors.request.use((config) => {

  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default httpClient;
