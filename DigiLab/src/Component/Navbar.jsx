import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

function Navbar() {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="absolute navbar bg-transparent text-main z-10 font-poppins h-20">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-dark"
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
      </div>
      <div className="navbar-center">
        <Link>
          <img src={logo} alt="" className=" w-32 h-fit" />
        </Link>
        {/* <Link className="mx-5 hover:font-bold hover:translate-y-1 transition-all">
          Contact
        </Link> */}
      </div>

      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle md:visible hidden">
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

        {user ? (
          <Link
            to="Authentication"
            className="btn btn-sm text-[10px] mx-2 bg-main text-light border-none"
            onClick={logOut}
          >
            Logout
          </Link>
        ) : (
          <Link
            to="Authentication"
            className="btn btn-sm text-[10px] mx-2 bg-main text-light border-none"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
