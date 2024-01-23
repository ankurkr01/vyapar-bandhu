import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    product:[]
}

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        productRequest(state, action){
            state.isLoading = true;

        },
        productSuccess(state, action){
            state.isLoading = false;
            state.product = action.payload;
        },
        productploadSuccess(state, action){
            state.isLoading = false;
            state.isUploaded = action.payload.success;
        },
        productFail(state, action){
            state.isLoading = false;
            state.product = null;
            state.error = action.payload
        },

        productdeletesuccess(state, action){
            state.isLoading = false;
            state.isDeleted = action.payload.success;
        },
        productdeletefail(state, action){
            state.isLoading = false;
            state.error = action.payload;
        },
        productdeleteReset(state, action){
            state.isDeleted = false;
        },
        updateproductRequest(state, action){
          
            state.isLoading = true;
         },
         updateproductSuccess(state, action){
            state.isLoading = false;
            state.isUpdated = action.payload.success;
            
 
         },  updateproductFail(state, action){
            state.isLoading = false;
            state.error= action.payload.success;
 
         },
        
         updateproductReset(state, action){
             state.isUpdated = false;
            
 
         },

        cleanErrors(state, action){
            state.error=null;
        },

       
    }
}) 

export const {cleanErrors,productFail,productRequest,productSuccess,productdeleteReset,productdeletefail,productdeletesuccess,productploadSuccess,updateproductFail,updateproductRequest,updateproductReset,updateproductSuccess} = productSlice.actions;

export default productSlice;