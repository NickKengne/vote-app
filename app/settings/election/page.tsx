"use client"

import React from 'react'
import TableElectionView from '../components/TableElectionView'
import { API_BASE_URL } from '@/config/axios';

export default async  function page() {

    const election = await fetch(API_BASE_URL + `/election/all`)
    .then((res) => res.json())
    .then((data) => data);
    
    console.log(election)

  return (
    <div className='w-full min-h-screen flex justify-center flex-col p-4'>
        <h1 className='text-3xl font-semibold text-center'>Manage All Election 🔑</h1>
        <TableElectionView data={election}/>
    </div>
  )
}
