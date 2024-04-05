import { createSlice } from "@reduxjs/toolkit";
const initialState={
    formData:[],
}
export const formSlice=createSlice({
    name:'formData',
    initialState,
    reducers:{
         add:(state,action)=>{
            state.formData.push(action.payload); // Push the payload object directly
        }
    }
})
export const {add}=formSlice.actions;
export default formSlice.reducer