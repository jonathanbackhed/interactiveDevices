import React from "react";

import { AppIcon } from "../components/AppIcon";

export const Dock = () => {
  return (
    <div className="absolute bg-gray-400 bg-opacity-60 dark:bg-opacity-20 h-[100px] w-[370px] left-[9px] bottom-[15px] rounded-3xl">
      <div className="flex justify-around items-center h-full">
        <AppIcon image="./src/images/phone.png" to="" href={false} />
        <AppIcon image="./src/images/mail.png" to="" href={false} />
        <AppIcon image="./src/images/settings.png" to="" href={false} />
        <AppIcon
          image="./src/images/maps.png"
          to="https://www.google.com/maps"
          href={true}
        />
      </div>
    </div>
  );
};
