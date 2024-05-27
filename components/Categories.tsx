"use client"
import { API_BASE_URL } from "@/config/axios";
import React, { useState } from "react";
import { getCookie } from "cookies-next";

interface categoryType{
    id:number;
    name:string;
}

const categories: categoryType[] = [
  {
    id: 1,
    name: "Presidential",
  },
  {
    id: 2,
    name: "Legislative",
  },
  {
    id: 3,
    name: "Pools",
  },
  {
    id: 4,
    name: "AE School",
  },
];




export default function Categories() {
    const [electionFetch, setElectionFetch] = useState<any>([]);
    const [selectedElection, setElectionSelected] = useState<any>(null)
    const token = getCookie("token")

    React.useEffect(() => {
      fetch(API_BASE_URL + "/election/all",{
       headers:{
         "Authorization" : `Bearer ${token}`
       }
      }).then(res => res.json())
         .then(data => {
           console.log(data)
           setElectionFetch(data)
         })
     },[])

  return (
    <div className="w-full">
      <p className="text-sm">Choose category of elections</p>
      <div className="grid grid-cols-3 gap-3 mt-3">
        {electionFetch?.map((item:any , index:number) => (
          <div
            className={`cursor-pointer h-5 border rounded-[14px] p-4 flex justify-center items-center ${selectedElection?.id === item.id ? 'bg-primary' : ''}`}
            key={index}
            onClick={() => setElectionSelected(item)}
          >
            <p className={`text-sm ${selectedElection?.id === item.id ? "dark:text-white text-white": "dark:text-white text-black"}`}>{item?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
