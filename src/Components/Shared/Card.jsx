import React from 'react'
import { FaFileLines } from "react-icons/fa6";
import { FaArrowCircleDown } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion"
// import headphone from '../../assets/hero/headphone.png'
import Button from './Button';




function Card({data,reference}) {
  return (
    <>
    {/* Making CArds */}
    {/* <motion.div drag  dragTransition={{bounceDamping:20,bounceStiffness:100}} dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1.2} className='relative flex-shrink-0 w-60 h-72 top-0 left-0 m-10 py-10 px-8 bg-zinc-900 rounded-[40px] overflow-hidden text-white '> */}
    <div   data-aos="fade-up" 
           data-aos-duration = "900" 
           className='relative flex-shrink-0 w-60 h-72 top-0 left-0 m-10 py-10 px-8 bg-neutral-300 dark:bg-zinc-600 transition-all duration-500 rounded-[40px] overflow-hidden text-white '>

        {/* <FaFileLines/> */}
        {/* <div className='mt-5 leading-tight text-sm font-semibold'>{data.desc}</div> */}
        

        <img src={data.image} alt="" />
        {/* footer Part */}
        <div className='footer absolute w-full  bottom-0 left-0  ' >
            <div className='flex  items-center justify-between mb-3 py-3 px-10 '>
            
            {/* <span>
                {data.close ? <IoCloseCircleSharp size="1.5em" /> : <FaArrowCircleDown size="1.3em"/>}
               
            </span> */}
            </div>
            <div className='w-full h-16 px-8 py-4 bg-green-600  flex items-center justify-between  '>
               <div className='text-sm font-bold text-gray-200'>
                  <h1>{data.brand}</h1>
                  <h1>{data.price}</h1>
               </div>
                <Button text="Browse"
                        bgColor="bg-gray-600"
                        textColor="text-zinc-200"
                        />
            </div>
            
            {/* {
              data.tag.isOpen && (<div className={`tag w-full h-14 px-8 py-4 ${data.tag.tagColor === "blue" ?"bg-blue-600" :"bg-green-600"} flex items-center justify-center`}>
              <h1 className='text-sm font-semibold'>{data.tag.tagTitle}</h1>
              </div>)
            }   */}
        </div>
        

    {/* </motion.div> */}
            </div>
    </>
  )
}

export default Card