import { markazi } from "@/app/fonts"
import { reviewsData } from "@/app/lib/reviews"
import ReviewCard from "../review-card"
export default function ReviewsBanner() {
    return (
        <div className={`bg-[#D9D9D9] py-10 px-20`}>
            <h1 className={`${markazi.className} text-5xl pb-4`}>Customer Reviews</h1>
            <div className='grid grid-cols-3'>
                {reviewsData.map((review) => {
                    const { key, ...rest } = review
                    return <ReviewCard key={key} {...rest} />
                })}
            </div>
        </div >
    )
}