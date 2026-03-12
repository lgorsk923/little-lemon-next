"use client"

import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/pages/about"
    },
    {
      title: "Reservations",
      url: "/pages/reservations",
    },
    {
      title: "Order Online",
      url: "/pages/order",
    },
    {
      title: "Rewards",
      url: "/pages/rewards",
    }
  ],
}

export function AppSidebar({ onNavigate, ...props }: React.ComponentProps<typeof Sidebar> & { onNavigate?: () => void }) {
  const { setOpenMobile } = useSidebar()

  const handleLinkClick = () => {
    setOpenMobile(false)
    if (onNavigate) {
      onNavigate()
    }
  }

  return (
    <Sidebar {...props} className="bg-[#d4d9d4]">
      <SidebarHeader className="flex items-center justify-center bg-[#d4d9d4]">
        <Image src="/name_and_logo.png" alt="Little Lemon Logo" className='rounded-full' width={200} height={200} />
      </SidebarHeader>
      <SidebarContent className='px-6 text-[#506e5a] bg-[#d4d9d4]'>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((group) => (
          <Link
            href={group.url}
            key={group.title}
            onClick={handleLinkClick}
          >
            <SidebarMenu>
              <SidebarMenuItem>{group.title}</SidebarMenuItem>
            </SidebarMenu>
          </Link>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
