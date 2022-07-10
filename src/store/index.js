import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slices'
import isLoading from './slices/isLoading.slices'
import cart from "./slices/cart.slices"

export default configureStore({
  reducer: {
    products,
    isLoading,
    cart
  }
})