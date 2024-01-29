"use client"
import React from 'react'
import Card from '../../Components/Card'
import dataObj from '../../data'

const page = ({ params }) => {


    let category = dataObj?.[Number(params?.all?.[1]) - 1]

    return (
        <div className="w-[95%] mt-6 mx-auto flex flex-col gap-8">
            <h2 className="text-2xl">{category?.title}</h2>
            <div className='card-container grid grid-cols-5 grid-rows-3 gap-8 gap-y-10'>
                {
                    category?.list?.map((item, index) => {
                        return <Card key={index} img={item?.img} title={item?.title} videoLink={item?.videoLink} category={category?.title} />
                    })
                }
            </div>
        </div>
    )
}

export default page