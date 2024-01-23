import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    productDetail:[]
}

const productDetailSlice = createSlice({
    name:'productDetail',
    initialState,
    reducers:{
        productDetailRequest(state, action){
            state.isLoading = true;

        },
        productDetailSuccess(state, action){
            state.isLoading = false;
            state.productDetail = action.payload;
        },

        productDetailFail(state, action){
            state.isLoading = false;
            state.product = null;
            state.error = action.payload
        },


        cleanErrors(state, action){
            state.error=null;
        },
        
       
    }
}) 

export const {cleanErrors, productDetailFail,productDetailRequest,productDetailSuccess} = productDetailSlice.actions;

export default productDetailSlice;