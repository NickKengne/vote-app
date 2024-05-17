import React from 'react'

export default function Loading() {
  return (
    <div className='flex w-full min-h-screen justify-center items-center'>
    <div className="relative flex h-6 w-6">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
      <span className="relative inline-flex rounded-full h-6 w-6 bg-primary"></span>
    </div>
    </div>
  )
}
