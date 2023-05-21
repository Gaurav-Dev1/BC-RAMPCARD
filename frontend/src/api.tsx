import axios from "axios";
import { REACT_MOCK_API_URL } from "./constants/constant";

const api = axios.create({
//   baseURL: process.env.REACT_APP_MOCK_API_URL,
  baseURL: REACT_MOCK_API_URL
});

export default api;
