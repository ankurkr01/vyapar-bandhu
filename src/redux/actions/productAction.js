import {cleanErrors,productFail,productRequest,productSuccess,productdeleteReset,productdeletefail,productdeletesuccess,productploadSuccess,updateproductFail,updateproductRequest,updateproductReset,updateproductSuccess} from "../slices/productSlice";
import axios from 'axios';
import {BASE_URL} from '../../constants/baseurl'

// Add Product 

export const addproduct = (formdata)=> async(dispatch)=>{

    try {
console.log(formdata);
console.log('formdata');
 
        dispatch(productRequest());

        const config = {headers:{'Content-Type': 'multipart/form-data'}};

        const {data} = await axios.post(`${BASE_URL}api/v1/product`, formdata, config)
        console.log(data);
        dispatch(productploadSuccess(data))
        
    } catch (error) {
        dispatch(productFail(error?.response?.data?.message))
    }

}

// Get Product 

export const getproduct = ()=> async(dispatch)=>{

    try {

        dispatch(productRequest());

        const {data} = await axios.get(`${BASE_URL}api/v1/products`)
        // console.log(data?.banners);
        console.log(data);
        dispatch(productSuccess(data?.product))
        
    } catch (error) {
        dispatch(productFail(error.response.data.message))
    }

}


// Delete Product 

export const deleteproduct = (id)=> async(dispatch)=>{

    try {

        dispatch(productRequest());

        const {data} = await axios.delete(`${BASE_URL}api/v1/product/${id}`)
        // console.log(data?.banners);
        dispatch(productdeletesuccess(data))
        
    } catch (error) {
        dispatch(productdeletefail(error.response.data.message))
    }

}



// Add Product 

export const updateproduct = (id, productData)=> async(dispatch)=>{

    try {

 
        dispatch(updateproductRequest());

        const config = {headers:{'Content-Type': 'multipart/form-data'}};

        const {data} = await axios.put(`${BASE_URL}api/v1/product/${id}`, productData, config)
        console.log(data);
        dispatch(updateproductSuccess(data))
        
    } catch (error) {
        dispatch(updateproductFail(error?.response?.data?.message))
    }

}