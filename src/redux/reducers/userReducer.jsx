import { createSlice } from "@reduxjs/toolkit";
import { http, USER_LOGIN, ACCESS_TOKEN } from "../../util/config";
import { history } from "../../index";

const initialState = {
  userLogin: JSON.parse(localStorage.getItem(USER_LOGIN)) || null,
  userProfile: null,
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
  },
});

export const { loginAction, getProfileAction } = userReducer.actions;

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

export const getProfileApi = () => {
  return async (dispatch) => {
    const result = await http.post("/api/Users/getProfile");
    const action = getProfileAction(result.data.content);
    dispatch(action);
  };
};
