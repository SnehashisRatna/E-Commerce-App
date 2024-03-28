import React, { useContext, useEffect, useReducer, useState } from 'react'
// import productcontext from './productcontext'
import AppContext from './productcontext'
import axios from 'axios';
import reducer from '../reducer/ProductReducer';
const API = "https://api.pujakaitem.com/api/products" ;

const initialState = {
    isLoading: false,
    isError:false,
    products:[],
    featureProducts : [],
    isSingleLoaing :false ,
    singleProduct: {},
}

const ProductContextProvider = ({children})=>{
    
    const [state , dispatch] = useReducer(reducer , initialState) ;
  
    const getProducts = async (url)=>{
        dispatch({type:"SET_LOADING"})
        try {
            const res = await axios.get(url) ;
            // console.log("file:productcontext.js ~ line 10 ~ getProducts ~ res",res);
            const products = await res.data ;
            dispatch({type:"SET_API_DATA",payload:products}); 
        } catch (error) {
            dispatch({type:"API_ERROR"});
        }

    };

    // my 2nd API call for single product
    const getSingleProduct = async(url)=>{
        dispatch({type:"SET_SINGLE_LOADING"});
        try{
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({type:"SET_ISINGLE_PRODUCT", payload:singleProduct});

        }catch(error){
            dispatch({type:"SET_SINGLE_ERROR"});

        }
    };


    useEffect(()=>{
        getProducts(API);
    },[]) ;



    // const [user,setUser] = useState(null)



    return(
        <AppContext.Provider value={{  ...state , getSingleProduct}}>
            {children}
        </AppContext.Provider>
    )

}

// Custom Hook
const useProductContext = ()=>{
    return useContext(AppContext);
}



export { ProductContextProvider , useProductContext}