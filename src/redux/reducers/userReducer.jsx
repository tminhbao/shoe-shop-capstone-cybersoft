import { createSlice } from "@reduxjs/toolkit";
import { http, USER_LOGIN, ACCESS_TOKEN } from "../../util/config";
import { history } from "../../index";

const initialState = {
  userLogin: JSON.parse(localStorage.getItem(USER_LOGIN)) || null,
  userProfile: null,
  userRegister: null,
  userCart: [],
  userOrder: [],
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
    getUserCartAction: (state, action) => {
      state.userCart.push(action.payload);
    },
    updateCartAction: (state, action) => {
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
    deleteProductCartAction: (state, action) => {
      const { id } = action.payload;
      state.userCart = state.userCart.filter((item) => item.id !== id);
    },
    submitOrderAction: (state, action) => {
      state.userOrder.push(action.payload);
    },
  },
});

export const {
  loginAction,
  getProfileAction,
  registerAction,
  getUserCartAction,
  updateCartAction,
  deleteProductCartAction,
  submitOrderAction,
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
    console.log(result.data.content);
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

export const submitOrderApi = (data) => {
  return async (dispatch) => {
    const result = await http.post("/api/Users/order", data);
    alert(result.data.content);
    const action = submitOrderAction(result.data.content);
    dispatch(action);
  };
};
