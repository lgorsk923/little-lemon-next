import { Hero } from "@/app/components/hero";

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col justify-start bg-zinc-50 font-sans dark:bg-black">
            <Hero
                title='Order Online'
                subtitle='Pickup or Delivery'
                text='Place your order online and enjoy Little Lemon at home.'
                image='/bruschetta.png'
                alt='Bruschetta'
                buttontrue={false}
            />
            <h1 className='text-5xl'>Order Online</h1>
        </div>
    )
}