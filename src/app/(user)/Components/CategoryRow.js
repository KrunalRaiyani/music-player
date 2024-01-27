import React from 'react'
import Card from './Card'

const CategoryRow = () => {
    return (
        <div>
            <div className='card-container flex gap-6 overflow-auto scroll-smooth snap-x'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default CategoryRow