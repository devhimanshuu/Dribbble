/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import icon from "../assets/images/brief24px.png";
import logo from "../assets/images/dribbble black.png";
const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white shadow ">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-7 mr-2 grayscale pr-5 cursor-pointer"
        />
        <nav className="text-base ">
          <ul className="flex space-x-4 font-sans space-x-6 ">
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-1000 text-sm font-medium"
              >
                Inspiration
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-1000  text-sm font-medium"
              >
                Find Work
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-1000  text-sm font-medium"
              >
                Learn Design
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-1000  text-sm font-medium"
              >
                Go Pro
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-1000  text-sm font-medium"
              >
                Hire Designers
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className=" flex justify-end space-x-5">
        <div className="flex items-center bg-slate-100 rounded-lg px-3 py-2  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 cursor-pointer"
            viewBox="0 0 20 20"
            fill="grey"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="flex-grow w-20 ml-1  bg-transparent outline-none text-sx "
          />
        </div>
        <div className="flex items-center bg-gray-100 rounded-full bg-transparent w-5">
          <div className="filter grayscale">
            <img
              src={icon}
              alt="iconn"
              className="bg-white bg-opacity-25 cursor-pointer "
            />
          </div>
        </div>
        <div className="flex -space-x-2  overflow-hidden flex items-center justify-between">
          <img
            className="inline-block h-8 w-8 rounded-full cursor-pointer "
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="lady-imag"
          />
        </div>

        <div className="flex items-center space-x-2">
          <button className="bg-pink-500 hover:bg-pink-400 text-white font-medium py-2 px-4 rounded-md mr-3">
            Upload
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
