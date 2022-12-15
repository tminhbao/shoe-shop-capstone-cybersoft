import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/config";

const initialState = {
  product: null,
  productDetail: null,
  search: '',
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getSearch: (state, action) => {
      state.search = action.payload
    },
    getProduct: (state, action) => {
      state.product = action.payload
    },
    getProductDetail: (state, action) => {
      state.productDetail = action.payload
    }
  },
});

export const { getSearch, getProduct, getProductDetail } = productReducer.actions;

export default productReducer.reducer;

export const getProductApi = () => {
  return async (dispacth) => {
    const result = await http.get('/api/Product')
    const actionProduct = getProduct(result.data.content)
    dispacth(actionProduct)
  }
}
export const getProductDetailApi = (id)=>{
  return async (dispacth)=>{
    const result = await http.get(`/api/Product/getbyid?id=${id}`)
    const actionDetail = getProductDetail(result.data.content)
    dispacth(actionDetail)
  }
}