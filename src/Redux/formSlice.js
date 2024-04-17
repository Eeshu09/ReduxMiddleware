
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



// import { createSlice } from '@reduxjs/toolkit';
// import CryptoJS from 'crypto-js';

// const key = 'MySecretKeyvipustishuk06';

// const initialState = {
//   encryptedFormData: [],
//   decryptedFormData: null,
// };

// const formSlice = createSlice({
//   name: 'form',
//   initialState,
//   reducers: {
//     encryptAndStoreFormData: (state, action) => {
//       const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(action.payload), key).toString();
//       state.encryptedFormData.push(encryptedData);
//     },
//     decryptFormData: (state, action) => {
//       const {encryptedData} = action.payload;
//       if (encryptedData) {
//         try {
//           const bytes = CryptoJS.AES.decrypt(encryptedData, key);
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


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // import crypto from "crypto";
// import CryptoJS from 'crypto-js';

// const key = "MySecretKeyvipustishuk06";

// export const encryptAndStoreFormData = createAsyncThunk(
//   "form/encryptAndStoreFormData",
//   async (formData, { rejectWithValue }) => {
//     try {
//       const iv = crypto.randomBytes(16);
//       const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
//       let encrypted = cipher.update(JSON.stringify(formData), "utf8", "base64");
//       encrypted += cipher.final("base64");
//       return { encryptedData: encrypted, iv: iv.toString("base64") };
//     } catch (error) {
//       return rejectWithValue("Encryption failed");
//     }
//   }
// );

// // Asynchronously decrypt data using the provided encrypted data and IV
// export const decryptFormData = createAsyncThunk(
//   "form/decryptFormData",
//   async ({ encryptedData, iv }, { rejectWithValue }) => {
//     try {
//       const decipher = crypto.createDecipheriv(
//         "aes-256-cbc",
//         Buffer.from(key),
//         Buffer.from(iv, "base64")
//       );
//       let decrypted = decipher.update(encryptedData, "base64", "utf8");
//       decrypted += decipher.final("utf8");
//       return JSON.parse(decrypted);
//     } catch (error) {
//       console.error("Error decrypting data:", error);
//       return rejectWithValue("Decryption failed");
//     }
//   }
// );

// const initialState = {
//   encryptedData: null,
//   decryptedData: null,
//   error: null,
// };

// const formSlice = createSlice({
//   name: "form",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(encryptAndStoreFormData.fulfilled, (state, action) => {
//         state.encryptedData = action.payload;
//       })
//       .addCase(decryptFormData.fulfilled, (state, action) => {
//         state.decryptedData = action.payload;
//       })
//       .addMatcher(
//         (action) => action.type.endsWith("rejected"),
//         (state, action) => {
//           state.error = action.payload || action.error.message;
//         }
//       );
//   },
// });

// export default formSlice.reducer;


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import CryptoJS from 'crypto-js';

// const key = "MySecretKeyvipustishuk06";

// export const encryptAndStoreFormData = createAsyncThunk(
//   "form/encryptAndStoreFormData",
//   async (formData, { rejectWithValue }) => {
//     try {
//       const iv = CryptoJS.lib.WordArray.random(64); // Generate random IV using CryptoJS
//       const encrypted = CryptoJS.AES.encrypt(JSON.stringify(formData), key, {
//         iv: iv,
//         mode: CryptoJS.mode.CBC,
//         padding: CryptoJS.pad.Pkcs7,
//       }).toString();
//       return { encryptedData: encrypted, iv: iv.toString(CryptoJS.enc.Base64) };
//     } catch (error) {
//       return rejectWithValue("Encryption failed");
//     }
//   }
// );

// export const decryptFormData = createAsyncThunk(
//   "form/decryptFormData",
//   async ({ encryptedData, iv }, { rejectWithValue }) => {
//     try {
//       const decrypted = CryptoJS.AES.decrypt(encryptedData, key, {
//         iv: CryptoJS.enc.Base64.parse(iv),
//         mode: CryptoJS.mode.CBC,
//         padding: CryptoJS.pad.Pkcs7,
//       }).toString(CryptoJS.enc.Utf8);
//       return JSON.parse(decrypted);
//     } catch (error) {
//       console.error("Error decrypting data:", error);
//       return rejectWithValue("Decryption failed");
//     }
//   }
// );

// const initialState = {
//   encryptedData: null,
//   decryptedData: null,
//   error: null,
// };

// const formSlice = createSlice({
//   name: "form",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(encryptAndStoreFormData.fulfilled, (state, action) => {
//         state.encryptedData = action.payload;
//       })
//       .addCase(decryptFormData.fulfilled, (state, action) => {
//         state.decryptedData = action.payload;
//       })
//       .addMatcher(
//         (action) => action.type.endsWith("rejected"),
//         (state, action) => {
//           state.error = action.payload || action.error.message;
//         }
//       );
//   },
// });

// export default formSlice.reducer;
 

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CryptoJS from 'crypto-js';

const key = "MySecretKeyvipustishuk06";

export const encryptAndStoreFormData = createAsyncThunk(
  "form/encryptAndStoreFormData",
  async (formData, { rejectWithValue }) => {
    try {
      const iv = CryptoJS.lib.WordArray.random(16); // Generate random IV using CryptoJS
      const encrypted = CryptoJS.AES.encrypt(JSON.stringify(formData), key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }).toString();
      return { encryptedData: encrypted, iv: iv.toString(CryptoJS.enc.Base64) };
    } catch (error) {
      return rejectWithValue("Encryption failed");
    }
  }
);

export const decryptFormData = createAsyncThunk(
  "form/decryptFormData",
  async ({ encryptedData, iv }, { rejectWithValue }) => {
    try {
      const decrypted = CryptoJS.AES.decrypt(encryptedData, key, {
        iv: CryptoJS.enc.Base64.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }).toString(CryptoJS.enc.Utf8);
      return JSON.parse(decrypted);
    } catch (error) {
      console.error("Error decrypting data:", error);
      return rejectWithValue("Decryption failed");
    }
  }
);

const initialState = {
  encryptedData: null,
  decryptedData: null,
  error: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(encryptAndStoreFormData.fulfilled, (state, action) => {
        state.encryptedData = action.payload;
      })
      .addCase(decryptFormData.fulfilled, (state, action) => {
        state.decryptedData = action.payload;
      })
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action) => {
          state.error = action.payload || action.error.message;
        }
      );
  },
});

export default formSlice.reducer;
