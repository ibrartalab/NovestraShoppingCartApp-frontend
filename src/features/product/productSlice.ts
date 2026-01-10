import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "./types";
import * as productAPI from "../../api/productAPI";
import type { AxiosInstance } from "axios";

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

// 1. Fetch Products Thunk
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await productAPI.getProducts();
      // Return ONLY the data (the array of products)
      return response;
    } catch (error: any) {
      // Extract a serializable string for the error
      return rejectWithValue(
        error.response?.data || "Failed to fetch products"
      );
    }
  }
);

// 2. Create Product Thunk
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (
    { payload, axiosPrivate }: { payload: Product; axiosPrivate: AxiosInstance },
    { rejectWithValue }
  ) => {
    try {
      const response = await productAPI.createProduct(payload, axiosPrivate);
      // Return ONLY the new product object
      return response.data;
    } catch (error: any) {
      // Extract the specific error message from your .NET backend
      const errorMessage =
        error.response?.data?.title ||
        error.message ||
        "Failed to create product";
      return rejectWithValue(errorMessage);
    }
  }
);

// 3. The Slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Regular reducers for manual updates if needed
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get Products
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as string) || "An unexpected error occurred";
      })
      // Create Product
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to create product";
      });
  },
});

export default productSlice.reducer;
export const { setProducts } = productSlice.actions;
