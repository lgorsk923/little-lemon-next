import { Hero } from "@/app/components/hero";

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col justify-start bg-zinc-50 font-sans dark:bg-black">
            <Hero
                title='Menu'
                subtitle='Fresh, Seasonal Favorites'
                text='Explore our Mediterranean-inspired menu crafted with fresh, locally sourced ingredients.'
                image='/food.jpg'
                alt='Mediterranean Food'
                buttontrue={true}
                imageWidth={375}
                path="/pages/order"
                buttonText="Order Now!"
            />
            <h1 className='text-5xl'>Menu</h1>
        </div>
    )
}