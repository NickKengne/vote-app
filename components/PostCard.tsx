"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Heart, MessageCircle, Share } from "lucide-react";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion"

export default function PostCard({name,talking,votes,election,comments}: {name:string,talking:string,votes:number,election:string,comments:number}) {
  const [showComment, setShowComment] = React.useState<Boolean>(false);

  function handleSetComment() {
    setShowComment(!showComment);
  }

  function handleSetLike (){

  }

  return (
    <>
      <div className="w-full flex justify-center gap-2 items-center p-3">
        <Avatar className=" self-start">
          <AvatarImage
            src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
            alt="user-profile"
          />
        </Avatar>
        <div className="col-span-4 grow h-auto min-h-100px">
          <p className="text-sm">{name}</p>
          <p className="text-sm text-gray-600 mb-6">Candidate of {election}</p>
          <p className="text-sm text-justify">
            {talking}
          </p>
          <div className="w-[140px] mt-3 gap-3 flex justify-between p-2">
            <div className="flex flex-row gap-2">
              <motion.div 
                children = {(<Heart
                  fill="yellow"
                  color="yellow"
                  size={18}
                  className="cursor-pointer"
                />)}

                initial={{
                  
                  scale: 0.8 
                }}

                animate={{
                  
                  scale:1.5
                }}

                transition={{
                  type:"tween",
                  repeat:Infinity,
                  duration:2

                
                }}
                
              
              />
              <p className="text-sm cursor-pointer">{votes}</p>
            </div>
            <div className="flex flex-row gap-1" onClick={handleSetComment}>
              <MessageCircle size={18} className="cursor-pointer" />
              <p className="text-sm cursor-pointer">{comments}</p>
            </div>
          </div>
          {showComment && (
            <div className="mt-3 flex gap-3">
              <Avatar className=" self-start">
                <AvatarImage
                  src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                  alt="user-profile"
                />
              </Avatar>
              <Textarea  className="bg-background dark:border-gray-800 border-gray-200 text-foreground" placeholder="write a comment"/>
            </div>
          )}
        </div>
      </div>
      <Separator className="w-[92%]" />
    </>
  );
}
