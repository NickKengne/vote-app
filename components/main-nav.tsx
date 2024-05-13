"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./ThemeToggle"



export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex justify-between lg:flex w-full">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block text-xl">
          Booker
        </span>
      </Link>
      <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end text-sm">
          <nav className="md:flex lg:flex items-center hidden gap-6 text-sm">
            <Link
              href="/"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/docs" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Explore
            </Link>
            <Link
              href="#pricing"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/#pricing")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Pricing
            </Link>
            
            <Link
              href="/auth/authentication"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/examples")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Login
            </Link>
            <ThemeToggle className="" />
          </nav>
        </div>
    </div>
  )
}
