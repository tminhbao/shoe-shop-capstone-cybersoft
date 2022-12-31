import { createSlice } from "@reduxjs/toolkit";
import { http, USER_LOGIN, ACCESS_TOKEN } from "../../util/config";
import { history } from "../../index";

const initialState = {
  userLogin: JSON.parse(localStorage.getItem(USER_LOGIN)) || null,
  userProfile: null,
  userRegister: null,
  userCart: [],
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
    getUserCart: (state, action) => {
      state.userCart.push(action.payload);
    },
    updateCart: (state, action) => {
      const { id, value } = action.payload;
      const updateProductIndex = state.userCart.findIndex(
        (item) => item.id === id
      );
      if (state.userCart[updateProductIndex].quantity === 1 && value === -1) {
        state.userCart = state.userCart.filter((item) => item.id !== id);
      } else {
        state.userCart[updateProductIndex].quantity += value;
      }
    },
    deleteProductCart: (state, action) => {
      const { id } = action.payload;
      state.userCart = state.userCart.filter((item) => item.id !== id);
    },
  },
});

export const {
  loginAction,
  getProfileAction,
  registerAction,
  getUserCart,
  updateCart,
  deleteProductCart,
} = userReducer.actions;

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
