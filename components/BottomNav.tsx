"use client";
import React from "react";
import { Button } from "./ui/button";
import { Home, LogIn, ScissorsLineDashed, Search, Settings, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { DashIcon, ResetIcon } from "@radix-ui/react-icons";

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <div className="bg-background h-auto z-50 fixed bottom-0 h-[50px] p-2 w-[100%] max-w-[400px] gap-1 flex  justify-center">
      <Link
        href={"/"}
        className={ pathname == "/" ? "grow bg-primary hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 flex items-center justify-center":  " bg-background hover:bg-accent hover:text-accent-foreground h-11 grow rounded-md px-8 flex items-center justify-center"}
      >
        <Home />
      </Link>

      <Link
        href={"/auth/login"}
        className={pathname == "/profile" ? "grow border-input bg-primary hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 flex items-center justify-center":  " bg-background hover:bg-accent grow hover:text-accent-foreground h-11 rounded-md px-8 flex items-center justify-center"}
      >
        <Search />
      </Link>

      <Link
        href={"/settings"}
        className={ pathname == "/profile" ? "grow border-input bg-primary hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 flex items-center justify-center":  "bg-background hover:bg-accent grow hover:text-accent-foreground h-11 rounded-md px-8 flex items-center justify-center"}
      >
        <ScissorsLineDashed />
      </Link>
      <Link
        href={"/settings"}
        className={ pathname == "/profile" ? "grow border-input bg-primary hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 flex items-center justify-center":  "bg-background hover:bg-accent grow hover:text-accent-foreground h-11 rounded-md px-8 flex items-center justify-center"}
      >
        <Settings />
      </Link>
      
    </div>
  );
}
