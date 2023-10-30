import { BoltLightening } from "@/public/icon/bolt";
import React, { useEffect, useState } from "react";
import { BsLightningCharge, BsLightningChargeFill } from "react-icons/bs";

import { useBattery } from "react-use";

export const Battery: React.FC = () => {
  // Calling useBattery hook
  const batteryState = useBattery();

  console.log(batteryState);
  if (!batteryState.isSupported) {
    return (
      <div>
        <strong>Battery sensor</strong>: <span>not supported</span>
      </div>
    );
  }

  if (!batteryState.fetched) {
    return (
      <div>
        <strong>Battery sensor</strong>: <span>supported</span> <br />
        <strong>Battery state</strong>: <span>fetching</span>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      {/* <strong>Battery sensor</strong>:&nbsp;&nbsp; <span>supported</span> <br />
      <strong>Battery state</strong>: <span>fetched</span> <br />
      <strong>Charge level</strong>:&nbsp;&nbsp;{" "}
      <span>{(batteryState.level * 100).toFixed(0)}%</span> <br />
      <strong>Charging</strong>:&nbsp;&nbsp;{" "}
      <span>{batteryState.charging ? "yes" : "no"}</span> <br />
      <strong>Charging time</strong>:&nbsp;&nbsp;
      <span>
        {batteryState.chargingTime ? batteryState.chargingTime : "finished"}
      </span>{" "}
      <br />
      <strong>Discharging time</strong>:&nbsp;&nbsp;{" "}
      <span>{batteryState.dischargingTime}</span> */}

      <div className="h-3 w-6 border border-solid border-slate-300 rounded-sm m-[2px] p-[1px]  relative duration-150">
        <div
          style={{ width: `${(batteryState.level * 100).toFixed(0)}%` }}
          className={`h-full bg-white rounded-[2px] relative duration-150 ${
            batteryState.level * 100 < 10 ? "bg-red-600" : "bg-white "
          }`}
        />
        {batteryState.charging && (
          <BoltLightening className="absolute bottom-[-1px] left-1/2 transform -translate-x-1/2 duration-150 text-slate-300" />
        )}
      </div>
      <span className="w-[1.5px] h-[3px] bg-slate-300 rounded-r-full -ml-[1px]" />
    </div>
  );
};
