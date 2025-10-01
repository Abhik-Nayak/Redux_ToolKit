import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { productsApi } from "@/api/productsApi";
import { Product } from "./types";

interface ProductState {
  items: Product[];
  selectedItem: Product;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductState = {
  items: [],
  selectedItem: {} as Product,
  status: "idle",
  error: null,
};

//Thunk to fetch all product
export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    return await productsApi.getAll();
  }
);

//Thunk to fetch elected product
export const fetchProductById = createAsyncThunk<Product, number>(
  "product/fecthproductById",
  async (id) => {
    return await productsApi.getById(id);
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearSelected: (state) => {
      state.selectedItem = {} as Product;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = "succeeded";
          state.items = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch products";
      })

      //Fetch product by Id
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedItem = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "something went wrong";
      });
  },
});

export const { clearSelected } = productsSlice.actions;
export default productsSlice.reducer;
