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

export default function PostVIewPerCandidate({
  name,
  talking,
  votes,
  election,
  comments,
  election_id,
  candidate_id,
  image_url,
}: {
  name: string;
  talking: string;
  votes: number;
  election: string;
  comments: number;
  election_id: number;
  candidate_id: string;
  image_url: string;
}) {


    const [isLoading, setLoading] = React.useState<boolean>(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="absolute right-3 top-3"><Eye size={20}/></Button>
      </DialogTrigger> 
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Post View {election} Election</DialogTitle>
          <DialogDescription>
            Set your election informations up to view
          </DialogDescription>
        </DialogHeader>
        <div className="grid  grid-cols-1 gap-4">
          
        </div>
        <DialogFooter>
          {isLoading ? (
            <Loader />
          ) : (
            <Button type="submit" onClick={() => alert("")}>
              Publish
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
