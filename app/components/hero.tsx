import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
    title: string;
    subtitle: string;
    text: string;
    image: string;
    alt: string;
    path?: string;
    buttontrue: boolean;
    buttonText?: string;
    className?: string;
    contentClassName?: string;
    imageClassName?: string;
    imageWidth?: number;
    imageHeight?: number;
}

export function Hero({
    title, subtitle, text, image, alt, path,
    buttontrue, buttonText,
    className, contentClassName,
    imageClassName, imageWidth = 200, imageHeight = 225,
}: HeroProps) {
    return (
        <section
            className={cn("hero items-center justify-center text-white px-5 py-10", className)}
        >
            <div
                className="hero__bg"
                style={{ backgroundImage: `url(${image})` }}
                aria-hidden="true"
            />
            <div className={cn("hero__container hero__content", contentClassName)}>
                <h1 className="hero__title">{title}</h1>
                <h5 className="hero__subtitle">{subtitle}</h5>
                <p>{text}</p>
                {buttontrue && path && (
                    <Link href={path} >
                        <Button variant="ghost" className="hero_button mt-3 rounded-2xl">{buttonText}</Button>
                    </Link>
                )}
            </div>
        </section >
    );
}