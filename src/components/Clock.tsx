import React, { useState, useEffect } from "react";

export const Clock = () => {
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    setTimeout(() => {
      let currentDate = new Date();
      setDate(currentDate);
    }, 1000);
  }, [date]);

  return (
    <span>
      {date?.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}
    </span>
  );
};
