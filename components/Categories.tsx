"use client"
import React, { useState } from "react";

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
    const [selectedCategory, setSelectedCategory] = useState<categoryType | null>(null);

  return (
    <div className="w-full">
      <p className="text-sm">Choose category of elections</p>
      <div className="grid grid-cols-3 gap-3 mt-3">
        {categories.map((item, index) => (
          <div
            className={`cursor-pointer h-5 border rounded-[14px] p-4 flex justify-center items-center ${selectedCategory?.id === item.id ? 'bg-primary' : ''}`}
            key={index}
            onClick={() => setSelectedCategory(item)}
          >
            <p className={`text-sm ${selectedCategory?.id === item.id ? "dark:text-white text-white": "dark:text-white text-black"}`}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
