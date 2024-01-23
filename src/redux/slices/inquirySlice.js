import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    inquiry:[]
}

const inquirySlice = createSlice({
    name:'inquiry',
    initialState,
    reducers:{
        inquiryRequest(state, action){
            state.isLoading = true;

        },
        inquirySuccess(state, action){
            state.isLoading = false;
            state.inquiry = action.payload;
        },
        inquiryploadSuccess(state, action){
            state.isLoading = false;
            state.isUploaded = action.payload.success;
        },
        inquiryFail(state, action){
            state.isLoading = false;
            state.inqury = null;
            state.error = action.payload
        },


        cleanErrors(state, action){
            state.error=null;
        },
       
    }
}) 

export const {cleanErrors,inquiryFail,inquiryRequest,inquirySuccess,inquiryploadSuccess} = inquirySlice.actions;

export default inquirySlice;