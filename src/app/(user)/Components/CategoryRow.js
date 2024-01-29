"use client"
import React, { useRef } from 'react'
import Card from './Card'
import leftArr from '@/../../public/images/leftArr.svg'
import rightArr from '@/../../public/images/rithtArr.svg'

const CategoryRow = ({ list, category }) => {

    const containerRef = useRef(null);

    const scrollContainer = (dir) => {
        let scrollValue = 1500
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: dir === "left" ? -scrollValue : scrollValue,
            });
        }
    }

    return (
        <div className='relative'>
            <div className='flex items-center justify-between absolute inset-0 bottom-10 w-full'>
                <button className='bg-white w-9 h-9 rounded-full grid place-content-center relative right-5 z-10' onClick={() => scrollContainer("left")} >
                    <img src={leftArr.src} alt="icon" className='h-4' />
                </button>
                <button className='bg-white w-9 h-9 rounded-full grid place-content-center relative left-5 z-10' onClick={() => scrollContainer("right")} >
                    <img src={rightArr.src} alt="icon" className='h-4' />
                </button>
            </div>
            <div className='card-container flex gap-6 overflow-auto scroll-smooth snap-x' ref={containerRef}>
                {
                    list?.map((item, index) => {
                        return <Card key={index} index={index} img={item?.img} title={item?.title} videoLink={item?.videoLink} category={category} />
                    })
                }
            </div>
        </div>
    )
}

export default CategoryRow