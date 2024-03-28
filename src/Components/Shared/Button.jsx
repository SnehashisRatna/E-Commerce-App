import React from 'react'

const Button = ({text , bgColor,textColor , handler =()=>{}}) => {
  return (
    <button className={` ${bgColor} ${textColor}
             cursor-pointer hover:scale-105 font-bold  duration-500 py-2 px-7 rounded-full relative z-10 `}>
             {text}
    </button>
    )
}

export default Button