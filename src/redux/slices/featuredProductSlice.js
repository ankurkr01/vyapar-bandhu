import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    featuredproduct:[]
}

const featuredproductSlice = createSlice({
    name:'featuredproduct',
    initialState,
    reducers:{
        featuredproductRequest(state, action){
            state.isLoading = true;

        },
        featuredproductSuccess(state, action){
            state.isLoading = false;
            state.featuredproduct = action.payload;
        },
        featuredproductuploadSuccess(state, action){
            state.isLoading = false;
            state.isUploaded = action.payload.success;
        },
        featuredproductFail(state, action){
            state.isLoading = false;
            state.featuredproduct = null;
            state.error = action.payload
        },

        featuredproductdeletesuccess(state, action){
            state.isLoading = false;
            state.isDeleted = action.payload.success;
        },
        featuredproductdeletefail(state, action){
            state.isLoading = false;
            state.error = action.payload;
        },
        featuredproductdeleteReset(state, action){
            state.isDeleted = false;
        },
   

        cleanErrors(state, action){
            state.error=null;
        },

       
    }
}) 

export const {cleanErrors,featuredproductFail,featuredproductRequest,featuredproductSuccess,featuredproductdeleteReset,featuredproductdeletefail,featuredproductdeletesuccess,featuredproductuploadSuccess} = featuredproductSlice.actions;

export default featuredproductSlice;