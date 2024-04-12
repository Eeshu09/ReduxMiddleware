
// import { createSlice } from '@reduxjs/toolkit';
// import CryptoJS from 'crypto-js';

// const formSlice = createSlice({
//   name: 'form',
//   initialState: {
//     encryptedFormData: [],
//     decryptedFormData: null,
//   },
//   reducers: {
//     encryptAndStoreFormData: (state, action) => {
//       const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(action.payload),'MySecretKeyvipustishuk06').toString();
//       // state.encryptedFormData = encryptedData;
//       state.encryptedFormData.push(encryptedData)
//     },
//     decryptFormData: (state, action) => {
//       const { encryptedData } = action.payload;
//       if (encryptedData) {
//         try {
//           const bytes = CryptoJS.AES.decrypt(encryptedData, 'MySecretKeyvipustishuk06');
//           const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//           state.decryptedFormData = decryptedData;
//         } catch (error) {
//           console.error('Error decrypting data:', error);
//           state.decryptedFormData = null;
//         }
//       } else {
//         state.decryptedFormData = null;
//       }
//     },
//   },
// });

// export const { encryptAndStoreFormData, decryptFormData } = formSlice.actions;
// export default formSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';
import CryptoJS from 'crypto-js';

const key = 'MySecretKeyvipustishuk06';

const initialState = {
  encryptedFormData: [],
  decryptedFormData: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    encryptAndStoreFormData: (state, action) => {
      const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(action.payload), key).toString();
      state.encryptedFormData.push(encryptedData);
    },
    decryptFormData: (state, action) => {
      const {encryptedData} = action.payload;
      if (encryptedData) {
        try {
          const bytes = CryptoJS.AES.decrypt(encryptedData, key);
          const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
          state.decryptedFormData = decryptedData;
        } catch (error) {
          console.error('Error decrypting data:', error);
          state.decryptedFormData = null;
        }
      } else {
        state.decryptedFormData = null;
      }
    },
  },
});

export const { encryptAndStoreFormData, decryptFormData } = formSlice.actions;
export default formSlice.reducer;




// export const encryptText = (text) => {
//   const cipherText = CryptoJS.AES.encrypt(text, key).toString();
//   return cipherText;
// };

// export const decryptText = (cipherText) => {
//   const bytes = CryptoJS.AES.decrypt(cipherText, key);
//   const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
//   return decryptedText;
// };
