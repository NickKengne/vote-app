import React from 'react'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function UserAuthLogin() {
  return (
    <div className="w-[80%] max-w-[350px] h-[400px] dark:border-gray-700  rounded-[10px] border p-5">
            <p className="text-xl font-bold text-center mt-3">Connect to <span className="text-primary">your</span> space <span className="animate-bounce">🔑</span></p>
            <form className="mt-5">
              <Input placeholder="Email or Phone number" className="mt-3"/>
              <Input placeholder="Password" type="password" className="mt-3"/>
              <div className="flex gap-2 items-center mt-4 ml-1">
              <Checkbox/><p className="text-sm">Remember me</p>
              </div>
              <Button variant={"default"} size={"lg"} className="w-full h-9 mt-3">
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
