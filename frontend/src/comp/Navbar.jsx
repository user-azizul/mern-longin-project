import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-center items-center gap-5">
        <div className="text-white text-2xl font-bold">
          <Link to="/">MyApp</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300"
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
