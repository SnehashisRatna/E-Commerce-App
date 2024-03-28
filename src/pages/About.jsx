import React from 'react'
import Button from '../Components/Shared/Button'
import shopping from '../assets/aboutPage/yolo.svg'

const About = () => {
  return (
    <div>
      <div className="container w-full h-screen translate-y-32">
        <div className=" flex flex-col-reverse lg:flex-row items-center justify-center space-x-16 ">
          {/* Text Part */}
          <div className=' text-center sm:text-left w-[60%]'>
            <p className='text-lg mb-6'>Welcome To <span className='text-primary  font-semibold tracking-widest text-2xl uppercase sm:text-xl'>ESHOP</span></p>
            <h1 className='text-4xl font-bold mb-6'> 
              A better way to use your Gadjets
            </h1>
            <p className='text-lg text-gray-400 mb-6 font-semibold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem suscipit praesentium doloribus maiores temporibus incidunt aliquid accusamus velit est. Iusto. Lorem, ipsum dolor.
            </p>
            <p className='text-lg text-gray-400 mb-6 font-semibold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem suscipit praesentium doloribus maiores temporibus incidunt aliquid accusamus velit est. Iusto. Lorem, ipsum dolor.
            </p>
            <p className='text-lg text-gray-400 mb-6 font-semibold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem suscipit praesentium doloribus maiores temporibus incidunt aliquid accusamus velit est. Iusto. Lorem, ipsum dolor.
            </p>
            <p className='text-lg text-gray-400 mb-6 font-semibold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem suscipit praesentium doloribus maiores temporibus incidunt aliquid accusamus velit est. Iusto. Lorem, ipsum dolor.
            </p>
            <p className='text-lg text-gray-400 mb-6 font-semibold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem suscipit praesentium doloribus maiores temporibus incidunt aliquid accusamus velit est. Iusto. Lorem, ipsum dolor.
            </p>
           

            <div className='flex gap-x-4'>
            <Button  text="Contact Now" 
                                   bgColor="bg-brandBlue"
                                   textColor="text-gray-200"/>

             <Button  text="Learn More" 
                                   bgColor="bg-gray-500"
                                   textColor="text-gray-200"/>
            </div>
          </div>
          {/* SVG Part */}
            <div>
              
              <img src={shopping} alt="About Page" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About