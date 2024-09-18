"use client";
import Link from "next/link";
import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@instamate/ui";
import { fascinate } from "../fonts";
import { usePathname } from "next/navigation";
import Profile from "./profile";
import { Bell, Home, Users, Workflow } from "lucide-react";
const links = [
  {
    name: "Home",
    icon: <Home className="h-5 w-5" />,
    href: "/",
  },
  {
    name: "Contacts",
    icon: <Users className="h-5 w-5" />,
    href: "/contacts",
  },
  {
    name: "Automation",
    icon: <Workflow className="h-5 w-5" />,
    href: "/automation",
  },
  {
    name: "Settings",
    icon: <IoSettingsOutline className="w-6 h-6" />,
    href: "/settings",
  },
];

const Sidebar = () => {
  return (
    <>
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link
              href="/"
              className={`${fascinate.className} flex items-center gap-2 font-bold text-3xl`}
            >
              <span className="">InstaMate</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <SidebarLinks />
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* <div className="w-fit h-dvh bg-white px-4 py-2 sticky top-0">
        <div className="flex h-full flex-col gap-2 items-center xl:items-start">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${pathname === link.href && !link.hideTooltip
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
      </div> */}
    </>
  );
};

export const SidebarLinks = () => {
  const pathname = usePathname();
  return links.map((link) => {
    return (
      <Link
        key={link.name}
        href={link.href}
        className={`${
          pathname === link.href ? "bg-muted" : ""
        } flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary`}
      >
        {link.icon}
        {link.name}
      </Link>
    );
  });
};

export default Sidebar;
