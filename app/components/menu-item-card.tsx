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

interface CardProps {
    image: string;
    title: string;
    price?: string;
    description: string;
    buttontrue: boolean;
    buttonText?: string;
    path?: string;
}


export function SpecialsCard({
    image, title, price, description, buttontrue, buttonText, path
}: CardProps) {
    return (
        <Card className="relative mx-auto w-full max-w-[300px] overflow-hidden bg-[#D9D9D9] pt-0">
            <Image
                src={image}
                alt={title}
                width={400}
                height={400}
                className="relative z-20 aspect-video w-full rounded-t-xl object-cover"
            />
            <CardHeader>
                {price && (
                    <CardAction className="-mt-1">
                        <Badge variant="ghost" className="items-start text-sm text-amber-500">{price}</Badge>
                    </CardAction>
                )}
                <CardTitle>{title}</CardTitle>
                <CardDescription className='col-span-2'>
                    {description}
                </CardDescription>
            </CardHeader>
            {buttontrue && path && (
                <CardFooter>
                    <Link href={path}>
                        <Button variant="outline" className="w-full">
                            {buttonText}
                        </Button>
                    </Link>
                </CardFooter>
            )}
        </Card>
    )
}
