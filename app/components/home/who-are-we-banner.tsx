import { markazi } from "@/app/fonts"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WhoAreWe() {

    return (
        <div className=" py-3 md:py-6 px-3md:px-20 bg-[#495D57]">
            <div className="grid grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className='hero__title'>Who Are We?</h1>
                    <p className='text-white text-lg'>Little Lemon is a family-owned restaurant just outside downtown Chicago. All of our ingredients are locally grown and prepared by our two excellent chefs Adrian and Mario</p>
                    <Link href='/pages/about' className='mt-3 inline-block'>
                        <Button variant='ghost' className='hero_button rounded-2xl'>Learn More</Button>
                    </Link>
                </div>
            </div>
        </div>

    )
}