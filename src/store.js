// import { configureStore } from "@reduxjs/toolkit";
// import formSlice from "./formSlice";

// export const store=configureStore({
//     reducer:{
//         formData:formSlice
//     }
// })
// src/store/index.js

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import formSlice from "./formSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, formSlice);

export const store = configureStore({
  reducer: {
    formData: persistedReducer,
  },
});

export const persistor = persistStore(store);
