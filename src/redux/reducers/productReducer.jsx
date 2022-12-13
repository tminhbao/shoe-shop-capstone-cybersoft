import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  search: 'aa',
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getSearch: (state, action) => {
      state.search = action.payload
    }
  },
});

export const { getSearch } = productReducer.actions;

export default productReducer.reducer;