import React from "react";
//import { redirect } from "next/navigation";
//import { cookies } from "next/headers";

//import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import BottomNav from "@/components/BottomNav";

// add paiement method and files type in sql request workbench , and payment infos , cni or passport of admin , and upgrade plan

export default function Page() {
  // const token = cookies().get("token")?.value;
  // if (token) {
  //   redirect("/admin");
  // }

  return (
    <main className="w-full min-h-screen flex items-center justify-center">
        <ThemeToggle className='absolute top-4 right-4'/>
        <BottomNav/>
    </main>
  );
}
