import {cleanErrors,featuredproductFail,featuredproductRequest,featuredproductSuccess,featuredproductdeleteReset,featuredproductdeletefail,featuredproductdeletesuccess,featuredproductuploadSuccess} from "../slices/featuredProductSlice";
import {productDetailFail,productDetailRequest,productDetailSuccess} from "../slices/productDetailSlice";
import axios from 'axios';
import {BASE_URL} from '../../constants/baseurl'

// Add Product 

export const addfeaturedproduct= (formdata)=> async(dispatch)=>{

    try {
        console.log(Object.fromEntries(formdata));

 
        dispatch(featuredproductRequest());


        const config = {headers:{'Content-Type': 'multipart/form-data'}};

        const {data} = await axios.post(`${BASE_URL}api/v1/featurelisting`, formdata, config)
        console.log(data);
        dispatch(featuredproductuploadSuccess(data))
        
    } catch (error) {
        dispatch(featuredproductdeletefail(error?.response?.data?.message))
    }

}

// Get Product 

export const getfeaturedproduct = ()=> async(dispatch)=>{

    try {

        dispatch(featuredproductRequest());

        const {data} = await axios.get(`${BASE_URL}api/v1/featurelisting`)
        // console.log(data?.banners);
        console.log(data);
        dispatch(featuredproductSuccess(data?.featuredListing))
        
    } catch (error) {
        dispatch(featuredproductdeletefail(error?.response?.data?.message))
    }

}


// Delete Product 

export const deletefeaturedproduct= (id)=> async(dispatch)=>{

    try {
        console.log(id);

        dispatch(featuredproductRequest());

        const {data} = await axios.delete(`${BASE_URL}api/v1/featurelisting/${id}`)
        // console.log(data?.banners);
        console.log(data);
        dispatch(featuredproductdeletesuccess(data))
        
    } catch (error) {
        dispatch(featuredproductdeletefail(error.response.data.message))
    }

}

// featured detail 

export const getlistingDetail = (id)=> async(dispatch)=>{

    try { 
        console.log(id);
        dispatch(productDetailRequest());

        const {data} = await axios.get(`${BASE_URL}api/v1/featurelisting/${id}`)
        console.log(data);
        dispatch(productDetailSuccess(data?.featuredListingdetail))
        
    } catch (error) {
        dispatch(productDetailFail(error?.response?.data?.message))
    }

}