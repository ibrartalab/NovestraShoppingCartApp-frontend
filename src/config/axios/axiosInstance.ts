import axios, { type AxiosInstance } from "axios";
import { secrets } from "../secrets";

const { BACKEND_URL } = secrets;

// Create an Axios instance for API requests
// This instance can be customized with interceptors, base URL, and headers
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BACKEND_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*",
  }, // This is the correct way to send cookies/auth headers
});

export const axiosPrivate: AxiosInstance = axios.create({
  baseURL: BACKEND_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true, // This is the correct way to send cookies/auth headers
});    

export default axiosPrivate;
// export default axiosInstance;
