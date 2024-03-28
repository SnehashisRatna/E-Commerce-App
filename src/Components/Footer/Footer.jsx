import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaLocationArrow, FaTwitter } from 'react-icons/fa6'
const FooterLinks =[
    {
        title:"Home",
        link:"/#" ,
    },
    {
        title:"About",
        link:"/#about" ,
    },
    {
        title:"Contact",
        link:"/#contact" ,
    },
    {
        title:"Blog",
        link:"/#blog" ,
    },
]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                {/* Company Detailes */}
                <div  data-aos="zoom-out" 
                           data-aos-duration = "900"
                        //    data-aos-once = "true"
                            className='py-8 px-4'>
                    <a href="#"
                    className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
                     EShop   
                    </a>
                    <p  className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint reprehenderit iste est corrupti?
                    </p>
                    <p className='text-gray-800 dark:text-gray-300 transition-all duration-500 mt-4 '>
                        Made with Love by Our Team.
                    </p>
                </div>
                {/* Footer Links */}
                {/* First Col */}
                <div  data-aos="zoom-out" 
                           data-aos-duration = "900"
                        //    data-aos-once = "true"
                            className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <ul className='space-y-3 translate-y-10'>
                            {
                                FooterLinks.map((data,index)=>(
                                    <li key={index}>
                                       <a href={data.link}
                                          className='text-gray-900  hover:text-gray-400 dark:text-gray-600  dark:hover:text-gray-200 duration-500 transition-all'>{data.title}</a>
                                    </li>
                                ))

                            }
                        </ul>
                    </div>
                    {/* Second Col */}
                    <div className='py-8 px-4'>
                        <ul className='space-y-3 translate-y-10'>
                            {
                                FooterLinks.map((data,index)=>(
                                    <li key={index}>
                                       <a href={data.link}
                                          className='text-gray-900  hover:text-gray-400 dark:text-gray-600  dark:hover:text-gray-200 duration-500 transition-all'>{data.title}</a>
                                    </li>
                                ))

                            }
                        </ul>
                    </div>
                    {/* Company Address */}
                    <div  data-aos="zoom-out" 
                           data-aos-duration = "900"
                        //    data-aos-once = "true"
                            className='py-8 px-4 col-span-2   sm:col-auto '>
                         <div className='translate-y-10'>
                            <div className='flex items-center gap-3  '>
                                <FaLocationArrow/>
                                <p className='text-gray-900 dark:text-gray-300 '>Bhubaneswar , Odisha</p>
                            </div>
                            <div className='flex items-center gap-3 mt-6'>
                                <FaMobileAlt/>
                            <p className='text-gray-900 dark:text-gray-300 '>+91 1234567890</p>
                            </div>

                            {/* Social Link */}
                            <div className='flex items-center mt-6 gap-4'>
                            <div>
                                <a href="#"> 
                                <FaInstagram className=' text-3xl hover:text-primary duration-500'/>
                                </a>
                            </div>
                            <div>
                                <a href="#"> 
                                <FaFacebook className='text-3xl hover:text-primary duration-500'/>
                                </a>
                            </div>
                            <div>
                                <a href="#"> 
                                <FaLinkedin className='text-3xl hover:text-primary duration-500'/>
                                </a>
                            </div>
                            <div>
                                <a href="#"> 
                                <FaTwitter className='text-3xl hover:text-primary duration-500'/>
                                </a>
                            </div>
                            <div>
                                <a href="#"> 
                                <FaGithub className='text-3xl hover:text-primary duration-500'/>
                                </a>
                            </div>
                            </div>
                           
                         </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer