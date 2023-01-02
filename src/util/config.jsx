import axios from "axios";
import { isExpired } from "react-jwt";
import { history } from "../index";
export const ACCESS_TOKEN = "access_token";
export const USER_LOGIN = "user_login";
const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjE5LzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDQ1NDQwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0NjAyMDAwfQ.49m9-EoDr6zr7UOk_79hfcvJWKI_s0Wy_g40ossfl9c";
export const ITEM_PER_PAGE = 9;
//Cấu hình cho tất các request api

export const http = axios.create({
  baseURL: "https://shop.cyberlearn.vn",
  timeout: 30000,
});

http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
      charset: "utf-8",
      Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      TokenCybersoft: TOKEN_CYBERSOFT,
    };
    return config;
  },
  (err) => Promise.reject(err)
);

// Cấu hình cho tất cả các response api

http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response?.status === 400 || err.response?.status === 404) {
      //Lỗi do tham số => backend trả về 400 hoặc 404 mình sẽ xử lý
      alert("tham số không hợp lệ !");
      //chuyển hướng về home
      history.push("/");
    }
    if (err.response?.status === 401 || err.response.status === 403) {
      const isMyTokenExpired = isExpired(localStorage.getItem("access_token"));
      console.log(localStorage.getItem("access_token"));
      console.log("isMyTokenExpired", isMyTokenExpired);
      if (isMyTokenExpired) {
        alert("Hết phiên đăng nhập yêu cầu đăng nhập lại !");
        localStorage.removeItem(USER_LOGIN);
        localStorage.removeItem(ACCESS_TOKEN);
        //Chuyển hướng trang dạng f5
        window.location.href = "/login";
      }
      history.push("/login");
    }
    return Promise.reject(err);
  }
);
