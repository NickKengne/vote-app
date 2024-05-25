"use client"

import BottomNav from '@/components/BottomNav'
import Header from '@/components/Header'
import React from 'react'
import Categories from '@/components/Categories'
import PostCard from '@/components/PostCard'
import { Separator } from '@radix-ui/react-separator'
import SearchBar from '@/components/SearchBar'

export default function page() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
    <BottomNav />
    <Header />
   
      <div className="relative w-[95%] top-[50px] max-w-[540px] flex flex-col items-center min-h-screen p-3 pb-[80px] ">
        <SearchBar/>
        <Separator className="mt-5 mb-3 w-[90%]" />
        <p className="text-2xl font-bold mb-2">Results 🔎 (1)</p>
        <PostCard />
      </div>
    
  </main>
  )
}