import { SpecialsCard } from "../menu-item-card";
import { markazi } from "../../fonts";
import { specialsData } from "@/app/lib/specials-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import next from "next";
export default function WeeklySpecials() {

    return (
        <div className='py-6 px-20 bg-[#F8F9FA]'>
            <div className='grid grid-cols-5'>
                <h1 className={`text-6xl col-span-2 justify-self-end ${markazi.className}`}>Weekly Specials</h1>
                <Link href='/pages/order' className=' col-span-2 justify-end ml-auto'>
                    <Button variant='ghost' className='hero_button mt-3 rounded-2xl'>Order Now</Button>
                </Link>
            </div>
            <div className="flex items-stretch justify-between gap-6 w-4/7 mx-auto mt-4 mb-10 self-center">
                {specialsData.map(special => (
                    <SpecialsCard
                        key={special.key}
                        image={special.image}
                        title={special.title}
                        price={special.price}
                        description={special.description}
                    />
                ))}
            </div>
        </div>
    )
}