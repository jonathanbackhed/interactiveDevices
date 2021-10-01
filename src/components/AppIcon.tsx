import React from "react";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  name?: string;
  to: string;
  href: boolean;
}

export const AppIcon = ({ image, name, to, href }: Props) => {
  if (href) {
    return (
      <a href={to} target="_blank">
        <div className="my-2">
          <div className="w-[70px] h-[70px] bg-white rounded-3xl">
            <img
              src={image}
              className="w-[70px] h-[70px] rounded-2xl"
              alt="app icon"
            />
          </div>
          {name && <h1 className="text-center text-white text-xs">{name}</h1>}
        </div>
      </a>
    );
  } else {
    return (
      <Link to={`/${to}`}>
        <div className="my-2">
          <div className="w-[70px] h-[70px] bg-white rounded-3xl">
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
  }
};
