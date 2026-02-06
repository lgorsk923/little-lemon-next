import { Hero } from "@/app/components/hero";

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col justify-start bg-zinc-50 font-sans dark:bg-black">
            <Hero
                title='Reservations'
                subtitle='Save Your Table'
                text='Reserve a table for a relaxed, memorable meal at Little Lemon.'
                image='/bruschetta.png'
                alt='Bruschetta'
                buttontrue={false}
            />
            <h1 className='text-5xl'>Make a Reservation Today!</h1>
        </div>
    )
}