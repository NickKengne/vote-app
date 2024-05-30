"use client";

import React, { Suspense, useEffect, useState } from "react";
import BottomNav from "@/components/BottomNav";

import Categories from "@/components/Categories";
import { Separator } from "@/components/ui/separator";
import PostCard from "@/components/PostCard";
import Header from "@/components/Header";
import Loading from "./loading";
import { CandidatePrint } from "@/components/CandidatePrint";
import { API_BASE_URL } from "@/config/axios";
import { toast } from "sonner";
import { electionStore } from "@/store/store";
import feast from "@/public/images/together.svg"

export default function Page() {
  const [post, setPosts] = useState([]);
  const election = electionStore((state: any) => state.election);
  const election_id = election?.id

  useEffect(() => {
    
     if (election_id != undefined) {
      fetch(API_BASE_URL + `/post/election/${election_id}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
      });
     }
     else{
      fetch(API_BASE_URL + "/post/all")
      .then((res) => res.json())
      .then((data) => setPosts(data));
     }
    
  }, [election_id]);



  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <BottomNav />
      <Header />
      <CandidatePrint />
      <Suspense fallback={<Loading />}>
        <div className="relative w-[95%] top-[50px] max-w-[540px] flex flex-col items-center min-h-screen p-3 pb-[80px] ">
          <Suspense fallback={<Loading />}>
            <Categories />
          </Suspense>
          <Separator className="mt-5 mb-3 w-[90%]" />
          <p className="font-bold text-2xl mb-2">For you 👀 ({post?.length})</p>
          {post.reverse().map((item: any, index: number) => (
            <PostCard
              name={item?.candidate?.name + " " + item?.candidate?.first_name}
              talking={item?.speech}
              votes={0}
              election={item?.candidate?.election?.name}
              comments={item?.comment?.length}
              election_id={item?.candidate?.election?.id}
              candidate_id={item?.candidate?.id}
              image_url={item?.candidate?.image}
              onClick={() => {
                toast(item?.candidate?.name);
              }}
            />
          ))}
        </div>
      </Suspense>
    </main>
  );
}
