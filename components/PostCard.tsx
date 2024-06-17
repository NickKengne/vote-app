"use client";

import React, { SyntheticEvent } from "react";
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
import { toast } from "sonner";
import Loader from "./Loader";
import { timeAgo } from "@/utils/timeAgo";

export default function PostCard({
  name,
  talking,
  election,
  comments,
  election_id,
  candidate_id,
  image_url,
  post_id,
  onClick,
}: {
  name: string;
  talking: string;
  election: string;
  comments: [];
  election_id: number;
  candidate_id: string;
  image_url: string;
  post_id: number;
  onClick: () => any;
}) {
  const router = useRouter();
  const user_id = getCookie("user_id");
  const token = getCookie("token");
  const [showComment, setShowComment] = React.useState<Boolean>(false);
  const [onTypingComment, setTypingComment] = React.useState<boolean>(false);
  const [thisComment, setThisComment] = React.useState<string>("");
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [like, setLike] = React.useState<Boolean>(false);

  function handleSetComment() {
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
      console.log(dataVote)
      postAxios("/vote/create", dataVote, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        //console.log(res)
        toast(res)
      });
    }
  }

  async function postComment(event: SyntheticEvent) {
    event.preventDefault();
    setLoading(true);

    const dataComment = {
      comment: thisComment,
      post_id: post_id,
      user_id: user_id,
    };

    if (thisComment.length > 0 && user_id != undefined) {
      postAxios("/comment/create", dataComment, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.success == true) {
          router.refresh();
          setLoading(false);
          toast(res.message);
        } else {
          setLoading(false);
          toast("Error occurred during post comment, retry!");
        }
      });
    } else {
      setLoading(false);
      toast("you are not logged !");
      router.push("/auth/login");
    }
  }

  //console.log(election)

  return (
    <>
      <div className="w-full relative flex justify-center gap-4 items-center p-3">
        <Avatar className="self-start">
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
          election={election}
          comments={comments}
          election_id={election_id}
          candidate_id={candidate_id}
          image_url={image_url}
        />
        <div className="col-span-4 grow h-auto min-h-100px">
          <p className="text-sm">{name} 📢</p>
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
            </div>
            <div className="flex flex-row gap-1" onClick={handleSetComment}>
              <MessageCircle size={18} className="cursor-pointer" />
              <p className="text-sm cursor-pointer">{comments?.length}</p>
            </div>
          </div>
          {showComment && (
            <div className="mt-3">
              <div className="flex gap-3">
                <Avatar className="self-start">
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
                {isLoading ? (
                  <Loader />
                ) : (
                  <Button
                    variant={thisComment.length > 0 ? "default" : "outline"}
                    onClick={postComment}
                  >
                    <Send size={15} />
                  </Button>
                )}
              </div>
              <Separator className="w-[92%] mt-3" />

              <div className="mt-4 mb-3 ">
                {comments.map((comment: any, index: number) => (
                  <div key={index} className="flex gap-3 mt-3">
                    <Avatar className="">
                      <AvatarFallback className="">
                        <p className="text-foreground">
                          {comment.user.name.charAt(0)}
                        </p>
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex  justify-between gap-3 mt-2">
                        <p className="text-sm font-semibold">
                          {user_id == comment.user.id
                            ? "Moi"
                            : comment.user.name + " " + comment.user.firstname}
                        </p>
                        <p className="text-gray-600 text-[12px]">
                          {timeAgo(comment.created_at)}
                        </p>
                      </div>
                      <p className="text-[13px] mt-2">{comment.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Separator className="w-[92%]" />
    </>
  );
}
