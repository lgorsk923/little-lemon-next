import { markazi } from "@/app/fonts"
import { reviewsData } from "@/app/lib/reviews"

import MobileViewCarousel from "../mobile-view-carousel"
export default function ReviewsBanner() {
    return (
        <div className={`bg-[#D9D9D9] pt-3 pb-5 md:pt-6 md:pb-8 md:px-4`}>
            <div className='grid grid-cols-5 items-start gap-0 p-3'>
                <h1 className={`text-3xl col-span-4 md:text-6xl md:col-span-3 justify-self-start ${markazi.className}`}>Customer Reviews</h1>
            </div>
            <MobileViewCarousel cards={reviewsData} />
        </div >
    )
}