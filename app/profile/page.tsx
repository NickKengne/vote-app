"use client";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React, { SyntheticEvent, useEffect } from "react";
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
import { Input } from "@/components/ui/input";
import { API_BASE_URL, postAxios } from "@/config/axios";
import { toast } from "sonner";
import Loader from "@/components/Loader";


//get token from cookies
const token = getCookie("token");


export default function page() {
  const router = useRouter()
  const user_id = getCookie("user_id");
  const cookiesUser = getCookie("user");
  const user: user =
    cookiesUser && cookiesUser !== "" ? JSON.parse(cookiesUser) : {};

  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <BottomNav />
      <Header />

      <div className="relative w-[95%] top-[50px] max-w-[540px] flex flex-col items-center justify-center min-h-screen p-3 pb-[80px] ">
        <p className="font-bold text-2xl">Profile 🙎🏻‍♂️</p>
        {user_id == undefined ? (
          <>
            <div className="flex justify-center items-center flex-col gap-4">
              <p>You are not connected on any account !</p>
              <Button
                variant={"outline"}
                onClick={() => {
                  router.push("/auth/login");
                }}
              >
                Login
              </Button>
            </div>
          </>
        ) : (
          <>
            <p>Hello , {user?.name}</p>
           <UpdateUser/>
          </>
        )}
      </div>
    </main>
  );
}


function UpdateUser() {
  const user_id = getCookie("user_id");
  const cookiesUser = getCookie("user");
  const user: user =
    cookiesUser && cookiesUser !== "" ? JSON.parse(cookiesUser) : {};

  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [email, SetEmail] = React.useState<string>(user?.email);
  const [name,setName] = React.useState<string>(user?.name)
  const [first_name,setFirstName] = React.useState<string>(user?.firstname)
  const [password,setPassword] = React.useState<string>("")
  const [cni_number,setCni_number] = React.useState<string>(user?.cni_number)
  const [address,setAddress] = React.useState<string>(user?.address)
  const [phone,setPhone] = React.useState<string>(user?.phone)
  const router = useRouter()


  async function createPosts(event: SyntheticEvent) {
    event.preventDefault();

    const dataPost = {
      email: email,
      name: name,
      firstname: first_name,
      password: password,
      phone: phone,
      cni_number: cni_number,
      address : address
    }

    setLoading(!isLoading);
    // postAxios("/candidate/create", dataPost, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }).then((res) => {
    //   console.log(res);
    //   if (res.success == true) {
    //     toast(res?.message);
    //     setLoading(false);
    //     router.push("/");
    //   }
    //   else{
    //     setLoading(false)
    //     toast(res.message)
    //   }
    // });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-5">View my profile</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[625px] w-[90%]">
        <DialogHeader>
          <DialogTitle>My informations</DialogTitle>
          <DialogDescription>
            VIew your information and update 
          </DialogDescription>
        </DialogHeader>
        <div className="grid  grid-cols-1 gap-4">
          <div className="grid grid-rows items-center">
          <Input
              placeholder="Candidate name"
              className="mb-3"
              value={name}
              onChange={(text) => setName(text.target.value)}
            />
            <Input
              placeholder="Candidate firstname"
              className="mb-3"
              value={first_name}
              onChange={(text) => setFirstName(text.target.value)}
            />
            <Input
              placeholder="Candidate description"
              className="mb-3"
              value={email}
              onChange={(text) => SetEmail(text.target.value)}
            />
            <Input
              placeholder="Candidate Party politic"
              className="mb-3"
              value={address}
              onChange={(text) => setAddress(text.target.value)}
            />
            <Textarea
              placeholder="Say something !"
              className=" bg-background mb-3 border border-input text-foreground"
              value={cni_number}
              onChange={(text) => {
                setCni_number(text.target.value);
              }}
            />
          </div>
        </div>
        <DialogFooter>
          {isLoading ? (
            <Loader />
          ) : (
            <Button type="submit" onClick={createPosts}>
              Update changes
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}