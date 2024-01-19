import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-screen bg-white dark:bg-gradient-to-t from-black via-gray-950 to-gray-900 items-center justify-center text-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
        <p className="mb-6 text-lg">
          The page you're looking for doesn't seem to exist.
        </p>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-pink-900 hover:text-pink-700 transition duration-300"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
