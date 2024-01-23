import {cleanErrors,inquiryFail,inquiryRequest,inquirySuccess,inquiryploadSuccess} from "../slices/inquirySlice";
import axios from 'axios';
import {BASE_URL} from '../../constants/baseurl'

// Add Product 

export const postinquiry = (formdata)=> async(dispatch)=>{

    try {
        console.log(Object.fromEntries(formdata));

 
        dispatch(inquiryRequest());

        const config = {headers:{'Content-Type': 'application/json'}};

        const {data} = await axios.post(`${BASE_URL}api/v1/enquiry`, formdata, config)
        console.log(data);
        dispatch(inquiryploadSuccess(data))
        
    } catch (error) {
        dispatch(inquiryFail(error?.response?.data?.message))
    }

}

// Get Product 

export const getinquiry = ()=> async(dispatch)=>{

    try {

        dispatch(inquiryRequest());

        const {data} = await axios.get(`${BASE_URL}api/v1/enquiry`)
        // console.log(data?.banners);
        console.log(data);
        dispatch(inquirySuccess(data?.inquiry))
        
    } catch (error) {
        dispatch(inquiryFail(error?.response?.data?.message))
    }

}