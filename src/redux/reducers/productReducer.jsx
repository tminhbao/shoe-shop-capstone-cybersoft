import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/config";

const initialState = {
  productPaging: null,
  product: null, // array
  productDetail: null,
  search: "",
  productSearch: null, // array
  totalQuantity: 0,
  numberQuantity: 1,
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getSearch: (state, action) => {
      state.search = action.payload;
    },
    getProductPaging: (state, action) => {
      state.productPaging = action.payload;
    },
    getProduct: (state, action) => {
      state.product = action.payload;
    },
    getProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
    getProductSearch: (state, action) => {
      state.productSearch = action.payload;
    },
  },
});

export const { getSearch, getProduct, getProductDetail, getProductSearch, getProductPaging } =
  productReducer.actions;

export default productReducer.reducer;

export const getProductApi = () => {
  return async (dispacth) => {
    const result = await http.get("/api/Product");
    const actionProduct = getProduct(result.data.content);
    dispacth(actionProduct);
  };
};
export const getProductDetailApi = (id) => {
  return async (dispacth) => {
    const result = await http.get(`/api/Product/getbyid?id=${id}`);
    const actionDetail = getProductDetail(result.data.content);
    dispacth(actionDetail);
  };
};

export const getProductDetailPagingApi = (pageIndex, pageSize) => {
  return async (dispatch) => {
    const result = await http.get(
      `/api/Product/getpaging?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
    const actionProduct = getProductPaging(result.data.content.items);
    dispatch(actionProduct);
  };
};
