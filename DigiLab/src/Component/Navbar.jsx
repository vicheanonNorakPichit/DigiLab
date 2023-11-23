import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
function Navbar() {
  return (
    <div className="absolute navbar my-5 bg-transparent text-main z-10 font-poppins ">
      <div className="navbar-start ml-40  text-justify">
        <Link
          to=""
          className="btn hover:bg-transparent bg-transparent border-none normal-case text-xl text-main"
        >
          <img src={logo} alt="" className=" w-36 object-fill" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:contents mx:5">
        <Link className=" min-w-fit hover:font-bold mx-5 hover:translate-y-1 transition-all">
          ទំព័រដើម
        </Link>
        <div className="dropdown dropdown-hover ">
          <div
            tabIndex={0}
            className=" text-center w-40 mx-5 hover:translate-y-1 transition-all hover:font-bold"
          >
            មុខវិជ្ជាពិសោធន័
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>គីមីវិទ្យា</a>
            </li>
            <li>
              <a>រូបវិទ្យា</a>
            </li>
            <li>
              <a>ផែនដីវិទ្យា</a>
            </li>
          </ul>
        </div>
        <Link className=" min-w-fit mx-5 hover:font-bold hover:translate-y-1 transition-all">
          ព័ត៍មាន{" "}
        </Link>
        {/* <Link className="mx-5 hover:font-bold hover:translate-y-1 transition-all">
          Contact
        </Link> */}
      </div>

      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle md:visible hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
        </button>
        <Link
          to="Authentication"
          className="btn btn-md text-[12px] mx-2 bg-main text-light border-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
