import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../Context/ProductContextProvider'
import pageNavigation from '../Components/pageNavigation/PageNavigation'


const  API = "https://api.pujakaitem.com/api/products" ;

const SingleProduct = () => {

  const {getSingleProduct , isSingleLoading , singleProduct} = useProductContext() ;

  const {id} = useParams() ;
  const {
    id :alias,
    company,
    price ,
    description,
    category ,
    stock ,
    stars ,
    reviews ,

  } = singleProduct ;
  // console.log("file:SingleProduct.jsx ~ line 6 ~ SingleProduct ~id" , id) ;
  useEffect(()=>{
    getSingleProduct(`${API}?id=${id}`) ;
  })

  return (
       <div>
       < pageNavigation title={name}/>
       </div>   
    )
}

export default SingleProduct