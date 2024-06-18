import React from 'react'
import { API_BASE_URL } from '@/config/axios';
import TableUserView from '../components/TableUserVIew';

export default async  function page() {

    const user = await fetch(API_BASE_URL + `/users/all`)
    .then((res) => res.json())
    .then((data) => data);
    
    console.log(user,"user")

  return (
    <div className='w-full min-h-screen flex justify-center flex-col p-4'>
        <h1 className='text-3xl font-semibold text-center'>Manage All Users 🔑</h1>
        <TableUserView data={user}/>
    </div>
  )
}
