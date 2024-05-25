"use client";

import React, { Suspense, useEffect, useState } from "react";
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
import Loading from "./loading";
import { CookieValueTypes, getCookie } from "cookies-next";
import { user } from "@/types/type";
import { CandidatePrint } from "@/components/CandidatePrint";
import { API_BASE_URL } from "@/config/axios";

export default function Page() {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    fetch(API_BASE_URL + "/post/all")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  console.log(post);

  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <BottomNav />
      <Header />
      <CandidatePrint />
      <Suspense fallback={<Loading />}>
        <div className="relative w-[95%] top-[50px] max-w-[540px] flex flex-col items-center min-h-screen p-3 pb-[80px] ">
          <Categories />
          <Separator className="mt-5 mb-3 w-[90%]" />
          <p className="font-bold text-2xl mb-2">For you 👀 ({post?.length})</p>
          {post.reverse().map((item: any, index: number) => (
            <PostCard
              name={item?.candidate?.firstname + " " + item?.candidate?.name}
              talking={item?.speech}
              votes={200}
              election={item?.election?.name}
              comments={item?.comment?.length}
            />
          ))}
        </div>
      </Suspense>
    </main>
  );
}
