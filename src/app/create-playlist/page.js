"use client"
import React from 'react'
import design from "@/../../public/design1.svg"
import download from "@/../../public/download.svg"
import close from "@/../../public/close.svg"

const page = () => {
    return (
        <div className='w-11/12 m-auto mt-9 flex flex-col gap-16'>
            <h1 className='text-3xl font-semibold'>Create a new playlist</h1>
            <div className='flex gap-16'>
                <div>
                    <div className='relative h-[26rem] w-[26rem] rounded-lg border border-dashed border-white'>
                        <div className='absolute inset-0 flex flex-col gap-2 justify-center items-center'>
                            <img src={download?.src} alt="upload" />
                            <p>Drop an image here</p>
                        </div>

                        <input type="file" name="file" className='h-full w-full opacity-0 z-10 cursor-pointer' />
                    </div>
                </div>
                <form className='flex flex-col gap-6 flex-1'>
                    <input type="text" name="name" placeholder='Title' className='bg-[#224957] text-sm p-3 px-4 rounded-lg text-white' />
                    {/* <textarea name="description" placeholder='Description' className='bg-[#224957] text-sm p-3 px-4 rounded-lg text-white resize-none h-24' ></textarea> */}
                    <div className='flex flex-col gap-4 bg-[#224957] text-sm p-3 pt-4 px-4 rounded-lg text-white'>
                        <h4>Play list</h4>
                        <div className='flex flex-col gap-3 pb-2'>
                            <div className='flex gap-2 items-center pt-3 border-t border-[#44545A]'>
                                <img src="https://i.ytimg.com/vi/8-E1LbChJ88/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDC_3JVDk5vhJqUL1cMZeRAtocOYw" alt="thumbnail" className='rounded-md h-12' />
                                <p className='text-[12px] h-10 overflow-hidden'>LONG DRIVE Bollywood Mix - Arijit Singh | Full Album | 2 Hour Nonstop | Apna Bana Le, Zaalima & More</p>
                                <button type="button" className='bg-[#2BD17E] text-sm rounded-lg p-3'>
                                    <img src={close?.src} alt="close" className='h-5 w-5' />
                                </button>
                            </div>
                            <div className='flex gap-2 items-center pt-3 border-t border-[#44545A]'>
                            <img src="https://i.ytimg.com/vi/eL2vQyP6DQE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfTBfNpzqm7HIuQyi0qANM4Rk7Bw" alt="thumbnail" className='rounded-md h-12' />
                                <p className='text-[12px] h-10 overflow-hidden'>LONG DRIVE Bollywood Mix - Arijit Singh | Full Album | 2 Hour Nonstop | Apna Bana Le, Zaalima & More</p>
                                <button type="button" className='bg-[#2BD17E] text-sm rounded-lg p-3'>
                                    <img src={close?.src} alt="close" className='h-5 w-5' />
                                </button>
                            </div>
                            <div className='flex gap-2 items-center pt-3 border-t border-[#44545A]'>
                            <img src="https://i.ytimg.com/vi/niVMze3HAyY/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IC8oEzAP&rs=AOn4CLBRcNiemV9QuYoIDXNEfMd78_XDwA" alt="thumbnail" className='rounded-md h-12' />
                                <p className='text-[12px] h-10 overflow-hidden'>LONG DRIVE Bollywood Mix - Arijit Singh | Full Album | 2 Hour Nonstop | Apna Bana Le, Zaalima & More</p>
                                <button type="button" className='bg-[#2BD17E] text-sm rounded-lg p-3'>
                                    <img src={close?.src} alt="close" className='h-5 w-5' />
                                </button>
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <button type="button" className='w-full border border-white text-sm p-3 px-4 rounded-lg text-white'>Discard</button>
                        <button type="submit" className='w-full bg-[#2BD17E] text-sm p-3 px-4 rounded-lg text-white'>Create</button>
                    </div>
                </form>
                <form className='flex flex-col gap-6 w-96'>
                    <input type="text" name="search" placeholder='Search' className='bg-[#224957] text-sm p-3 px-4 rounded-lg text-white' />
                    <div className='bg-[#224957] text-sm p-3 rounded-lg text-white'>
                        <img src="https://i.ytimg.com/vi/8-E1LbChJ88/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDC_3JVDk5vhJqUL1cMZeRAtocOYw" alt="thumbnail" className='rounded-md' />
                        <p className='py-2 pb-1'>LONG DRIVE Bollywood Mix - Arijit Singh | Full Album | 2 Hour Nonstop | Apna Bana Le, Zaalima & More</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <button type="button" className='w-full border border-white text-sm p-3 px-4 rounded-lg text-white'>Cancle</button>
                        <button type="submit" className='w-full bg-[#2BD17E] text-sm p-3 px-4 rounded-lg text-white'>Add</button>
                    </div>
                </form>
            </div>
            <img src={design?.src} alt="design" className='absolute bottom-0 left-0 w-full' />
        </div>
    )
}

export default page