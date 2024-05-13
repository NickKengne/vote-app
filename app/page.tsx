import React from "react";
import PageHeader from "@/components/PageHeader";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

// add paiement method and files type in sql request workbench , and payment infos , cni or passport of admin , and upgrade plan

export default function Page() {
  const token = cookies().get("token")?.value;
  if (token) {
    redirect("/admin");
  }

  return (
    <main className="w-full min-h-screen flex items-center justify-center">
        <p className="text-4xl font-mono">Vote App</p>
        <ThemeToggle className='absolute top-4 right-4'/>
    </main>
  );
}
