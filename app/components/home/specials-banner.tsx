import { markazi } from "../../fonts";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { specialsData } from "@/app/lib/specials-data";
import MobileViewCarousel from "../mobile-view-carousel";
export default function WeeklySpecials() {

    return (
        <div className='pt-0 pb-5 lg:px-3 xl:px-50 lg:py-10 xl:py-10 bg-[#F8F9FA]'>
            <div className='grid grid-cols-5 items-start gap-0 p-3'>
                <h1 className={`text-5xl col-span-5 md:text-6xl md:col-span-5 justify-self-start ${markazi.className}`}>Weekly Specials</h1>
            </div>
            <MobileViewCarousel cards={specialsData} />
            <Link href='/pages/order' className='flex justify-end mt-5 mb-3 mr-3 md:mt-6'>
                <Button variant='ghost' className='hero_button rounded-2xl justify-self-end' style={{ margin: 0 }}>Order Now</Button>
            </Link>
        </div>
    )
}