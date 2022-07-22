import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="bg-teal-500 px-2 py-4 md:px-4 lg:px-6 flex justify-center">
      <div className="w-full lg:w-[1600px]">
        <div className="flex  justify-between px-4">
          <Link to="/">
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
          <Link
            to="cart"
            className="inline-block sm:text-sm px-4 py-2 md:text-l px-4 py-2 leading-none border rounded
          text-white border-white hover:border-transparent hover:text-teal-500
          hover:bg-white  lg:mt-0"
          >
            Cart{" "}
            {props.countCartItems ? (
              <button>{`(${props.countCartItems})`}</button>
            ) : (
              ""
            )}
          </Link>
        </div>
        <div className="">
          <div className="text-s md:text-l 2l:text-xl flex  justify-center pt-3">
            <Link
              to="/"
              className="block  lg:inline-block lg:mt-0 text-teal-200 hover:text-white px-6"
            >
              Home
            </Link>
            <Link
              to="/menu/Drinks"
              className="block  lg:inline-block lg:mt-0 text-teal-200 hover:text-white px-6"
            >
              Menu
            </Link>
            <Link
              to="/about_us"
              className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white px-6"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
