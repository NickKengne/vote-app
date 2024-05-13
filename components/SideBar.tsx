"use client";

import React, { PropsWithChildren } from "react";
import { Nav } from "./nav";

import { Banknote, BarChart, BookMarked, Calendar, CalendarCheckIcon, Home, LayoutDashboard, LucideHome, Receipt, ReceiptEuroIcon, ReceiptText, Settings, Settings2, TicketCheck, Users } from "lucide-react";
import clsx from "clsx";
//import { useCollapableStore } from "@/store/store";
import { usePathname } from "next/navigation";


const SideBar = ({}: PropsWithChildren) => {
    //const {isCollapsed , setCollapse}=useCollapableStore()
    const pathname = usePathname();
    // const toggleSideBar = () => setCollapse(!isCollapsed);
    // console.log(isCollapsed)

  return (
    <div className="min-h-16 w-full bg-background">
        {/* <div className={clsx(isCollapsed ? "absolute bottom-10 left-10 flex justify-center items-center h-7 w-7 rounded-full bg-black" : "absolute bottom-10 left-24 flex justify-center items-center h-7 w-7 rounded-full bg-black")} onClick={toggleSideBar}>
            <LayoutDashboard color="white" size={12} className="animate-spin"/>
        </div> */}
        
      <Nav
      
        isCollapsed={true}
        links={[
          {
            title: "Home",
            icon: LucideHome,
            variant: pathname === "/" || pathname === "/admin" ? "default" :"ghost",
            href: "/admin",
          },
          {
            title: "Events",
            icon: Calendar,
            variant: pathname === "/admin/calendar" ? "default" :"ghost",
            href: "/admin/calendar",
          },
          {
            title: "Orders",
            icon: ReceiptText,
            variant: pathname === "/admin/orders" ? "default" :"ghost",
            href: "/admin/orders",
          },
          {
            title: "reporting",
            icon: Banknote,
            variant: pathname === "/admin/reporting" ? "default" :"ghost",
            href: "/admin/reporting",
          },
          {
            title: "Tickets",
            icon: TicketCheck,
            variant: pathname === "/admin/tickets" ? "default" :"ghost",
            href: "/admin/tickets",
          },
          {
            title: "Analysis",
            icon: BarChart,
            variant: pathname === "/admin/analysis" ? "default" :"ghost",
            href: "/admin/analysis",
          },
          {
            title: "Settings",
            icon: Settings,
            variant: pathname === "/admin/settings" ? "default" :"ghost",
            href: "/admin/settings",
          },
        ]}
      />
    </div>
  );
};

export default SideBar;
