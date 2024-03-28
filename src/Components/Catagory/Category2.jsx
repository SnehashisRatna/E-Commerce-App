import React from 'react'
import Button from '../Shared/Button'
import Image1 from '../../assets/category/gaming.png' ;
import Image2 from '../../assets/category/vr.png' ;
import Image3 from '../../assets/category/speaker.png' ;

const Category = () => {
  return (
    <div className='py-8'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* First col */}
                <div className='sm:col-span-2 hover:scale-110 duration-500 cursor-pointer  py-10 pl-5  bg-gradient-to-br from-gray-300/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        {/* Text Content */}
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-600'>Enjoy</p>
                            <p className='text-2xl text-gray-600 font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl text-gray-600 font-bold opacity-50 tracking-wider mb-2'>PS-5</p>
                            <Button 
                            text="Browse"
                            bgColor={"bg-primary"}
                            textColor={"text-gray-300"}/>
                        </div>
                        {/* Image part */}
                        <img src={Image1} alt="Laptop" className='w-[180px] lg:w-[280px] absolute top-1/2 -translate-y-1/2 right-10 ' />
                    </div>

                </div>
                {/* Second col */}
                <div className=' py-10 pl-5 hover:scale-110 duration-500 cursor-pointer bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        {/* Text Content */}
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-300'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 tracking-wider mb-2'>VR</p>
                            <Button 
                            text="Browse"
                            bgColor={"bg-gray-300"}
                            textColor={"text-brandGreen"}/>
                        </div>
                        {/* Image part */}
                        <img src={Image2} alt="Earphone" className='  lg:w-[260px] h-[180px] lg:h-[240px] absolute right-1 bottom-0' />
                    </div>

                </div>
                {/* Third col */}
                <div className='py-10 pl-5 hover:scale-110 duration-500 cursor-pointer bg-gradient-to-br from-brandBlue/90 to-brandBlue/50 text-white rounded-3xl relative h-[320px] flex items-start'>
                    <div>
                        {/* Text Content */}
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-300'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 tracking-wider mb-2'>Speaker</p>
                            <Button 
                            text="Browse"
                            bgColor={"bg-zinc-200"}
                            textColor={"text-amber-500"}/>
                        </div>
                        {/* Image part */}
                        <img src={Image3} alt="Watch" className='w-[200px] lg:w-[240px] right-10  lg:-right-10  absolute bottom-0' />
                    </div>

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Category