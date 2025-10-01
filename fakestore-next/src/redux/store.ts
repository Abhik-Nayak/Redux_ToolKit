import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/features/products/productsSlice";
import { loadState, saveState } from "@/utils/localStorage";

const preloadedCart = loadState<{ items: any[] }>("cart"); // safe: loadState guards window

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
//   preloadedState: {
//     ...(preloadedCart ? { cart: preloadedCart } : {}),
//   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;