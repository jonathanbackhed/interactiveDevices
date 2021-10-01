import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl text-center m-2">HOME</h1>
      <div>
        <Link
          to="iphone"
          className="text-2xl px-3 py-2 bg-blue-400 text-white rounded-md"
        >
          iPhone
        </Link>
        <Link
          to="iphone"
          className="text-2xl px-3 py-2 bg-blue-400 text-white rounded-md"
        >
          MacBook
        </Link>
      </div>
    </div>
  );
};

export default Home;
