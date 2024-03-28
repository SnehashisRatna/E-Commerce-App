import React from 'react'

function Background({data}) {
  return (
    <>
    <div className=' absolute z-[2] w-full h-full dark:bg-zinc-700 transition-all duration-500'>
      <nav className=' absolute -translate-y-8 w-full py-10  text-2xl text-zinc-400 flex items-center justify-center font font-semibold'>
        {data}
      </nav>
         <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[80%] text-[13vw] text-zinc-900 font-semibold leading-none tracking-tighter   '>{data}</h1>  
    </div>
    </>
  )
}

export default Background