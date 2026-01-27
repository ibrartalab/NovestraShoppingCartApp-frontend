import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productsReducer from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlice";

// 1. Combine all your reducers into one
const appReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducer,
});

// 2. Create a Root Reducer to intercept the logout action
const rootReducer = (state: any, action: any) => {
  // If the action type is auth/logout, reset the entire state tree to undefined
  if (action.type === "auth/logout") {
    state = undefined;
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
  