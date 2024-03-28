import React, { useRef, useState } from 'react'
import Card from './Card'
import headphone from '../../assets/hero/headphone.png'
import watch from '../../assets/hero/watch.png'
import ps5 from '../../assets/category/gaming.png'
import macbook from '../../assets/category/macbook.png'
import earphone from '../../assets/category/earphone.png'
import watch2 from '../../assets/category/smartwatch2.png'
import speaker from '../../assets/category/speaker.png'
import vr from '../../assets/category/vr.png'
import p1 from '../../assets/product/p-1.jpg'
import p2 from '../../assets/product/p-2.jpg'
import p3 from '../../assets/product/p-3.jpg'





function Foreground() {
    const ref = useRef(null) ;
    const data = [
        {
           image:headphone,
           brand:"Sony",
           price:"$23,000",
           browse :"browse"           
        },
        {
           image:watch,
           brand:"G-Shock",
           price:"$10,000" ,
           browse :"browse"           
        },
        {
           image:ps5,
           brand:"Sony",
           price:"$50,000",
           browse :"browse"            
        },
        {
           image:macbook,
           brand:"Apple",
           price:"$100,000",
           browse :"browse"            
        },
        {
           image:earphone,
           brand:"Boat",
           price:"$50",
           browse :"browse"            
        },
        {
           image:watch2,
           brand:"Apple",
           price:"$50,000",
           browse :"browse"            
        },
        {
           image:earphone,
           brand:"Boat",
           price:"$50",
           browse :"browse"            
        },
        {
           image:watch2,
           brand:"Apple",
           price:"$50,000",
           browse :"browse"            
        },
        {
           image:speaker,
           brand:"JBL",
           price:"$50,00",
           browse :"browse"            
        },
        {
           image:vr,
           brand:"Apple",
           price:"$50,0000",
           browse :"browse"            
        },
        {
           image:speaker,
           brand:"JBL",
           price:"$50,00",
           browse :"browse"            
        },
        {
           image:vr,
           brand:"Apple",
           price:"$50,0000",
           browse :"browse"            
        },
        {
           image:p1,
           brand:"Sony",
           price:"$50,00",
           browse :"browse"            
        },
        {
           image:p2,
           brand:"Sony",
           price:"$30,000",
           browse :"browse"            
        },
        {
           image:p3,
           brand:"Sony",
           price:"$10,000",
           browse :"browse"            
        },
        
        // {
        //     desc: "Lorem ipsum dolor sit amet Lorem, ipsum. consectetur adipisicing.",
        //     filesize:".9mb",
        //     close:true,
        //     tag:{isOpen:true, tagTitle:"Download Now", tagColor:"blue"}
        // },
       
        
    ]
  return (
    <>
    <div ref ={ref} className=' container rounded-2xl z-[3] top-0 left-0  w-full h-full bg-zinc-500/80 dark:bg-zinc-800/80 transition-all duration-500 sm:grid  sm:grid-cols-3  lg:grid-cols-4  '>
        {/* Catagory Section */}
        <div className=' row-span-12 text-center sm:text-start  mt-20 ml-10 space-y-2'>
            <h1 className='text-xl font-bold '>Catagory</h1>
            <ul className='flex gap-x-6 lg:gap-x-0  sm:flex-col text-sm font-semibold items-center justify-center sm:items-start  sm:space-y-3  '>
                <a data-aos="slide-right" 
                           data-aos-duration = "900" className='hover:text-zinc-200 dark:hover:text-cyan-500 transition-all duration-500' href="http://#" target="_blank" rel="noopener noreferrer">All</a>
                <a data-aos="slide-right" 
                            data-aos-duration = "900"
                           className='hover:text-zinc-200 dark:hover:text-cyan-500  transition-all duration-500' href="http://#" target="_blank" rel="noopener noreferrer">Mobile</a>
                <a data-aos="slide-right" 
                           data-aos-duration = "900"
                            className='hover:text-zinc-200 dark:hover:text-cyan-500 transition-all duration-500' href="http://#" target="_blank" rel="noopener noreferrer">Laptop</a>
                <a data-aos="slide-right" 
                           data-aos-duration = "900"
                            className='hover:text-zinc-200 dark:hover:text-cyan-500 transition-all  duration-500' href="http://#" target="_blank" rel="noopener noreferrer">Computer</a>
                <a data-aos="slide-right" 
                           data-aos-duration = "900"
                            className='hover:text-zinc-200 dark:hover:text-cyan-500 transition-all  duration-500' href="http://#" target="_blank" rel="noopener noreferrer">Watch</a>
                <a data-aos="slide-right" 
                           data-aos-duration = "900"
                            className='hover:text-zinc-200 dark:hover:text-cyan-500 transition-all duration-500 ' href="http://#" target="_blank" rel="noopener noreferrer">Accessories</a>
            </ul>

            {/* <h1 className='text-xl font-bold translate-y-5 '>Price</h1>
            <h1 className='text-xl font-bold translate-y-7 '>Color</h1> */}
        </div>
            {data.map((item,index)=>(
            <Card data={item} reference ={ref}/>
        ))}
    </div>
    </>
  )
}

export default Foreground