import React from "react";
//import { redirect } from "next/navigation";
//import { cookies } from "next/headers";

//import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import BottomNav from "@/components/BottomNav";
import SearchBar from "@/components/SearchBar";
import Categories from "@/components/Categories";
import { Separator } from "@/components/ui/separator";
import PostCard from "@/components/PostCard";
import Header from "@/components/Header";

// add paiement method and files type in sql request workbench , and payment infos , cni or passport of admin , and upgrade plan

export default function Page() {
  // const token = cookies().get("token")?.value;
  // if (token) {
  //   redirect("/admin");
  // }

  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <BottomNav />
      <Header/>
      <div className="relative w-[95%] top-[50px] max-w-[520px] flex flex-col items-center min-h-screen lg:border-x md:border-x p-3 pb-[70px] mt-4 ">
        <SearchBar />
        <Categories/>
        <Separator className="mt-5 mb-3 w-[90%]"/>
        <p className="text-sm font-mediumm mb-6">For you (1k)</p>
        <PostCard/>
      </div>
    </main>
  );
}
