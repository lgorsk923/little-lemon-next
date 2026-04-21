import { markazi } from "@/app/fonts"
import { reviewsData } from "@/app/lib/reviews"

import MobileViewCarousel from "../mobile-view-carousel"
export default function ReviewsBanner() {
    return (
        <div className={`bg-[#D9D9D9] px-5 pt-0 pb-10 lg:px-20`}>
            <div className='flex justify-center py-3'>
                <h1 className={`text-5xl md:text-6xl text-center ${markazi.className}`}>Customer Reviews</h1>
            </div>
            <MobileViewCarousel cards={reviewsData} />
        </div >
    )
}