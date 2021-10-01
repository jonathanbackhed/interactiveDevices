import React, { useState, useEffect } from "react";

interface Clock {
  hour: number;
  minute: number;
}

export const Clock = () => {
  const [time, setTime] = useState("");

  const changeTime = (localTime: any) => {
    setTimeout(() => {
      console.log("Setting time!");
      setTime(localTime);
    }, 1000);
  };

  useEffect(() => {
    let date = new Date();
    let localTime = date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
    changeTime(localTime);
  }, [time]);

  return <span>{time}</span>;
};
