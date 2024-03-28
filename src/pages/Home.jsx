import React from 'react'
import Hero from '../Components/Hero'
import Catagory from '../Components/Catagory/Category'
import Catagory2 from '../Components/Catagory/Category2'
import Services from '../Components/Services/Services'
import Banner from '../Components/Banner/Banner'
import headphone from '../assets/hero/headphone.png'
import Banner2 from '../Components/Banner/Banner2'
import smartwatch2 from '../assets/category/smartwatch2.png'
import Blogs from '../Components/Blogs/Blogs'
import Partners from '../Components/Partners/Partners'
import Footer from '../Components/Footer/Footer'
import FeatureProduct from '../Components/FeatureProduct/FeatureProduct'

// Banner data 
const BannerData = {
    discount : "30% OFF" ,
    title : "Fine Smile" ,
    date : "10 jan to 28 jan" ,
    image : headphone ,
    title2: "Air Solo Bass" ,
    title3: "Winter Sale" ,
    title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, ab." ,
    bgColor: "#f42c37" ,
  } ;
  const BannerData2 = {
    discount : "30% OFF" ,
    title : "Happy Hours" ,
    date : "14 jan to 28 jan" ,
    image : smartwatch2 ,
    title2: "Smart Solo" ,
    title3: "Winter Sale" ,
    title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, ab." ,
    bgColor: "#2dcc6f" ,
  } ;
  


const Home = () => {
  return (
    <div>
      <Hero/>
      <Catagory/>
      <Catagory2/>
      <Services/>
      <Banner data={BannerData}/>
      <Banner2 data={BannerData2}/>
      {/* <FeatureProduct/> */}
      <Blogs/>
      <Partners/>
      <Footer/>
    </div>
  )
}

export default Home