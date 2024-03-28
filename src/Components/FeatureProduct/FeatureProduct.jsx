import React, { useContext } from 'react'
// import AppContext from '../../Context/productcontext'
import Heading from '../Shared/Heading'
import Product from '../Product/HomeProduct'
import { useProductContext } from '../../Context/ProductContextProvider'


const FeatureProduct = () => {
    const {isLoading , FeatureProducts} = useProductContext ;
    if(isLoading){
        return <div>........Loading</div>;
    }
  return (
    <div>
        <div className="container">
            <div>
                {/* Heading Section */}
                <Heading title={"Check Now"}
                         subtitle={"Our feature Services"}/>
                         {/* Item Part */}
                <div className=" ">
                    {
                        //     FeatureProducts.map((curElem)=>{
                        //     return <Product key={curElem.id} {...curElem}/>;
                             
                        // })
                        <p>Hello</p>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureProduct