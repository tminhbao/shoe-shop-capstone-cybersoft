import { createSlice } from "@reduxjs/toolkit";
import { http, USER_LOGIN, ACCESS_TOKEN } from "../../util/config";
import { history } from "../../index";
import axios from "axios";

const initialState = {
  userLogin: JSON.parse(localStorage.getItem(USER_LOGIN)) || null,
  userProfile: null,
  userRegister: null,
  userCart: [
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      deleted: false,
      categories:
        '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[11,9,15,16]",
      feature: false,
      image: "https://shop.cyberlearn.vn/images/nike-air-max-270-react.png",
    },
  ],
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.userLogin = action.payload;
    },
    getProfileAction: (state, action) => {
      state.userProfile = action.payload;
    },
    registerAction: (state, action) => {
      state.userRegister = action.payload;
    },
  },
});

export const { loginAction, getProfileAction, registerAction } =
  userReducer.actions;

export default userReducer.reducer;

// Async Action
export const loginApi = (userLogin) => {
  return async (dispatch) => {
    const result = await http.post("/api/Users/signin", userLogin);
    // Cập nhật action cho reducer
    const action = loginAction(result.data.content);
    dispatch(action);
    // Lưu trong localStorage
    localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.content));
    localStorage.setItem(ACCESS_TOKEN, result.data.content.accessToken);
    const actionGetProfile = getProfileAction();
    dispatch(actionGetProfile);
    history.push("/profile");
  };
};

export const loginFacebookApi = (facebookToken) => {
  return async (dispatch) => {
    const result = await http.post("/api/Users/facebooklogin", facebookToken);
    // const result = await axios({
    //   url: "https://shop.cyberlearn.vn/api/Users/facebooklogin",
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     charset: "utf-8",
    //   },
    //   facebookToken,
    // });
    console.log(result.data);
    const action = loginAction(result.data.content);
    dispatch(action);
    // Lưu trong localStorage
    localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.content));
    localStorage.setItem(ACCESS_TOKEN, result.data.content.accessToken);
    const actionGetProfile = getProfileAction();
    dispatch(actionGetProfile);
    history.push("/profile");
  };
};

export const getProfileApi = () => {
  return async (dispatch) => {
    const result = await http.post("/api/Users/getProfile");
    const action = getProfileAction(result.data.content);
    dispatch(action);
  };
};

export const registerApi = (userRegister) => {
  return async (dispatch) => {
    const result = await http.post("/api/Users/signup", userRegister);
    console.log(result.data.content);
    const action = registerAction(result.data.content);
    dispatch(action);
    history.push("/login");
  };
};
