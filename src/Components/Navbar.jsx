import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
import { NavLink } from 'react-router-dom';
import Login from '../pages/Login.jsx'
import SignUp from '../pages/SignUp.jsx'

// import { BrowserRouter } from 'react-router-dom';


const MenuLinks = [
    {
        id:1,
        name:"Home",
        link:"/",
    },
    {
        id:2,
        name:"Product",
        link:"/product",
    },
    {
        id:3,
        name:"About",
        link:"/about",
    },
    {
        id:4,
        name:"Contact",
        link:"/contact",
    },
]

const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white transition-all duration-700 relative z-40'>
        <div className='py-4'>
            <div className="container flex items-center justify-between ">
                {/* Logo and Link Section */}
                <div className='flex items-center gap-4'>
                    {/* Logo */}
                    <a href="#"
                    className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
                     EShop   
                    </a>
                    {/* Menu Item */}
                    <div className='hidden lg:block'>
                        <ul className='flex items-center gap-4'>
                            {
                                MenuLinks.map((data,index)=>(
                                  <li key={index}>
                                    <NavLink to={data.link} 
                                        className="inline-block hover:scale-110 duration-300 px-4 font-semibold text-gray-500
                                        hover:text-black
                                        dark:hover:text-white"                                    
                                    >
                                        {data.name}

                                    </NavLink>
                                    {/* <a href={data.link} className='inline-block hover:scale-110 duration-300 px-4 font-semibold text-gray-500
                                    hover:text-black
                                    dark:hover:text-white '>
                                    {" "}
                                    {data.name}</a> */}
                                  </li>
                                ))
                            }
                            {/* Dropdown */}
                            <li>
                                
                            </li>
                        </ul>
                    </div>
                     
                </div>
                {/* Navbar right Section */}
                <div className='flex items-center gap-4'>
                    {/* Search Bar Section */}
                    <div className='relative group hidden sm:block'>
                        <input type="text"
                        placeholder='Search'
                        className='search-bar ' />
                        <IoSearch className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3  duration-500' />
                    </div>
                    {/* <div>
                      <Login/>
                    </div>
                    <div>
                        <SignUp/>
                    </div> */}

                    {/* Order-btn-Section */}
                    <button className='relative p-3'>
                    <FaCartShopping  className='text-2xl text-gray-600 hover:text-primary hover:transition-all hover:duration-500  dark:text-gray-400'/>
                    <div className='w-4 h-4  bg-red-500 text-white rounded-full absolute top-1 right-1
                    flex items-center justify-center text-xs'>4</div>


                    </button>

                    {/* Dark Mode Sectiion */}
                    <div>
                        <DarkMode/>
                    </div>


                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar