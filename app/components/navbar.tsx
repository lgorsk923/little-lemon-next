"use client"

import Link from "next/link";
import Image
    from "next/image";
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Search } from "./search-bar";
import { karla } from "../fonts";
import { useState } from "react";
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

export function NavBarMobile({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false)

    return (
        <SidebarProvider open={open} onOpenChange={setOpen} className='md:hidden'>
            <AppSidebar onNavigate={() => setOpen(false)} />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 px-4 bg-neutral-100">
                    <SidebarTrigger className="-ml-1" />
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-4"
                    />
                    <Image src="/name_and_logo.png" alt="Little Lemon Logo" width={200} height={200} />
                </header>
                <div className="flex-1">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}