import React from 'react'
import design from "@/../../public/design1.svg"

const layout = ({children}) => {
  return (
    <div className='bg-[#093545] h-screen text-white flex items-center justify-center w-full'>
    <div>{children}</div>
    <img src={design?.src} alt="design" className='absolute bottom-0 left-0 w-full' />
    </div>
  )
}

export default layout