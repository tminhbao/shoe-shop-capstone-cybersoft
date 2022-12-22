import { createSlice } from "@reduxjs/toolkit";
import { http, USER_LOGIN, ACCESS_TOKEN } from "../../util/config";
import { history } from "../../index";

const initialState = {
  userLogin: null,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const { loginAction } = userReducer.actions;

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
    localStorage.setItem(
      ACCESS_TOKEN,
      JSON.stringify(result.data.content.accessToken)
    );
    history.push("/profile");
  };
};
