// import { createSlice } from "@reduxjs/toolkit";
// const initialState={
//     formData:[],
// }
// export const formSlice=createSlice({
//     name:'formData',
//     initialState,
//     reducers:{
//          add:(state,action)=>{
//             state.formData.push(action.payload); // Push the payload object directly
//         }
//     }
// })
// export const {add}=formSlice.actions;
// export default formSlice.reducer

// formSlice.js

import { createSlice } from '@reduxjs/toolkit';
import CryptoJS from 'crypto-js';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    encryptedFormData: '',
  },
  reducers: {
    encryptAndStoreFormData: (state, action) => {
      const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(action.payload), 'secretKey').toString();
      state.encryptedFormData = encryptedData;
    },
  },
});

export const { encryptAndStoreFormData } = formSlice.actions;

export default formSlice.reducer;
