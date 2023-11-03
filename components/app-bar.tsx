"use client";

import Image from "next/image";
import { scaleValue } from "@/utils/scale";
import { useRef } from "react";

const maxAdditionalSize = 5;
export const AppBar = () => {
  const dockRef = useRef<HTMLDivElement>(null);

  const handleAppHover = (ev: React.MouseEvent<HTMLImageElement>) => {
    if (!dockRef.current) return;

    const mousePosition = ev.clientX;
    const iconPositionLeft = ev.currentTarget.getBoundingClientRect().left;
    const iconWidth = ev.currentTarget.getBoundingClientRect().width;

    const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
    const offsetPixels = scaleValue(
      cursorDistance,
      [0, 1],
      [maxAdditionalSize * -1, maxAdditionalSize]
    );

    dockRef.current.style.setProperty(
      "--dock-offset-left",
      `${offsetPixels * -1}px`
    );

    dockRef.current.style.setProperty(
      "--dock-offset-right",
      `${offsetPixels}px`
    );
  };

  return (
    <div
      ref={dockRef}
      className=" absolute  bottom-4 left-1/2 transform -translate-x-1/2 p-2 bg-blend-multiply backdrop-blur-2xl rounded-[20px] bg-[rgba(245,245,245,0.15)] "
    >
      <div className="dock-item flex gap-2 items-center">
        {[...Array(12).keys()].map((num) => (
          <div className="app" key={num} onMouseMove={handleAppHover}>
            <Image
              className="cursor-pointer "
              src={`/images/app-bar/image-${num}.png`}
              alt=""
              height={62}
              width={62}
            />
            <span className="tooltip text-xs">Arc Browser</span>
          </div>
        ))}
      </div>
    </div>
  );
};
