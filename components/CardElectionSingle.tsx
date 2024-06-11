"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
  

const CardSingle = ({ election, color }: { election: any; color: any }) => {
  const [effect, setEffect] = useState<boolean>(false);
  const router = useRouter()
  return (
    <div
      className={`max-w-[245px] bg-blue-700 h-[130px] w-[95%] ${
        effect ? "animate-ping" : ""
      } relative rounded-[6px]`}
      onClick={() => {
        setEffect(true);
        setTimeout(() => {
            setEffect(false);
            router.push(`/election/${election?.id}`)
        }, 1600);
      }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color.toColor1} ${color.fromColor1} skew-y-6 -rotate-2 rounded-[6px]`}
      ></div>
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color.toColor2} ${color.fromColor2} hover:bg-yellow-500 transition-all duration-1000 ease-in-out rotate-4 rounded-[6px] cursor-pointer`}
      >
        <p className="text-[17px] text-white font-bold font-sans p-6">
          {election?.name}
        </p>
        <p className="text-[17px] text-white font-bold font-sans p-6">
          {election?.candidates?.length} candidate
          {election?.candidates?.length > 1 ? "s" : ""}
        </p>
        <p className="absolute bottom-2 right-2 text-[12px] text-white">
          wevote
        </p>
      </div>
    </div>
  );
};

export default CardSingle;



// <Sheet>
//   <SheetTrigger>Open</SheetTrigger>
//   <SheetContent>
//     <SheetHeader>
//       <SheetTitle>Are you absolutely sure?</SheetTitle>
//       <SheetDescription>
//         This action cannot be undone. This will permanently delete your account
//         and remove your data from our servers.
//       </SheetDescription>
//     </SheetHeader>
//   </SheetContent>
// </Sheet>
