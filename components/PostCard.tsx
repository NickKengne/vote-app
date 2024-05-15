"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Heart, MessageCircle, Share } from "lucide-react";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function PostCard() {
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
            src="https://media.licdn.com/dms/image/D4E03AQHTYbBtKMY2Vg/profile-displayphoto-shrink_200_200/0/1714722950547?e=1721260800&v=beta&t=-z-ou-3KOEOnl4hdBH1Tj7cKi7chfiqZUu35sTGbJBs"
            alt="user-profile"
          />
        </Avatar>
        <div className="col-span-4 grow h-auto min-h-100px">
          <p className="text-sm">Nick Kengne 🎓</p>
          <p className="text-sm text-gray-600 mb-6">Candidate of Student AE</p>
          <p className="text-sm text-justify">
            Bonjour à tous,
            <br />
            Je suis ravi de me présenter à vous aujourd'hui en tant que candidat
            aux élections scolaires. Je m'appelle Nick et je suis en niveau 4
            Genie Logiciel. Je suis passionné par notre école et je souhaite
            m'engager pour améliorer notre quotidien et notre avenir commun.
          </p>
          <div className="w-[200px] mt-3  flex justify-between p-2">
            <div className="flex flex-row gap-1">
              <Heart
                fill="yellow"
                color="yellow"
                size={18}
                className="cursor-pointer"
              />
              <p className="text-sm cursor-pointer">990</p>
            </div>
            <div className="flex flex-row gap-1" onClick={handleSetComment}>
              <MessageCircle size={18} className="cursor-pointer" />
              <p className="text-sm cursor-pointer">10k</p>
            </div>
            <div className="flex flex-row gap-1">
              <Share size={18} className="cursor-pointer" />
              <p className="text-sm cursor-pointer">23</p>
            </div>
          </div>
          {showComment && (
            <div className="mt-3 flex gap-3">
              <Avatar className=" self-start">
                <AvatarImage
                  src="https://media.licdn.com/dms/image/D4E03AQHTYbBtKMY2Vg/profile-displayphoto-shrink_200_200/0/1714722950547?e=1721260800&v=beta&t=-z-ou-3KOEOnl4hdBH1Tj7cKi7chfiqZUu35sTGbJBs"
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
