import React from 'react'
import Button from '../Shared/Button'
import Image1 from '../../assets/category/earphone.png' ;
import Image2 from '../../assets/category/watch.png' ;
import Image3 from '../../assets/category/macbook.png' ;

const Category = () => {
  return (
    <div className='py-8'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* first col */}
                <div className=' py-10 pl-5 hover:scale-110 duration-500 cursor-pointer bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        {/* Text Content */}
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-300'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 tracking-wider mb-2'>Earphone</p>
                            <Button 
                            text="Browse"
                            bgColor={"bg-primary"}
                            textColor={"text-gray-300"}/>
                        </div>
                        {/* Image part */}
                        <img src={Image1} alt="Earphone" className='left-20 lg:left-5 w-[320px] h-[280px] absolute bottom-0' />
                    </div>

                </div>
                {/* Second col */}
                <div className='py-10 pl-5  hover:scale-110 duration-500 cursor-pointer bg-gradient-to-br from-amber-600 to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        {/* Text Content */}
                        <div className='mb-4 '>
                            <p className='mb-[2px] text-gray-300'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 tracking-wider mb-2'>Gadget</p>
                            <Button 
                            text="Browse"
                            bgColor={"bg-zinc-200"}
                            textColor={"text-amber-500"}/>
                        </div>
                        {/* Image part */}
                        <img src={Image2} alt="Watch" className='w-[320px] top-16 left-32 sm:top-20 sm:left-10 lg:left-20 lg:top-0  absolute bottom-0' />
                    </div>

                </div>
                {/* Third col */}
                <div className='sm:col-span-2 py-10 pl-5 hover:scale-110 duration-500 cursor-pointer  bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        {/* Text Content */}
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-300'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 tracking-wider mb-2'>Laptop</p>
                            <Button 
                            text="Browse"
                            bgColor={"bg-zinc-200"}
                            textColor={"text-primary"}/>
                        </div>
                        {/* Image part */}
                        <img src={Image3} alt="Laptop" className='w-[220px]  lg:w-[280px] xl:w-[360px] absolute top-1/2 -translate-y-1/2 right-6 lg:right-10  ' />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Category