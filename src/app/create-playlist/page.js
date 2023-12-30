import React from 'react'
import design from "@/../../public/design1.svg"
import download from "@/../../public/download.svg"

const page = () => {
    return (
        <div className='w-11/12 m-auto mt-16 flex flex-col gap-16'>
            <h1 className='text-3xl font-semibold'>Create a new playlist</h1>
            <div className='flex gap-16'>
                <div>
                    <div className='relative h-96 w-96 rounded-lg border border-dashed border-white'>
                        <div className='absolute inset-0 flex flex-col gap-2 justify-center items-center'>
                            <img src={download?.src} alt="upload" />
                            <p>Drop an image here</p>
                        </div>

                        <input type="file" name="file" className='h-full w-full opacity-0 z-10 cursor-pointer' />
                    </div>
                </div>
                <form className='flex flex-col gap-6 w-80'>
                    <input type="text" name="name" placeholder='Title' className='bg-[#224957] text-sm p-3 px-4 rounded-lg text-white' />
                    <textarea name="description" placeholder='Description' className='bg-[#224957] text-sm p-3 px-4 rounded-lg text-white resize-none h-24' ></textarea>
                    <div className='flex gap-4 items-center'>
                        <button type="submit" className='w-full border border-white text-sm p-3 px-4 rounded-lg text-white'>Cancle</button>
                        <button type="submit" className='w-full bg-[#2BD17E] text-sm p-3 px-4 rounded-lg text-white'>Submit</button>
                    </div>
                </form>
            </div>
            <img src={design?.src} alt="design" className='absolute bottom-0 left-0 w-full' />
        </div>
    )
}

export default page