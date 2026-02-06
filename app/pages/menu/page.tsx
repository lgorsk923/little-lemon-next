import { Hero } from "@/app/components/hero";

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col justify-start bg-zinc-50 font-sans dark:bg-black">
            <Hero
                title='Menu'
                subtitle='Fresh, Seasonal Favorites'
                text='Explore our Mediterranean-inspired menu crafted with fresh, locally sourced ingredients.'
                image='/bruschetta.png'
                alt='Bruschetta'
                buttontrue={false}
            />
            <h1 className='text-5xl'>Menu</h1>
        </div>
    )
}