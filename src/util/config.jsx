import axios from "axios";

export const ACCESS_TOKEN = "access_token";
export const USER_LOGIN = "user_login";

export const http = axios.create({
  baseURL: "https://shop.cyberlearn.vn",
  timeout: 30000,
});
