import React, { ReactNode } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "./ui/avatar";
import Loader from "./Loader";
import { Eye } from "lucide-react";
import { getCookie } from "cookies-next";

export default function PostVIewPerCandidate({
  name,
  talking,
  election,
  comments,
  election_id,
  candidate_id,
  image_url,
}: {
  name: string;
  talking: string;
  election: string;
  comments: [];
  election_id: number;
  candidate_id: string;
  image_url: string;
}) {


    const [isLoading, setLoading] = React.useState<boolean>(false)
    const user_id = getCookie("user_id")

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="absolute right-3 top-3"><Eye size={20}/></Button>
      </DialogTrigger> 
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{election} 😊 </DialogTitle>
          <DialogDescription>
            {name} : Candidate of {election} / 2024
          </DialogDescription>
        </DialogHeader>
        <div className="grid  grid-cols-1 gap-4">
            <p>talking : {talking}</p>
        </div>
        {
          candidate_id == user_id ? (<DialogFooter>
            {isLoading ? (
              <Loader />
            ) : (
              <Button type="submit" onClick={() => alert("")}>
                Publish
              </Button>
            )}
          </DialogFooter>) : (<></>)
        }
      </DialogContent>
    </Dialog>
  );
}
