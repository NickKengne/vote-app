"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Eye, Heart, MessageCircle, Send, Share } from "lucide-react";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { postAxios } from "@/config/axios";
import { headers } from "next/headers";
import PostVIewPerCandidate from "./PostVIewPerCandidate";
import { SheetTrigger } from "./ui/sheet";

export default function PostCard({
  name,
  talking,
  votes,
  election,
  comments,
  election_id,
  candidate_id,
  image_url,
  onClick,
}: {
  name: string;
  talking: string;
  votes: number;
  election: string;
  comments: number;
  election_id: number;
  candidate_id: string;
  image_url: string;
  onClick: () => any;
}) {
  const router = useRouter();
  const user_id = getCookie("user_id");
  const token = getCookie("token");
  const [showComment, setShowComment] = React.useState<Boolean>(false);
  const [onTypingComment, setTypingComment] = React.useState<boolean>(false);
  const [thisComment, setThisComment] = React.useState<string>("");
  const [like, setLike] = React.useState<Boolean>(false);

  function handleSetComment() {
    if (user_id == undefined) {
      router.push("/auth/login");
    }
    setShowComment(!showComment);
  }

  function vote() {
    if (user_id == undefined) {
      router.push("/auth/login");
    } else {
      setLike(!like);
      const dataVote = {
        electionId: election_id,
        candidateId: candidate_id,
        user_id: user_id,
      };

      postAxios("/vote/create", dataVote, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res);
      });
    }
  }

  return (
    <>
      <div className="w-full relative flex justify-center gap-4 items-center p-3">
        <Avatar className=" self-start">
          <AvatarImage
            src={
              image_url == ""
                ? "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                : image_url
            }
            alt="candidate-profile"
          />
        </Avatar>

        <PostVIewPerCandidate
          name={name}
          talking={talking}
          votes={votes}
          election={election}
          comments={comments}
          election_id={election_id}
          candidate_id={candidate_id}
          image_url={image_url}
        />
        <div className="col-span-4 grow h-auto min-h-100px">
          <p className="text-sm">{name}</p>
          <p className="text-sm text-gray-600 mb-6">Candidate of {election}</p>
          <p className="text-sm text-justify">{talking}</p>
          <div className="w-[140px] mt-3 gap-3 flex justify-between p-2">
            <div className="flex flex-row gap-2">
              <motion.div
                onClick={vote}
                children={
                  <Heart
                    fill={like ? "yellow" : "white"}
                    color={like ? "yellow" : "black"}
                    size={20}
                    className="cursor-pointer"
                  />
                }
                initial={
                  like
                    ? {
                        scale: 0.8,
                      }
                    : { scale: 1 }
                }
                animate={
                  like
                    ? {
                        scale: 1.5,
                      }
                    : { scale: 1 }
                }
                transition={
                  like
                    ? {
                        type: "tween",
                        repeat: Infinity,
                        duration: 2,
                      }
                    : {}
                }
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
                  src="https://github.com/shadcn.png"
                  alt="user profile"
                />
                <AvatarFallback>Me</AvatarFallback>
              </Avatar>
              <Textarea
                className="bg-background dark:border-gray-800 border-gray-200 text-foreground"
                placeholder="write a comment"
                value={thisComment}
                onChange={(text) => {
                  setTypingComment(true);
                  setThisComment(text.target.value);
                }}
              />
              <Button variant={thisComment.length > 0 ? "default" : "outline"}>
                <Send size={15} />
              </Button>
            </div>
          )}
        </div>
      </div>
      <Separator className="w-[92%]" />
    </>
  );
}
