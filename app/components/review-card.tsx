import Image from "next/image"
import { ReviewInfo } from "@/app/lib/reviews"

export default function ReviewCard(data: ReviewInfo) {
    return (
        <div className='w-4/5 self-center justify-self-center bg-[#F8F9FA] px-6 py-4'>
            <div className='grid grid-cols-7 gap-x-4'>
                <div className='relative col-span-1 h-10 w-10'>
                    <Image
                        src={data.image}
                        alt={`customer image- ${data.name}`}
                        fill
                        sizes="96px"
                        className='rounded-full object-cover'
                    />
                </div>
                <h1 className='col-span-4 flex flex-col self-end font-bold justify-center ps-2'>{data.name}</h1>
                <h1 className='col-span-2 flex flex-col justify-self-end justify-center'>{data.rating}/5⭐</h1>
            </div>
            <h1 className='text-sm pt-2'>{data.text}</h1>
        </div>
    )
}