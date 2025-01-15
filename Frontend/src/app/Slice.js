import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { SellingApi } from './selling/Selling'

export const store = configureStore({
  reducer: {
    [SellingApi.reducerPath]: SellingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(SellingApi.middleware),
})

setupListeners(store.dispatch)