import { markazi } from "../../fonts";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SpecialsCarousel from "./specials-carousel";
export default function WeeklySpecials() {

    return (
        <div className='py-3 md:py-6 md:px-20 bg-[#F8F9FA]'>
            <div className='grid grid-cols-5 items-start gap-0'>
                <h1 className={`text-3xl col-span-3 md:text-6xl md:col-span-2 justify-self-end ${markazi.className}`} style={{ margin: 0 }}>Weekly Specials</h1>
            </div>
            <SpecialsCarousel />
            <Link href='/pages/order' className='flex justify-end mt-3 mr-3 mb-1 md:mt-6'>
                <Button variant='ghost' className='hero_button rounded-2xl justify-self-end' style={{ margin: 0 }}>Order Now</Button>
            </Link>
        </div>
    )
}