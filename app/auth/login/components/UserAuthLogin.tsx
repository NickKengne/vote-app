"use client"

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { postAxios } from '@/config/axios'
import { LoginUserType, authResponse } from '@/types/type'
import { setCookie } from 'cookies-next'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function UserAuthLogin() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const data: LoginUserType = {
    email: email,
    password:password
  }


  const router = useRouter()

  async function login (event: React.SyntheticEvent) {
    event.preventDefault()
     postAxios("/auth/login", data, {}).then((res:authResponse) => {
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
    <div className="w-[80%] max-w-[350px] h-[400px] dark:border-gray-700  rounded-[10px] border p-5">
            <p className="text-xl font-bold text-center mt-3">Connect to <span className="text-primary">your</span> space <span className="animate-bounce">🔑</span></p>
            <form className="mt-5" method='post' onSubmit={login}>
              <Input name='email' placeholder="Email or Phone number" className="mt-3" value={email} onChange={(text) => setEmail(text.target.value)}/>
              <Input placeholder="Password" type="password" className="mt-3" name='password' value={password} onChange={(text) => setPassword(text.target.value)}/>
              <div className="flex gap-2 items-center mt-4 ml-1">
              <Checkbox name='checkbox'/><p className="text-sm">Remember me</p>
              </div>
              <Button variant={"default"} size={"lg"} className="w-full h-9 mt-3" type='submit'>
                  Login
              </Button>
              <Separator className="mt-5 w-[80%] mx-auto"/>
              <p className="text-[13px] text-center mt-3">no elector ? <Link href="/auth/register" className="text-primary underline">Sign up</Link></p>
              <Button variant={"outline"} size={"lg"} className="w-full h-9 mt-3">
              <GitHubLogoIcon/> &ensp;  Sign with github
              </Button>
            </form>
        </div>
  )
}
