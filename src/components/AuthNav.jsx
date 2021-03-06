import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

// Navigation bar for logged in and authenticated users
function AuthNav() {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="bg-gray-700 px-2 py-4 md:px-4 lg:px-6 flex justify-center">
      <div className="w-full lg:w-[1680px]">
        <div className="flex  justify-between px-4">
          <Link to="/admin">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <svg
                className="fill-current h-8 w-8 mr-2"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
              </svg>
              <span className="font-semibold sm:text-l md:text-xl lg:text-2xl tracking-tight">
                Coder Cafe
              </span>
            </div>
          </Link>
          <div>
            {isAuthenticated && (
              <button
                className="inline-block sm:text-sm px-4 py-2 md:text-l leading-none border rounded
              text-white border-white hover:border-transparent 
              hover:bg-gray-400  lg:mt-0"
              >
                <LogoutButton />
              </button>
            )}
          </div>
        </div>
        <div>
          <div className="text-s md:text-l lg:text-xl flex  justify-center p-3 flex-wrap text-white">
            <Link
              to="/admin"
              className="block lg:inline-block lg:mt-0 hover:text-gray-400 px-6"
            >
              Home
            </Link>
            <Link
              to="/admin/menu/Drinks"
              className="block lg:inline-block lg:mt-0 hover:text-gray-400 px-6"
            >
              Menu
            </Link>
            <Link
              to="/admin/about_us"
              className="block lg:inline-block lg:mt-0 hover:text-gray-400 px-6"
            >
              About Us
            </Link>
            <Link
              to="/admin/orders"
              className="block lg:inline-block lg:mt-0 hover:text-gray-400 px-6"
            >
              Orders
            </Link>
            <Link
              to="/admin/orders/history"
              className="block lg:inline-block lg:mt-0 hover:text-gray-400 px-6"
            >
              History
            </Link>
            <Link
              to="/admin/profile"
              className="block lg:inline-block lg:mt-0 hover:text-gray-400 px-6"
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AuthNav;
