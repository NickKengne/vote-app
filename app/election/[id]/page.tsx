import React from 'react'

export  default async function page({params} : {params: {id:string}}) {
    const {id} = params
  return (
    <div className='w-full h-full px-[50px] flex justify-center items-center pt-[30px]'>
        <p className='text-center text-3xl font-bold'>Election Results 🏆</p>
    </div>
  )
}
