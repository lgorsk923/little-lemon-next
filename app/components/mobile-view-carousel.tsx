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
import { SpecialsCard } from "./specials-card";
import { ReviewInfo } from "../lib/reviews";
import ReviewCard from "./review-card";

interface CarouselProps {
    cards: SpecialsCard[] | ReviewInfo[];
    className?: string;
}

// Type guard to check if a card is a SpecialsCard
function isSpecialsCard(card: SpecialsCard | ReviewInfo): card is SpecialsCard {
    return 'title' in card && 'description' in card;
}

// Type guard to check if a card is a ReviewInfo
function isReviewInfo(card: SpecialsCard | ReviewInfo): card is ReviewInfo {
    return 'name' in card && 'rating' in card;
}


export default function SpecialsCarousel({ cards, className }: CarouselProps) {
    const [isLarge, setIsLarge] = React.useState(false)
    const [isLgUp, setIsLgUp] = React.useState(false)
    const isReviewCarousel = cards.length > 0 && isReviewInfo(cards[0])

    React.useEffect(() => {
        const mdMq = window.matchMedia("(min-width: 768px)")
        const lgMq = window.matchMedia("(min-width: 1024px)")

        const onMdChange = (e: MediaQueryListEvent) => setIsLarge(e.matches)
        const onLgChange = (e: MediaQueryListEvent) => setIsLgUp(e.matches)

        setIsLarge(mdMq.matches)
        setIsLgUp(lgMq.matches)

        if (mdMq.addEventListener) mdMq.addEventListener("change", onMdChange)
        else mdMq.addListener(onMdChange)

        if (lgMq.addEventListener) lgMq.addEventListener("change", onLgChange)
        else lgMq.addListener(onLgChange)

        return () => {
            if (mdMq.removeEventListener) mdMq.removeEventListener("change", onMdChange)
            else mdMq.removeListener(onMdChange)

            if (lgMq.removeEventListener) lgMq.removeEventListener("change", onLgChange)
            else lgMq.removeListener(onLgChange)
        }
    }, [])

    const showArrows = isReviewCarousel
        ? (isLgUp ? cards.length > 3 : isLarge ? cards.length > 2 : cards.length > 1)
        : !(isLarge && cards.length <= 3)
    return (
        <Carousel
            className={`${isReviewCarousel ? "w-[80vw] lg:w-[92vw] xl:w-[90vw] max-w-none" : "w-[210px] md:w-6/7 xl:max-w-5xl"} md:mx-0 justify-self-center ${className ?? ""}`}
            opts={isReviewCarousel ? { align: "start", slidesToScroll: 1 } : { align: "start" }}
            plugins={[
                Autoplay({
                    delay: 3000,
                })
            ]}>
            <CarouselContent className={`ml-0 ${isReviewCarousel ? "md:-ml-4 lg:-ml-4 xl:-ml-4" : "md:-ml-6 lg:-ml-4"}`}>
                {cards.map((card, index) => (
                    <CarouselItem
                        key={index}
                        className={`${isReviewCarousel ? "md:basis-1/2 lg:basis-1/3 xl:basis-[32%] md:pl-4 lg:pl-4 xl:pl-4" : "md:basis-1/3 md:pl-6 lg:pl-4"} basis-full shrink-0 pl-0`}
                    >
                        {isSpecialsCard(card) && (
                            <SpecialsCard
                                key={card.key}
                                image={card.image}
                                title={card.title}
                                price={card.price}
                                description={card.description}
                            />
                        )}
                        {isReviewInfo(card) && (
                            <ReviewCard
                                key={card.key}
                                image={card.image}
                                name={card.name}
                                text={card.text}
                                rating={card.rating}
                            />
                        )}
                    </CarouselItem>
                ))}
            </CarouselContent>
            {showArrows && (
                <>
                    <CarouselPrevious className="-left-10" />
                    <CarouselNext className="-right-10" />
                </>
            )}
        </Carousel>
    )
}
