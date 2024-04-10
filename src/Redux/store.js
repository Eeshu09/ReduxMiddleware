// store.js

// import { configureStore } from '@reduxjs/toolkit';
// import formReducer from './formSlice';

// const store = configureStore({
//   reducer: {
//     form: formReducer,
//   },
// });
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, formReducer);

const store = configureStore({
  reducer: {
    form: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };


// export default store;
// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import formReducer from './formSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, formReducer);

// const store = configureStore({
//   reducer: {
//     form: persistedReducer,
//   },
// });

// export const persistor = persistStore(store);


// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import formSlice from './formSlice';

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, formSlice);

// export const store = configureStore({
//   reducer: {
//     formData: persistedReducer,
//   },
// });

// export const persistor = persistStore(store);
