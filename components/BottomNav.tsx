"use client";
import React from "react";
import { Button } from "./ui/button";
import {
  Home,
  LogIn,
  Pencil,
  Plus,
  ScissorsLineDashed,
  Search,
  Settings,
  Star,
  User,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { DashIcon, ResetIcon } from "@radix-ui/react-icons";
import { getCookie } from "cookies-next";
import { user } from "@/types/type";

export default function BottomNav() {
  const router = useRouter();
  const token = getCookie("token");
  const user_id = getCookie("user_id");
  const cookiesUser = getCookie("user");
  const user: user =
    cookiesUser && cookiesUser !== "" ? JSON.parse(cookiesUser) : {};
  const pathname = usePathname();

  const role = user?.role?.toString();

  //console.log(role);

  return (
    <div className="bg-background z-50 fixed bottom-0 h-auto h-[50px] p-2 w-[100%] max-w-[400px] gap-1 flex justify-center">
      <Link
        href={"/"}
        className={
          pathname == "/"
            ? " bg-primary hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 flex items-center justify-center"
            : " bg-background hover:bg-accent hover:text-accent-foreground h-11  rounded-md px-8 flex items-center justify-center"
        }
      >
        <Home />
      </Link>

      <Link
        href={"/election"}
        className={
          pathname == "/election"
            ? " border-input bg-primary hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 flex items-center justify-center"
            : " bg-background hover:bg-accent  hover:text-accent-foreground h-11 rounded-md px-8 flex items-center justify-center"
        }
      >
        <Star />
      </Link>

      {(role == "ADMIN" || role == "CANDIDATE") && (
        <Link
          href={"/post"}
          className={
            pathname == "/post"
              ? " bg-primary hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 flex items-center justify-center"
              : " bg-background hover:bg-accent hover:text-accent-foreground h-11  rounded-md px-8 flex items-center justify-center"
          }
        >
          <Pencil />
        </Link>
      )}

      <Link
        href={"/profile"}
        className={
          pathname == "/profile"
            ? "grow border-input bg-primary hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 flex items-center justify-center"
            : "bg-background hover:bg-accent  hover:text-accent-foreground h-11 rounded-md px-8 flex items-center justify-center"
        }
      >
        <User />
      </Link>
      <Link
        href={"/settings"}
        className={
          pathname == "/settings"
            ? " border-input bg-primary hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 flex items-center justify-center"
            : "bg-background hover:bg-accent  hover:text-accent-foreground h-11 rounded-md px-8 flex items-center justify-center"
        }
      >
        <Settings />
      </Link>
    </div>
  );
}
