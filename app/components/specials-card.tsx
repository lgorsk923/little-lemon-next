"use client"

import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import React from "react"

export interface SpecialsCard {
    key: number;
    image: string;
    title: string;
    price?: string;
    description: string;
}


export function SpecialsCard({
    image, title, price, description
}: SpecialsCard) {
    const [expanded, setExpanded] = React.useState(false)
    const [canExpand, setCanExpand] = React.useState(false)
    const descriptionRef = React.useRef<HTMLDivElement | null>(null)

    React.useEffect(() => {
        if (expanded) return

        const frame = window.requestAnimationFrame(() => {
            const el = descriptionRef.current
            if (!el) return
            setCanExpand(el.scrollHeight > el.clientHeight + 1)
        })

        return () => window.cancelAnimationFrame(frame)
    }, [description, expanded])

    return (
        <Card className="relative mx-auto md:mx-0 flex flex-col h-[280px] md:h-[330px] lg:h-[350px] max-h-[280px] md:max-h-[330px] lg:max-h-[350px] w-full max-w-[300px] lg:max-w-full xl:max-w-[280px] overflow-hidden bg-[#D9D9D9] pt-0 md:pb-3 lg:pb-6">
            <div className="flex w-full items-center justify-center">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={400}
                    className="relative z-20 aspect-video w-full rounded-t-xl object-cover object-center h-[140px] md:h-[180px] lg:h-[200px]"
                />
            </div>
            <CardHeader className="flex-1 content-start px-3 md:px-3 lg:px-6 gap-0 md:gap-y-1 md:gap-x-1 lg:gap-y-1 lg:gap-x-2">
                {price && (
                    <CardAction className="-mt-1">
                        <Badge variant="ghost" className="items-start text-sm text-amber-500 md:ps-0 md:pe-0 lg:ps-2 lg:pe-2">{price}</Badge>
                    </CardAction>
                )}
                <CardTitle>{title}</CardTitle>
                <CardDescription ref={descriptionRef} className={`col-span-2 ${expanded ? "line-clamp-none" : "line-clamp-3"}`}>
                    {description}
                </CardDescription>
                {canExpand && (
                    <button
                        type="button"
                        onClick={() => setExpanded((prev) => !prev)}
                        className="col-span-2 mt-1 md:mt-0 w-fit text-xs font-semibold text-[#495D57] hover:underline"
                    >
                        {expanded ? "Show less" : "See more"}
                    </button>
                )}
                <div className="col-span-2 h-3 md:h-0" aria-hidden="true" />
            </CardHeader>
        </Card>
    )
}
