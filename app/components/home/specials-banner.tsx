import { SpecialsCard } from "../menu-item-card";
import { markazi } from "../../fonts";
import { Menu } from "lucide-react";

export default function WeeklySpecials() {
    return (
        <div className='py-6 px-10 bg-[#F8F9FA]'>
            <h1 className={`text-6xl ${markazi.className}`}>Weekly Specials</h1>
            <SpecialsCard
                image="/salad.jpeg"
                title="Greek Salad"
                price="$12.99"
                description="The famous Greek Salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons."
                buttontrue={true}
                buttonText="Order Now"
                path="/order"
            />
        </div>
    )
}