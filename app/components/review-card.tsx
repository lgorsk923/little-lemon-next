"use client"

import Image from "next/image"
import React from "react"
import { ReviewInfo } from "@/app/lib/reviews"

export default function ReviewCard(data: ReviewInfo) {
    const [expanded, setExpanded] = React.useState(false)

    return (
        <div className='self-center justify-self-center bg-[#F8F9FA] px-4 md:px-5 py-4 rounded-lg w-full max-w-[290px] md:max-w-none'>
            <div className='grid grid-cols-7 gap-x-4'>
                <div className='relative col-span-1 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12'>
                    {data.image && <Image
                        src={data.image}
                        alt={`customer image- ${data.name}`}
                        fill
                        sizes="(max-width: 640px) 32px, (max-width: 768px) 40px"
                        className='rounded-full object-cover'
                    />}
                </div>
                <h1 className='col-span-4 flex flex-col self-end font-bold justify-center ps-4 md:ps-4'>{data.name}</h1>
                <h1 className='col-span-2 flex flex-col justify-self-end justify-center'>{data.rating}/5⭐</h1>
            </div>
            <p className={`text-sm pt-2 ${expanded ? '' : 'line-clamp-3 md:line-clamp-2'}`}>{data.text}</p>
            <button
                onClick={() => setExpanded(prev => !prev)}
                className='mt-1 text-xs font-semibold text-[#495D57] hover:underline focus:outline-none'
            >
                {expanded ? 'Show less' : 'Show more'}
            </button>
        </div>
    )
}