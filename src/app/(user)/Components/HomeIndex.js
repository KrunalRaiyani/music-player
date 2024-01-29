"use client"
import React from 'react'
import dataObj from '../data'
import CategorySection from './CategorySection'

const HomeIndex = () => {

    console.log(dataObj)

    return (
        <div className="flex flex-col gap-12">
            {
                dataObj?.map((item, index) => {
                    return <CategorySection key={index} index={index} title={item?.title} list={item?.list} />
                })
            }
        </div>
    )
}

export default HomeIndex