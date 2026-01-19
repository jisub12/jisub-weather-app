import axios from "axios";

export const http = axios.create({
  baseURL: "https://api.openweathermap.org",
  timeout: 10_000,
}); 