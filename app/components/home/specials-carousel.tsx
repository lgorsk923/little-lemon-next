import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { SpecialsCard } from "../specials-card"
import { specialsData } from "@/app/lib/specials-data"

export default function SpecialsCarousel() {
    return (
        <Carousel className="w-[210px] md:mx-0 md:w-6/7 justify-self-center">
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
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
