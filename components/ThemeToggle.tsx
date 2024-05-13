"use client"

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import React from "react";
import {Moon , SunMedium} from "lucide-react"
import clsx from "clsx";
export const ThemeToggle = ({className}: {className:string}) => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant={"default"}
      size={"sm"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={clsx("dark:bg-white bg-black hover:bg-black",className)}
    >
        <SunMedium size={20} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:text-black text-white"/>
        <Moon size={20} className=" absolute rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100"/>
        <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
