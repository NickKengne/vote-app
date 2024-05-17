"use client"

import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

export default function page() {
    const router =  useRouter()
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <BottomNav />
      <Header />

      <div className="relative w-[95%] top-[50px] max-w-[540px] flex flex-col items-center justify-center min-h-screen p-3 pb-[80px] ">
        <p className="font-bold text-2xl">Settings</p>
        <div className="flex justify-center items-center flex-col gap-4">
          <p>You are not connected on any account !</p>
          <Button variant={"outline"} onClick={() => {
            router.push("/auth/login")
          }}>Login</Button>
        </div>
      </div>
    </main>
  );
}
