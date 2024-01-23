import {configureStore} from "@reduxjs/toolkit"
import homeBannerSlice from "../slices/homeBannerSlice"
import productSlice from "../slices/productSlice"
import inquirySlice from "../slices/inquirySlice"
import productDetailSlice from "../slices/productDetailSlice"
import featuredProductSlice from "../slices/featuredProductSlice"


 const store = configureStore({
    reducer:{
        banner:homeBannerSlice.reducer,
        product:productSlice.reducer,
        inquiry:inquirySlice.reducer,
        productDetail:productDetailSlice.reducer,
        featuredproduct:featuredProductSlice.reducer


    }
})

export default store