"use client";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";
import { user } from "@/types/type";
import { LogOut } from "lucide-react";
import Loader from "@/components/Loader";

export default function page() {
  const router = useRouter();
  const token = getCookie("token");
  const user_id = getCookie("user_id");
  const cookiesUser = getCookie("user");
  const user: user =
    cookiesUser && cookiesUser !== "" ? JSON.parse(cookiesUser) : {};
  const [loading, setLoading] = useState<Boolean>(false);

  //console.log(user)

  const handleLogout = async () => {
    setLoading(!loading);
    setTimeout(() => {
      deleteCookie("token");
      deleteCookie("user");
      deleteCookie("user_id");
      setLoading(!false);
      router.refresh();
      router.push("/");
    }, 3000);
  };

  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <BottomNav />
      <Header />

      <div className="relative w-[95%] top-[50px] max-w-[540px] flex flex-col items-center justify-center min-h-screen p-3 pb-[80px] ">
        <p className="font-bold text-2xl">Settings 🛠️</p>
        {user_id == undefined ? (
          <>
            <div className="flex justify-center items-center flex-col gap-4">
              <p>You are not connected on any account !</p>
              <Button
                variant={"outline"}
                onClick={() => {
                  router.push("/auth/login");
                }}
              >
                Login
              </Button>
            </div>
          </>
        ) : (
          <>
            <p>Hello , {user?.name}</p>
            {loading ? (
              <Loader />
            ) : (
              <Button
                variant={"outline"}
                className="rounded-full"
                onClick={handleLogout}
              >
                <LogOut />
              </Button>
            )}
          </>
        )}
      </div>
    </main>
  );
}
