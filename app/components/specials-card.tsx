import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link";

export interface CardProps {
    key: number;
    image: string;
    title: string;
    price?: string;
    description: string;
}


export function SpecialsCard({
    image, title, price, description
}: CardProps) {
    return (
        <Card className="relative mx-auto md:mx-0 flex flex-col h-[270px] md:h-[350px] max-h-[280px] md:max-h-[350px] w-full max-w-[300px] lg:max-w-full xl:max-w-[280px] overflow-hidden bg-[#D9D9D9] pt-0">
            <div className="flex w-full items-center justify-center">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={400}
                    className="relative z-20 aspect-video w-full rounded-t-xl object-cover object-center h-[140px] md:h-[180px] lg:h-[200px]"
                />
            </div>
            <CardHeader className="flex-1 content-start px-3 md:px-6 gap-0 md:gap-2">
                {price && (
                    <CardAction className="-mt-1">
                        <Badge variant="ghost" className="items-start text-sm text-amber-500">{price}</Badge>
                    </CardAction>
                )}
                <CardTitle>{title}</CardTitle>
                <CardDescription className="col-span-2 line-clamp-3 lg:line-clamp-none">
                    {description}
                </CardDescription>
            </CardHeader>
        </Card>
    )
}
