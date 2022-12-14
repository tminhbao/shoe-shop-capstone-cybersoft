import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/config";

const initialState = {
  product: null,
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
    }
  },
});

export const { getSearch, getProduct } = productReducer.actions;

export default productReducer.reducer;

export const getProductApi = () => {
  return async (dispacth) => {
    const result = await http.get('/api/Product')
    const actionProduct = getProduct(result.data.content)
    dispacth(actionProduct)
  }
}