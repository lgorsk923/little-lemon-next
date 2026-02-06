import Link from "next/link";
import Image
    from "next/image";
import { Search } from "./search-bar";
import { karla } from "../fonts";
export function NavbarExpanded() {
    return (
        <div className={`hidden md:flex pt-4 px-5 items-center justify-between gap-3 lg:gap-x-5 ${karla.className} font-bold text-lg text-stone-950 bg-neutral-100`}>
            <Link href="/" className="text-2xl font-bold text-green-700">
                <Image src="/name_and_logo.png" alt="Little Lemon Logo" width={225} height={225} />
            </Link>
            <Link href="/pages/about" className=" hover:text-emerald-900 hover:underline">
                About
            </Link>
            <Link href="/pages/menu" className=" hover:text-emerald-900 hover:underline">
                Menu
            </Link>
            <Link href="/pages/reservations" className="hover:text-emerald-900 hover:underline">
                Reservations
            </Link>
            <Link href="/pages/order" className=" hover:text-emerald-900 hover:underline">
                Order Online
            </Link>
            <Link href="/pages/rewards" className=" hover:text-emerald-900 hover:underline">
                Rewards
            </Link>
            <Search />
        </div>
    )
}