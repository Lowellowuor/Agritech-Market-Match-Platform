"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BarChart2, ShoppingBag, Truck, Wallet } from "lucide-react"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/constants"

export function MobileNav() {
  const pathname = usePathname()
  
  const navItems = [
    {
      title: "Home",
      href: "/",
      icon: Home,
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: BarChart2,
    },
    {
      title: "Marketplace",
      href: "/marketplace",
      icon: ShoppingBag,
    },
    {
      title: "Logistics",
      href: "/logistics",
      icon: Truck,
    },
    {
      title: "Financial",
      href: "/financial",
      icon: Wallet,
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-background border-t md:hidden">
      <div className="grid h-full grid-cols-5">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center text-xs font-medium transition-colors",
              pathname === item.href 
                ? "text-primary" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}