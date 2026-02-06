import { Hero } from "@/app/components/hero";

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col justify-start bg-zinc-50 font-sans dark:bg-black">
            <Hero
                title='Rewards'
                subtitle='Earn Perks with Every Visit'
                text='Join our rewards program and enjoy exclusive offers and discounts.'
                image='/bruschetta.png'
                alt='Bruschetta'
                buttontrue={false}
            />
            <h1 className='text-5xl'>Join our Rewards Program!</h1>
        </div>
    )
}