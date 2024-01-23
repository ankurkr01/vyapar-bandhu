import {cleanErrors,productDetailFail,productDetailRequest,productDetailSuccess} from "../slices/productDetailSlice";
import axios from 'axios';
import {BASE_URL} from '../../constants/baseurl'

// get Product detail 

export const getproductDetail = (id)=> async(dispatch)=>{

    try {
 
        dispatch(productDetailRequest());

        const {data} = await axios.get(`${BASE_URL}api/v1/product/${id}`)
        console.log(data);
        dispatch(productDetailSuccess(data?.product))
        
    } catch (error) {
        dispatch(productDetailFail(error?.response?.data?.message))
    }

}

