"use client"
import React from 'react'
import playIcon from '@/../../public/images/hoverPlayIcon.svg'
import { useRouter } from 'next/navigation'

const Card = ({ img, title, videoLink, category, index }) => {

    const router = useRouter()

    return (
        <div className='min-w-64 max-w-64 flex flex-col justify-between gap-1.5 cursor-pointer snap-start' onClick={() => router.push(`/play-video/${category}/${index + 1}`)}>
            <div className='relative'>
                <img src={img} alt="thumbnail" className='rounded-md w-full' />
                <div className='imgCard absolute inset-0 flex items-center justify-center overflow-hidden'><img src={playIcon.src} alt="icon" className="innerCard h-3 scale-110 opacity-0" />
                </div>
            </div>
            <p className='text-[12px] overflow-hidden line-clamp-2'>{title}</p>
        </div>
    )
}

export default Card