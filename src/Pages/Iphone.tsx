import React from "react";

import { Clock } from "../components/Clock";
import { AppIcon } from "../components/AppIcon";
import { Dock } from "../components/Dock";

const Iphone = () => {
  return (
    <div className="relative bg-iphoneLight dark:bg-iphoneDark bg-no-repeat bg-center bg-iphone rounded-iphone">
      <img src="./src/images/iphone.png" alt="iphone" />
      <div className="absolute rounded-lg text-white w-[80px] h-[25px] top-[23px] left-[53px] text-center">
        {/* 9:41 */}
        <Clock />
      </div>
      <div className="absolute rounded-lg w-[80px] h-[25px] top-[23px] right-[53px]">
        {/* Dynamiskt ändra till olika signalstyrkor */}
        <div className="absolute w-[3px] h-[5px] bg-white bottom-[5px] left-[4px]"></div>
        <div className="absolute w-[3px] h-[7px] bg-white bottom-[5px] left-[9px]"></div>
        <div className="absolute w-[3px] h-[9px] bg-white bottom-[5px] left-[14px]"></div>
        <div className="absolute w-[3px] h-[11px] bg-gray-500 dark:bg-white bottom-[5px] left-[19px]"></div>

        <div className="absolute text-white text-sm bottom-[0px] left-[27px]">
          5G
        </div>

        <div className="absolute w-[20px] h-[9px] bg-white border-2 border-gray-900 border-opacity-10 rounded-sm bottom-[5px] left-[51px]"></div>
        <div className="absolute w-[4px] h-[4px] bg-gray-900 bg-opacity-10 bottom-[7px] left-[70px]"></div>
      </div>
      <div className="absolute rounded-t-lg rounded-b-3xl w-[387px] h-[810px] top-[50px] left-[24px] px-3 py-8">
        <div className="grid grid-cols-4 justify-items-center">
          <AppIcon
            image="./src/images/linkedin-app.png"
            name="LinkedIn"
            to="https://www.linkedin.com/"
            href={true}
          />
        </div>

        <Dock />
      </div>
    </div>
  );
};

export default Iphone;
