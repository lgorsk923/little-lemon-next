import { Hero } from "@/app/components/hero";

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col justify-between bg-zinc-50 font-sans dark:bg-black">
            <Hero
                title='About Us'
                subtitle='Our Story'
                text='Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago, IL.'
                image='/restaurant_team.jpg'
                alt='Restaurant'
                buttontrue={false}
                imageWidth={350}
            />
            <h1 className='text-5xl'>About Little Lemon</h1>
        </div>
    )
}