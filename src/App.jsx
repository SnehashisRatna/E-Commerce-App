import React from 'react'
import Navbar from './Components/Navbar'
// import Hero from './Components/Hero'
// import Catagory from './Components/Catagory/Category'
// import Catagory2 from './Components/Catagory/Category2'
// import Services from './Components/Services/Services'
// import Banner from './Components/Banner/Banner'
// import headphone from './assets/hero/headphone.png'
// import Banner2 from './Components/Banner/Banner2'
// import smartwatch2 from './assets/category/smartwatch2.png'
// import Blogs from './Components/Blogs/Blogs'
// import Partners from './Components/Partners/Partners'
// import Footer from './Components/Footer/Footer'
import AOS from 'aos'
import "aos/dist/aos.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'




// // Banner data 
// const BannerData = {
//   discount : "30% OFF" ,
//   title : "Fine Smile" ,
//   date : "10 jan to 28 jan" ,
//   image : headphone ,
//   title2: "Air Solo Bass" ,
//   title3: "Winter Sale" ,
//   title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, ab." ,
//   bgColor: "#f42c37" ,
// } ;
// const BannerData2 = {
//   discount : "30% OFF" ,
//   title : "Happy Hours" ,
//   date : "14 jan to 28 jan" ,
//   image : smartwatch2 ,
//   title2: "Smart Solo" ,
//   title3: "Winter Sale" ,
//   title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, ab." ,
//   bgColor: "#2dcc6f" ,
// } ;




const App = () => {
  React.useEffect(()=>{
    AOS.init(
      {
        duration:1000,
        easing:"ease-in-sine",
        delay:100,
        offset:100,
        // once:true,
        // mirror:false,
        // anchorPlacement : "top-bottom",
      }
    );
    AOS.refresh();
  },[]);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white transition-all duration-700 overflow-hidden'>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      {/* <Footer/> */}
      
    </div>       

  )
}

export default App