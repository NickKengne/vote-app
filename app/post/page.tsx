"use client";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { user } from "@/types/type";
import { Textarea } from "@/components/ui/textarea";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Input } from "@/components/ui/input";
import { CalendarIcon, Upload } from "lucide-react";
import Loader from "@/components/Loader";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { API_BASE_URL, getAxios, postAxios } from "@/config/axios";
import { headers } from "next/headers";
import { toast } from "sonner";
import { AnyNsRecord } from "dns";

//get token from cookies
const token = getCookie("token");


export default function page() {
  

  const user_id = getCookie("user_id");
  const cookiesUser = getCookie("user");
  const user: user =
    cookiesUser && cookiesUser !== "" ? JSON.parse(cookiesUser) : {};

  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <BottomNav />
      <Header />

      <div className="relative w-[95%] top-[50px] max-w-[540px] flex flex-col justify-center items-center  min-h-screen p-3 pb-[80px] gap-3">
        <p className="font-bold text-2xl mb-6">Manage Content 🪄🔮</p>

        {user?.role === "ADMIN" && <CreateElection />}
        <CreatePost />
      </div>
    </main>
  );
}

export function CreatePost() {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [talking, setTalking] = React.useState<string>("");
  const [category, setCategory] = React.useState<any>();
  const [electionFetch , setElectionFetch] = React.useState([])
  const user_id = getCookie("user_id")
  const router = useRouter()

  useEffect(() => {
   fetch(API_BASE_URL + "/election/all",{
    headers:{
      "Authorization" : `Bearer ${token}`
    }
   }).then(res => res.json())
      .then(data => {
        console.log(data)
        setElectionFetch(data)
      })
  },[])

  const selectedElection:any =  electionFetch.find((item:any) => item?.name == category )
  const election_id: unknown = selectedElection?.id

  async function createPost(event: SyntheticEvent) {
    event.preventDefault();
    const dataPost = {
      speech: talking,
      candidate_id: user_id,
      election_id : election_id
    }
    setLoading(!isLoading);
    postAxios("/post/create", dataPost, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res);
      if (res.success == true) {
        toast(res?.message);
        setLoading(false);
        setCategory("");
        setTalking("");
        router.refresh();
      }
      else{
        setLoading(false)
        toast(res.message)
      }
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Post</DialogTitle>
          <DialogDescription>
            Set your talking informations up to view
          </DialogDescription>
        </DialogHeader>
        <div className="grid  grid-cols-1 gap-4">
          <div className="grid grid-rows items-center">
            <Textarea
              placeholder="Say something !"
              className=" bg-background mb-3 border border-input text-foreground"
              value={talking}
              onChange={(text) => {
                setTalking(text.target.value);
              }}
            />
            <Select
              value={category}
              onValueChange={(text) => setCategory(text)}
            >
              <SelectTrigger className="focus-visible:ring-0 ring-0 mb-3 bg-background text-gray-400 border border-input">
                <SelectValue
                  placeholder="Choose election category"
                  className="text-gray-800"
                />
              </SelectTrigger>
              <SelectContent
                className="w-auto bg-background  p-0"
                align="start"
              >
                <SelectGroup className="bg-background text-foreground">
                  {
                    electionFetch?.map((item:any , index:number) => (
                      <SelectItem value={item?.name} key={index}>{item?.name}</SelectItem>
                    ))
                  }
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          {isLoading ? (
            <Loader />
          ) : (
            <Button type="submit" onClick={createPost}>
              Publish
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function CreateElection() {
  const [start_date, setStartDate] = useState<any>();
  const [end_date, setEndDate] = useState<any>();
  const [description, setDescription] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const handleStartDateChange = (date: Date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date: Date) => {
    setEndDate(date);
  };

  async function createElection(event: SyntheticEvent) {
    event.preventDefault();

    const dataElection = {
      name: name,
      description: description,
      start_date: start_date,
      end_date: end_date,
    };

    setLoading(!isLoading);
    postAxios("/election/create", dataElection, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res: string) => {
      console.log(res);
      if (res == "Election created successfully !") {
        toast(res);
        setLoading(false);
        setName("");
        setEndDate("");
        setStartDate("");
        setDescription("");
        router.refresh();
      }
      else{
        setLoading(false)
        toast(res)
      }
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Election</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Election</DialogTitle>
          <DialogDescription>
            Set your election informations up to view
          </DialogDescription>
        </DialogHeader>
        <div className="grid  grid-cols-1 gap-4">
          <div className="grid grid-rows items-center">
            <Input
              placeholder="Type name of the election"
              className="mb-3"
              value={name}
              onChange={(text) => setName(text.target.value)}
            />
            <Textarea
              placeholder="Say something !"
              className=" bg-background mb-3 border border-input text-foreground"
              value={description}
              onChange={(text) => setDescription(text.target.value)}
            />
            <Popover>
              <PopoverTrigger asChild className="col-span-1">
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start bg-background  text-left font-normal",
                    !start_date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-foreground" />
                  {start_date ? (
                    <span className="text-foreground">
                      {format(start_date, "PPP")}
                    </span>
                  ) : (
                    <span>Election start-date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={start_date}
                  onSelect={(date: any) => handleStartDateChange(date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild className="col-span-1 mt-3">
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start bg-background  text-left font-normal",
                    !end_date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-foreground" />
                  {end_date ? (
                    <span className="text-foreground">
                      {format(end_date, "PPP")}
                    </span>
                  ) : (
                    <span>Election end-date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={end_date}
                  onSelect={(date: any) => handleEndDateChange(date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <DialogFooter>
          {isLoading ? (
            <Loader />
          ) : (
            <Button type="submit" onClick={createElection}>
              Publish
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
