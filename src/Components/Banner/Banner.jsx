import React from 'react'
import Button from '../Shared/Button'

const Banner = ({data}) => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12'>
        <div  className='container'>
            <div style={{backgroundColor: data.bgColor}} className=' grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl '>
                {/* first Col */}
                <div className='p-6 sm:p-8'>
                    <p 
                      data-aos="slide-right" 
                      data-aos-duration = "900"
                    //   data-aos-once = "true"
                      className='text-xl font-bold'>{data.discount}</p>
                    <h1
                       data-aos="zoom-out" 
                       data-aos-duration = "900"
                    //    data-aos-once = "true"
                       className='uppercase mb-2 text-4xl lg:text-7xl font-bold'>
                        {" "}
                        {data.title}</h1>
                    <p
                      data-aos="fade-up" 
                      data-aos-duration = "900"
                      data-aos-once = "true"
                      className='text-sm'>
                        {data.date}
                    </p>
                </div>

                {/* Second Col */}
                <div       data-aos="zoom-in" 
                           data-aos-duration = "900"
                        //    data-aos-once = "true"
                           className=' w-full flex items-center'>
                    <img src={data.image} alt="headphone" className='scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-contain' />
                </div>
                {/* Third Col */}
                <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
                    <p     data-aos="zoom-out" 
                           data-aos-duration = "900"
                        //    data-aos-once = "true"
                           className='font-bold text-xl'>{data.title2}</p>
                    <p  data-aos="slide-left" 
                           data-aos-duration = "900"
                        //    data-aos-once = "true"
                           className='text-3xl sm:text-5xl font-bold'>{data.title3}</p>
                    <p  data-aos="fade-up" 
                           data-aos-duration = "900"
                        //    data-aos-once = "true"
                           className='text-sm tracking-wide leading-5'>{data.title4}</p>
                    <div  data-aos="fade-up" 
                          data-aos-offset ="0"
                           data-aos-duration = "900"
                        //    data-aos-once = "true"
                        >
                        <Button text="Shop"
                        bgColor="bg-gray-200"
                        textColor="text-primary"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner