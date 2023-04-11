import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-neutral-300 h-screen flex justify-center items-center text-gray-700">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-16">
          Ops! Error 404. Page not found.
        </h1>
        <Link
          to="/"
          className="text-2xl font-extrabold rounded-xl bg-red-400 p-5"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
