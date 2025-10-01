import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/features/products/productsSlice";
import cartReducer from "@/features/cart/cartSlice";
import { loadState, saveState } from "@/utils/localStorage";

const preloadedCart = loadState<{ items: any[] }>("cart"); // safe: loadState guards window

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  preloadedState: {
    cart: preloadedCart ?? { items: [] },
  },
});

// persist cart to localStorage
store.subscribe(() => {
  saveState('cart', store.getState().cart);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;