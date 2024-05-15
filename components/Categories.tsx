//this is an asynchronous fonction

import React from 'react'

export default function Categories() {
  return (
    <div className='w-full'>
        <p className='text-sm'>Choose category of elections</p>
        <div className='grid grid-cols-3 gap-3 mt-3'>
        <div className='cursor-pointer h-5 bg-primary rounded-[14px] p-4 flex justify-center items-center '>
            <p className='text-sm text-white'>Presidential</p>
        </div>
        <div className='cursor-pointer h-5  p-4 flex border rounded-[14px] justify-center items-center '>
            <p className='text-sm'>Legislative</p>
        </div>
        <div className='cursor-pointer h-5  p-4 flex border rounded-[14px] justify-center items-center '>
            <p className='text-sm'>Pools</p>
        </div>
        <div className='cursor-pointer h-5  p-4 flex border rounded-[14px] justify-center items-center '>
            <p className='text-sm'>Student AE</p>
        </div>
        </div>
    </div>
  )
}
