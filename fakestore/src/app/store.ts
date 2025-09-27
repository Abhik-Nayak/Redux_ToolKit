import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";
import { loadState, saveState } from "../utils/localStorage";

const persistedCart = loadState<{ items: any[] }>("cart");

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  preloadedState: {
    cart: persistedCart ?? { items: [] }, //default is nothing saved
  },
});

// Persist cart on every state change
store.subscribe(() => {
  saveState('cart', store.getState().cart);
});

// These two types let you have nice TS support in your hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
