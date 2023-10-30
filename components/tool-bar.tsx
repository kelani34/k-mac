"use client";

import { AiFillApple } from "react-icons/ai";
import { BiWifi2 } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";
import { BsBattery } from "react-icons/bs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getCurrentDateTime } from "@/lib/utils";
import { Battery } from "./ui/battery";

export const Toolbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const formattedDateTime = getCurrentDateTime();
      setCurrentDateTime(formattedDateTime);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white px-4 py-[.3px] flex text-xs justify-between">
      <div className="flex gap-5">
        <span className="flex gap-2 items-center">
          <div>
            <AiFillApple className="h-4 w-4" />
          </div>
          <div className="text-white">
            <h1 className="text-white font-bold capitalize ">Home</h1>
          </div>
        </span>
        <span className="flex ">
          <p className="cursor-pointer hover:bg-slate-800 px-2 py-1 rounded-sm">
            File
          </p>
          <p className="cursor-pointer hover:bg-slate-800 px-2 py-1 rounded-sm">
            Edit
          </p>
          <p className="cursor-pointer hover:bg-slate-800 px-2 py-1 rounded-sm">
            View
          </p>
          <p className="cursor-pointer hover:bg-slate-800 px-2 py-1 rounded-sm">
            Go
          </p>
          <p className="cursor-pointer hover:bg-slate-800 px-2 py-1 rounded-sm">
            Window
          </p>
          <p className="cursor-pointer hover:bg-slate-800 px-2 py-1 rounded-sm">
            Help
          </p>
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Battery />
        <BiWifi2 className="h-5 w-5 " />
        <IoMdSearch className="h-4 w-4 " />
        <div>
          <Image
            src="/images/tool-bar-siri-icon.png"
            alt=""
            height={14}
            width={14}
          />
        </div>
        <div>
          <p>{currentDateTime}</p>
        </div>
      </div>
    </div>
  );
};
