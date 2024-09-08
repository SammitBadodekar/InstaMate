"use client";
import Link from "next/link";
import React from "react";
import { GoPeople } from "react-icons/go";
import { BiHome } from "react-icons/bi";
import { MdOutlineAutoFixHigh } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@instamate/ui";
import { fascinate } from "../fonts";
import { usePathname } from "next/navigation";
import Profile from "./profile";
const links = [
  {
    name: "",
    icon: (
      <h1 className={`${fascinate.className} mb-4 text-2xl`}>
        <span className="xl:hidden">in</span>
        <span className="hidden xl:block">InstaMate</span>
      </h1>
    ),
    href: "/",
    hideTooltip: true,
  },
  {
    name: "Home",
    icon: <BiHome className="w-7 h-7" />,
    href: "/",
  },
  {
    name: "Contacts",
    icon: <GoPeople className="w-6 h-6" />,
    href: "/contacts",
  },
  {
    name: "Automation",
    icon: <MdOutlineAutoFixHigh className="w-6 h-6" />,
    href: "/automation",
  },
  {
    name: "Settings",
    icon: <IoSettingsOutline className="w-6 h-6" />,
    href: "/settings",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-fit h-dvh bg-white px-4 py-2 sticky top-0">
      <div className="flex h-full flex-col gap-2 items-center xl:items-start">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`${
              pathname === link.href && !link.hideTooltip
                ? "text-green-500"
                : ""
            } p-1 rounded-md w-full`}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <p className="flex items-center gap-2">
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-sm hidden xl:block">{link.name}</span>
                  </p>
                </TooltipTrigger>
                <TooltipContent
                  className={`${link.hideTooltip ? "hidden" : ""} xl:hidden`}
                >
                  <p>{link.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        ))}
        <div className="mt-auto">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
