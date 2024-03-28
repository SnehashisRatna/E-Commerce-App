import React, { useState } from 'react'
import DarkButton from '../assets/website/dark-mode-button.png'
import LightButton from '../assets/website/light-mode-button.png'

const DarkMode = () => {
    const [theme, settheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light")
    // Access to html element
    const element = document.documentElement ;
    console.log(element)
    
    // Set them to local storage and html element
    React.useEffect(()=>{
        localStorage.setItem("theme",theme);
        if(theme ==="dark"){
            element.classList.add("dark");
            element.classList.add("dark");
        }else{
            element.classList.remove("light");
            element.classList.remove("dark");

        }
    })
  return (
 
    <div className='relative'>
        <img onClick={()=> settheme(theme==="dark" ? "light" : "dark")} src={LightButton} alt="light-btn" className={`w-12 absolute right-0 z-10 cursor-pointer
        ${theme === "dark"?"opacity-0" : "opacity-100" }`} />

        <img onClick={()=> settheme(theme==="dark" ? "light" : "dark")} src={DarkButton} alt="dark-btn" className={`w-12 cursor-pointer`} />
    </div>
  )
}

export default DarkMode