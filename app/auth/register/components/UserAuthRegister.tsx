"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import "react-international-phone/style.css";
import Link from "next/link";
import { useTheme } from "next-themes";
import { PhoneInput, PhoneInputRefType } from "react-international-phone";
export default function UserAuthRegister() {

  const { theme, setTheme } = useTheme();
  const [phoneNumber, setPhoneNumber] = React.useState<any>();
 

  return (
    <div className="w-[80%] max-w-[700px] min-h-[450px] h-auto dark:border-gray-700 border-gray-200 rounded-[10px] border p-6">
      <p className="text-xl font-bold text-center mt-3">
        Participate in the <span className="text-primary">elections</span> you
        want <span className="animate-bounce">📬</span>
      </p>
      <form className="mt-5">
        <div className="grid lg:grid-cols-2 grid-cols-1  gap-3">
        <div>
          <Input placeholder="Name" className="mt-3" />
          <Input placeholder="Email" type="password" className="mt-3" />
        </div>
        <div>
          <Input placeholder="Firstname" className="mt-3" />
          <Input placeholder="Adress" type="text" className="mt-3" />
        </div>
        <div>
        <PhoneInput
                  placeholder="Phone Number"
                  value={""}
                  ref={(ref: PhoneInputRefType) => {
                    setPhoneNumber(ref?.value);
                  }}
                  defaultCountry="cm"
                  inputClassName="w-full text-white"
                  countrySelectorStyleProps={{
                    className: "w-1/3",
                  }}
                  onChange={(e) => setPhoneNumber(e)}
                  
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
          <Input placeholder="Password" type="password" className="mt-3" />
        </div>
        <div>
          <Input placeholder="Cni number" className="" />
          <Input placeholder="Confirm Password" type="password" className="mt-3" />
        </div>
        </div>
        
        <div className="flex gap-2 items-center mt-6 ml-1">
          <Checkbox />
          <p className="text-sm">I accept the <span className="text-primary">terms and conditions</span>  that govern wevote</p>
        </div>
        <Button variant={"default"} size={"lg"} className="w-[100%] h-9 mt-5">
          Login
        </Button>
        <Separator className="mt-5 w-[50%] mx-auto" />
        <p className="text-[13px] text-center mt-3">
          Already an elector ?{" "}
          <Link href="/auth/login" className="text-primary underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
