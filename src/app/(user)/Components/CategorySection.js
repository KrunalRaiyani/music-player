"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import CategoryRow from './CategoryRow'

const CategorySection = ({ title, list, index }) => {

    const router = useRouter()

    return (
        <div className='flex flex-col justify-between gap-6'>
            <div className='flex justify-between items-end'>
                <h2 className="text-xl">{title}</h2>
                <button className="text-[12px]" onClick={() => router.push(`/see-all/${title?.split(" ")?.join("-")?.toLowerCase()}/${index + 1}`)} >See All</button>
            </div>
            <CategoryRow list={list} category={title} />
        </div>
    )
}

export default CategorySection