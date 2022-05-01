import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://fakestoreapi.com/products";
// const APIID = `https://fakestoreapi.com/products${id}`;

export const FetchAsyncProduct = createAsyncThunk(
  "products/FetchAsyncProducts",
  async () => {
    const responce = await axios
      .get(API)
      .catch((err) => console.log(err.message));
    return responce.data;
  }
);

export const FetchProductDetail = createAsyncThunk(
  "products/FetchProductDetails",
  async (id) => {
    const responce = await axios
      .get(`https://fakestoreapi.com/products${id}`)
      .catch((err) => console.log(err.message));
    return responce.data;
  }
);

const initialState = {
  productData: [],
  choosenProductBasket: [],
  choosenProductDetail: {},
  error: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.choosenProductBasket = [
        ...state.choosenProductBasket,
        action.payload,
      ];
    },
  },
  extraReducers: {
    [FetchAsyncProduct.pending]: () => {
      console.log("loading");
    },
    [FetchAsyncProduct.fulfilled]: (state, action) => {
      const fullData = action.payload.map((item) => {
        return {
          ...item,
          count: 100,
        };
      });
      return { ...state, productData: fullData };
    },
    [FetchAsyncProduct.rejected]: (state) => {
      console.log("network error");
      return { ...state, error: "network error" };
    },
    [FetchProductDetail.fulfilled]: (state, action) => {
      return { ...state, choosenProductDetail: action.payload };
    },
  },
});

export const { addToBasket } = productSlice.actions;
export default productSlice.reducer;
