import React from "react";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  name?: string;
  to: string;
}

export const AppIcon = ({ image, name, to }: Props) => {
  return (
    <Link to={`/${to}`}>
      <div className="my-2">
        <div className="w-[70px] h-[70px] bg-green-500 rounded-2xl">
          <img
            src={image}
            className="w-[70px] h-[70px] rounded-2xl"
            alt="app icon"
          />
        </div>
        {name && <h1 className="text-center text-white text-xs">{name}</h1>}
      </div>
    </Link>
  );
};
