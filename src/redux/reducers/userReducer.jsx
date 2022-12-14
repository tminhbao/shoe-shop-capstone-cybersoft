import { createSlice } from "@reduxjs/toolkit";
import { http, USER_LOGIN, ACCESS_TOKEN } from "../../util/config";
import { history } from "../../index";

const initialState = {
  userLogin: null,
  userProfile: null,
  userRegister: null,
  userCart: [], // {product:{id:...},quantity}
  userOrder: [],
  userLikedProduct: [],
  userUnlikedProduct: [],
  userOrderHistory: [],
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
        (item) => item.product.id === id
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
    getUserLikedProductAction: (state, action) => {
      state.userLikedProduct = action.payload;
    },
    getUserUnlikedProductAction: (state, action) => {
      state.userUnlikedProduct = action.payload;
    },
    getUserOrderHistoryAction: (state, action) => {
      state.userOrderHistory = action.payload;
    },
    updateUserProfileAction: (state, action) => {
      state.userProfile = action.payload;
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
  getUserLikedProductAction,
  getUserUnlikedProductAction,
  getUserOrderHistoryAction,
  updateUserProfileAction,
} = userReducer.actions;

export default userReducer.reducer;

// Async Action
export const loginApi = (userLogin) => {
  return async (dispatch) => {
    const result = await http.post("/api/Users/signin", userLogin);
    // C???p nh???t action cho reducer
    const action = loginAction(result.data.content);
    dispatch(action);
    // L??u trong localStorage
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
    // L??u trong localStorage
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
    console.log(result.data.content);
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
    const action = submitOrderAction(data.orderDetail);
    dispatch(action);
  };
};

export const getUserLikedProductApi = () => {
  return async (dispatch) => {
    const result = await http.get("/api/Users/getproductfavorite");
    const action = getUserLikedProductAction(
      result.data.content.productsFavorite
    );
    dispatch(action);
  };
};

export const getUserOrderHistoryApi = () => {
  return async (dispatch) => {
    const result = await http.post("/api/Users/getProfile");
    const action = getUserOrderHistoryAction(result.data.content.ordersHistory);
    dispatch(action);
  };
};

export const updateUserProfileApi = (userUpdate) => {
  return async (dispatch) => {
    const result = await http.post("/api/Users/updateProfile", userUpdate);
    alert(result.data.content);
    const action = updateUserProfileAction(userUpdate);
    dispatch(action);
  };
};

export const changePasswordApi = (newPassword) => {
  return async (dispatch) => {
    const result = await http.post("/api/Users/changePassword", newPassword);
    alert(result.data.content);
    localStorage.removeItem(USER_LOGIN);
    localStorage.removeItem(ACCESS_TOKEN);
    window.location.reload();
    history.push("/login");
  };
};
