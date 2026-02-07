import { Hero } from "@/app/components/hero";

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col justify-start bg-zinc-50 font-sans dark:bg-black">
            <Hero
                title='Order Online'
                subtitle='Pickup or Delivery'
                text='Place your order online and enjoy Little Lemon at home. Or if you prefer, join us in house. Click below to make a reservation.'
                image='/takeout-order.jpeg'
                alt='Takeout Food'
                imageWidth={275}
                buttontrue={true}
                path='/pages/reservations'
                buttonText='Make a reservation'
            />
            <h1 className='text-5xl'>Order Online</h1>
        </div>
    )
}