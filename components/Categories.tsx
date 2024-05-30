"use client"
import { API_BASE_URL } from "@/config/axios";
import React, { useState } from "react";
import { getCookie } from "cookies-next";
import { electionStore, useSelectPostPerElection } from "@/store/store";


export default function Categories() {
    const [electionFetch, setElectionFetch] = useState<any>([]);
    const [selectedElection, setElectionSelected] = useState<any>(null)
    const token = getCookie("token")
    const setElection = electionStore((state:any) => state.setElection)
    const setSelected = useSelectPostPerElection((state:any) => state.setSelected)

    React.useEffect(() => {
      fetch(API_BASE_URL + "/election/all").then(res => res.json())
         .then(data => {
           console.log("data",data)
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
            onClick={() => {
              setSelected()
              setElectionSelected(item)
              setElection(item)
            }}
          >
            <p className={`text-sm ${selectedElection?.id === item.id ? "dark:text-white text-white": "dark:text-white text-black"}`}>{item?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
