import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
     <div>
        <div className="container">
            <div className='h-40 bg-gray-400 flex flex-start items-center font-[3.2rem] pl-5' >
                <NavLink to="/"> Home</NavLink>/{title}

            </div>
        </div>
     </div>
  )
}

export default PageNavigation