import axios from "axios";

const BASE_URL = "https://662119213bf790e070b1d0e4.mockapi.io/";

const TIMEOUT = 1000 * 30;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

export default instance;
