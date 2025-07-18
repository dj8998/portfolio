"use client"

import React, { useEffect } from "react"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  // Remove activeTab and isMobile state

  useEffect(() => {
    const handleResize = () => {
      // No need to set isMobile
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        // Responsive: bottom on mobile, top on desktop
        "fixed bottom-0 sm:top-0 sm:bottom-auto left-1/2 -translate-x-1/2 z-20 mb-6 sm:mb-0 sm:pt-6 select-none pointer-events-auto",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg select-none">
        {items.map((item) => {
          const Icon = item.icon
          // Remove isActive logic

          return (
            <Link
              key={item.name}
              href={item.url}
              // Remove setActiveTab onClick
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary"
                // Remove isActive highlight classes
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {/* Remove lamp effect */}
            </Link>
          )
        })}
      </div>
    </div>
  )
} 