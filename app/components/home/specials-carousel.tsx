"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import React from "react"
import Autoplay from "embla-carousel-autoplay"
import { SpecialsCard } from "../specials-card"
import { specialsData } from "@/app/lib/specials-data"

export default function SpecialsCarousel() {
    const [isLarge, setIsLarge] = React.useState(false)

    React.useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)")
        const onChange = (e: MediaQueryListEvent) => setIsLarge(e.matches)
        setIsLarge(mq.matches)
        if (mq.addEventListener) mq.addEventListener("change", onChange)
        else mq.addListener(onChange)
        return () => {
            if (mq.removeEventListener) mq.removeEventListener("change", onChange)
            else mq.removeListener(onChange)
        }
    }, [])

    const showArrows = !(isLarge && specialsData.length <= 3)
    return (
        <Carousel className="w-[210px] md:mx-0 md:w-6/7 xl:max-w-5xl justify-self-center"
            plugins={[
                Autoplay({
                    delay: 3000,
                })
            ]}>
            <CarouselContent className="ml-0">
                {specialsData.map((special, index) => (
                    <CarouselItem key={index} className=" md:pl-3 basis-full md:basis-1/3 shrink-0 pl-0">
                        <SpecialsCard
                            key={special.key}
                            image={special.image}
                            title={special.title}
                            price={special.price}
                            description={special.description}
                        />
                    </CarouselItem>
                ))})
            </CarouselContent>
            {showArrows && (
                <>
                    <CarouselPrevious />
                    <CarouselNext />
                </>
            )}
        </Carousel>
    )
}
