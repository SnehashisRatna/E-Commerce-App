import React from 'react'
import { NavLink } from 'react-router-dom';

const Product = ({curElem}) => {
  const {id , name , image , price , category} =  curElem ;
  return (
    <NavLink to={`/singleproduct/${id}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7"> 
               {/* Blog Card  */}
               {
                  
                
                   <div
                       data-aos="fade-up"
                       data-aos-delay = {data.aosDelay} 
                     //   key={data.title} 
                       className='bg-white dark:bg-gray-900'>
                    {/* Image Section */}
                    <figure className='overflow-hidden rounded-2xl mb-2'>
                       <img src={image} alt={name} 
                        className='w-full h-[220px] object-cover rounded-2xl hover:scale-110 duration-500'
                       />
                       <figcaption className=''>{category}</figcaption>
                    </figure>
                    {/* Content Section */}
                    <div className='flex items-center justify-between'>
                       <p className='text-xs text-gray-500'>{name}</p>
                       <p className='font-bold line-clamp-1'>{price}</p>
                    </div>
                   </div>
               
               }
          </div>
    </NavLink>
  )
}

export default Product