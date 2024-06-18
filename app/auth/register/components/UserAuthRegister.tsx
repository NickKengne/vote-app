"use client";

import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import "react-international-phone/style.css";
import Link from "next/link";
import { useTheme } from "next-themes";
import { PhoneInput, PhoneInputRefType } from "react-international-phone";
import { postAxios } from "@/config/axios";
import { toast } from "sonner";
import { setCookie } from "cookies-next";
import { useRouter } from 'next/navigation'
import { authResponse, SignUpUserType } from "@/types/type";


export default function UserAuthRegister() {
  const { theme } = useTheme();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [cniNumber, setCniNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const phoneInputRef = useRef<PhoneInputRefType>(null);
  const router = useRouter()

  const data: SignUpUserType = {
    email: email,
    firstname: firstname,
    name: name,
    address: address,
    phone: phoneNumber,
    cni_number: cniNumber,
    password: password
  }

  const register = (event : React.SyntheticEvent) => {
    event.preventDefault()

    if(password.trim() != confirmPassword.trim()){
      toast("Password Doen't match !")
    }
    postAxios("/auth/register", data, {}).then((res:authResponse) => {
      if (res.user_id == null) {
          toast(res?.message)
      }
      else{
          setCookie("token",res?.token)
          setCookie("user_id",res?.user_id)
          setCookie("user", JSON.stringify(res?.user))
          router.push("/")
          toast(res?.message)
      }
    });

  }

  return (
    <div className="w-[80%] max-w-[700px] min-h-[450px] h-auto dark:border-gray-700 border-gray-200 rounded-[10px] border p-6">
      <p className="text-xl font-bold text-center mt-3">
        Participate in the <span className="text-primary">elections</span> you
        want <span className="animate-bounce">📬</span>
      </p>
      <form className="mt-5" method="POST" onSubmit={register}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
          <div>
            <Input 
              placeholder="Name" 
              className="mt-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input 
              placeholder="Email" 
              type="email" 
              className="mt-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Input 
              placeholder="Firstname" 
              className="mt-3"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <Input 
              placeholder="Address" 
              type="text" 
              className="mt-3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <PhoneInput
              placeholder="Phone Number"
              value={phoneNumber}
              ref={phoneInputRef}
              defaultCountry="cm"
              inputClassName="w-full text-white"
              countrySelectorStyleProps={{
                className: "w-1/3",
              }}
              onChange={(value) => setPhoneNumber(value)}
              inputStyle={
                theme === "dark"
                  ? {
                      backgroundColor: "background",
                      height: "2.3rem",
                      paddingInline: "0.5rem",
                      color: "#fff",
                      border: "1px solid #33333340",
                    }
                  : {
                      backgroundColor: "background",
                      height: "2.3rem",
                      paddingInline: "0.5rem",
                      color: "#000",
                      border: "1px solid #33333340",
                    }
              }
            />
            <Input 
              placeholder="Password" 
              type="password" 
              className="mt-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Input 
              placeholder="Cni number" 
              className=""
              value={cniNumber}
              onChange={(e) => setCniNumber(e.target.value)}
            />
            <Input 
              placeholder="Confirm Password" 
              type="password" 
              className="mt-3"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-2 items-center mt-6 ml-1">
          <Checkbox 
            checked={acceptTerms}
          />
          <p className="text-sm">
            I accept the <span className="text-primary">terms and conditions</span> that govern wevote
          </p>
        </div>
        <Button variant={"default"} size={"lg"} className="w-[100%] h-9 mt-5">
          Register
        </Button>
        <Separator className="mt-5 w-[50%] mx-auto" />
        <p className="text-[13px] text-center mt-3">
          Already an elector?{" "}
          <Link href="/auth/login" className="text-primary underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
