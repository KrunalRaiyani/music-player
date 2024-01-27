import React from 'react'
import playIcon from '@/../../public/images/hoverPlayIcon.svg'

const Card = () => {
    return (
        <div className='min-w-64 flex flex-col justify-between gap-1.5 cursor-pointer snap-start'>
            <div className='relative'>
                <img src="https://i.ytimg.com/vi/zfLH90iXuns/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5zg4RJThO2a2jSPzzL9dcZVQjTg" alt="thumbnail" className='rounded-md w-full' />
                <div className='imgCard absolute inset-0 flex items-center justify-center overflow-hidden'><img src={playIcon.src} alt="icon" className="innerCard h-3 scale-110 opacity-0" />
                </div>
            </div>
            <p className='text-[12px] overflow-hidden line-clamp-2'>LONG DRIVE Bollywood Mix - Arijit Singh | Full Album | 2 Hour Nonstop | Apna Bana Le, Zaalima & More</p>
        </div>
    )
}

export default Card