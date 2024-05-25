"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Nick kengne",
    description: "AE",
    time: "130 votes",

    icon: "👤",
    color: "#00C9A7",
  },
  {
    name: "La Gauche",
    description: "AE",
    time: "90 votes",
    icon: "👤",
    color: "#FFB800",
  }
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            
          </figcaption>
          <p className="text-[14px] font-normal dark:text-white/60">
            {description}<span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </p>
        </div>
      </div>
    </figure>
  );
};

export function CandidatePrint() {
  return (
    <div className="fixed right-4 top-4 flex max-h-[350px] min-h-[340px] max-w-[32rem] flex-col overflow-hidden rounded-lg  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60  p-3 lg:z-0 md:z-50 z-50">
      <p className="text-2xl font-medium mb-3">Real time result</p>
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
