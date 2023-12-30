import React from 'react'

const page = () => {
  return (
    <div>
        <h1 className='text-[50px] font-semibold text-center'>Sign in</h1>       
        <form className='flex flex-col gap-6 mt-8 w-80'>
            <input type="email" name="email" placeholder='Email' className='bg-[#224957] text-sm p-3 px-4 rounded-lg text-white' />
            <input type="password" name="password" placeholder='Password' className='bg-[#224957] text-sm p-3 px-4 rounded-lg text-white' />
            <div className='flex items-center gap-2 text-sm justify-center'>
                <input type="checkbox" name="checkbox" className='h-3 w-3 cursor-pointer' />
                <p>Remember me</p>
            </div>
            <button type="submit" className='bg-[#2BD17E] text-sm p-3 px-4 rounded-lg text-white'>Login</button>
        </form>
    </div>
  )
}

export default page