import React from 'react'
import { ThemeToggle } from './ThemeToggle'

export default function Header() {
  return (
    <div className="fixed bg-background z-50 top-0 w-[95%] max-w-[520px] flex justify-between items-center p-4">
      <p className="text-xl font-bold">Wevote<span className="text-primary">.</span> </p>
      <ThemeToggle className="" />
      </div>
  )
}
