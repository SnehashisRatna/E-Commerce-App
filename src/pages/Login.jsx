import React from 'react'
import contact from '../assets/aboutPage/contact.svg'
import { IoPersonSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import Button from '../Components/Shared/Button';





const Contact = () => {
  return (
    <div>
      <div className="container translate-y-44  w-full h-screen">
        <div className='sm:flex sm:gap-20 text-center sm:text-left sm:items-center justify-center '>

        {/* SVG part */}
        <div className='mb-10 sm:mb-5 lg:mb-0'>
          <h1 className='text-5xl font-bold tracking-wide text-gray-700 -translate-y-16'>
            Contact Us
          </h1>
          <div className='w-[360px] sm:w-[720px]'>
            <img className='' src={contact} alt="Cono" />
          </div>
        </div>

        {/* Cntact form */}
        <div className='flex flex-col items-center space-y-4'>
          <input type="text"  name="Name" id="" placeholder='Name' className='text-xl  font-semibold  bg-gray-700 dark:bg-zinc-200 dark:text-gray-700 text-zinc-200 w-[280px] sm:w-[520px] pl-4 py-3 border rounded-2xl transition-all duration-500' />
          <input type="email" name="" id="" placeholder='Email' className='text-xl font-semibold bg-gray-700 text-zinc-200 dark:bg-zinc-200 dark:text-gray-700  w-[280px] sm:w-[520px] pl-4 py-3 border rounded-2xl transition-all duration-500' />
          <input type="text" name="" id="" placeholder='Phone' className='text-xl font-semibold bg-gray-700 text-zinc-200 dark:bg-zinc-200 dark:text-gray-700 w-[280px] sm:w-[520px] pl-4 py-3 border rounded-2xl transition-all duration-500' />

         {/* <div className='flex items-center gap-3 bg-gray-700 text-zinc-200 w-[520px] pl-4 py-3 border rounded-2xl'>
            <IoPersonSharp />
            <h1 className='text-xl font-semibold'>Name</h1>
         </div>
         <div className='flex items-center gap-3 bg-gray-700 text-zinc-200 w-[520px] pl-4 py-3 border rounded-2xl'>
         <IoMail />
            <h1 className='text-xl font-semibold'>Email</h1>
         </div>
         <div className='flex items-center gap-3 bg-gray-700 text-zinc-200 w-[520px] pl-4 py-3 border rounded-2xl'>
            <FaPhone />
            <h1 className='text-xl font-semibold'>Phone No.</h1>
         </div> */}
         <textarea 
            id="w3review" 
            name="w3review" 
            rows="4" 
            cols="50"
            className='bg-gray-700 text-zinc-200 dark:bg-zinc-200 dark:text-gray-700 w-[280px] sm:w-[520px] border rounded-2xl text-xl font-semibold p-4 transition-all duration-500'
            > Wirte Your Message here.</textarea>
            {/* <button type="submit" className='bg-gray-700'></button> */}
            <div className='w-[320px] sm:w-[520px] border rounded-2xl text-xl border-none font-semibold p-4 transition-all duration-500'>

            <Button text="Submit"
                    bgColor="bg-brandBlue"
                    textColor="text-zinc-200"
                    />
                    </div>

           {/* <button type="submit">Submit</button>           */}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact