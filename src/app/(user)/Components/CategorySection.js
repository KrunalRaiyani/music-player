import React from 'react'
import CategoryRow from './CategoryRow'

const CategorySection = () => {
    return (
        <div className='flex flex-col justify-between gap-6'>
            <div className='flex justify-between items-end'>
                <h2 className="text-xl">Trending Songs</h2>
                <button className="text-[12px]">See All</button>
            </div>
            <CategoryRow />
        </div>
    )
}

export default CategorySection