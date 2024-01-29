"use client"
import React, { useEffect, useState } from 'react'
import dataObj from '../../data'

const page = ({ params }) => {

    let category = decodeURI(params?.videoId?.[0])
    let songNo = decodeURI(params?.videoId?.[1])

    const [songsObj, setSongsObj] = useState({})
    const [currentPlay, setCurrentPlay] = useState("")

    useEffect(() => {
        dataObj?.map((item) => {
            item?.title === category && setSongsObj(item)
            item?.title === category && setCurrentPlay(item?.list?.[songNo - 1])
        })
    }, [])

    function getYouTubeVideoID(url) {
        let result = url?.split(/[=&]/)[1];
        return result
    }

    console.log(songsObj)

    return (
        <div className='w-[95%] mt-6 mx-auto flex justify-between gap-12'>
            <div className='playVideo flex flex-col gap-4 cursor-pointer snap-start'>
                {/* <div> */}
                <iframe className='rounded-lg' height="480" src={"https://www.youtube.com/embed/" + getYouTubeVideoID(currentPlay?.videoLink) + "?autoplay=1&rel=0"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                {/* </div> */}
                <p className='text-lg overflow-hidden line-clamp-2'>{currentPlay?.title}</p>
            </div>
            <div className='flex flex-col gap-4'>
                {
                    songsObj?.list?.map((item, index) => {
                        return <div className='flex gap-4 cursor-pointer snap-start' key={index} onClick={() => setCurrentPlay(item)} >
                            <img src={item?.img} alt="thumbnail" className='rounded-md w-44' />
                            <p className='text-sm overflow-hidden line-clamp-5'>{item?.title}</p>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default page