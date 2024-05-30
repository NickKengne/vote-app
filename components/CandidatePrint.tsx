"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import { API_BASE_URL } from "@/config/axios";
import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { electionStore } from "@/store/store";

interface Item {
  name: string;
  description: string;
  image: string;
  party_political:string,
  
}




const Notification = ({ name, description, image, party_political }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
      <Avatar className=" self-start">
          <AvatarImage
            src={image== "" ? "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" : image}
            alt="user-profile"
          />
        </Avatar>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name} 🌍 🚀 </span>
            
          </figcaption>
          <p className="text-[14px] font-normal dark:text-white/60">
            {description}<span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{party_political}</span>
          </p>
        </div>
      </div>
    </figure>
  );
};

export function CandidatePrint() {
  const [candidate , setCandidate] = React.useState<[]>([])
  const election = electionStore((state: any) => state.election);
  const election_id = election?.id

  React.useEffect(() => {
    if (election_id != undefined) {
      fetch(API_BASE_URL + `/candidate/election/${election_id}`).then(res => res.json())
       .then(data => {
        //console.table(data)
         setCandidate(data)
       })
    }
    else{
      fetch(API_BASE_URL + "/candidate/all").then(res => res.json())
       .then(data => {
         setCandidate(data)
       })
    }
   },[election_id])

   console.log(candidate)
 

  return (
    <div className="fixed right-4 top-4 lg:flex md:flex 2xl:flex max-h-[350px] min-h-[340px] w-[300px] flex-col overflow-hidden rounded-lg  bg-background/95 backdrop-blur hidden supports-[backdrop-filter]:bg-background/60  p-3 lg:z-0 md:z-50 z-50">
      <p className="text-2xl font-medium mb-3">Candidate 2024</p>
      <AnimatedList>
        {candidate?.map((item:any, idx:number) => (
          <Notification name={item?.name} image={item?.image} party_political={item?.party_political} description={item?.election?.name} key={idx}  />
        ))}
      </AnimatedList>
    </div>
  );
}
