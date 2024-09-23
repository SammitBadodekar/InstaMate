import Image from "next/image";
import React from "react";
import getStartedSvg from "../../public/man-riding-a-rocket.svg";
import { fascinate } from "../fonts";

const Sidebar = () => {
  return (
    <div className="md:h-dvh w-full p-8 flex flex-col justify-center items-center gap-12 bg-lightTheme md:bg-transparent">
      <h1 className={`${fascinate.className} text-4xl md:text-5xl`}>
        InstaMate
      </h1>
      <Image
        src={getStartedSvg}
        alt="rocket"
        width={300}
        height={300}
        className="hidden md:block"
      />
      <p className="text-center text-sm">
        Instamate uses your Facebook account to authenticate with Instagram.
      </p>
    </div>
  );
};

export default Sidebar;
