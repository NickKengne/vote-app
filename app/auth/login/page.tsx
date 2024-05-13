import React from 'react'
import UserAuthLogin from './components/UserAuthLogin'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function page() {
  return (
    <main className='w-full min-h-screen flex justify-center items-center gap-4'>
        <ThemeToggle className='absolute top-4 right-4'/>
        <UserAuthLogin/>
    </main>
  )
}
