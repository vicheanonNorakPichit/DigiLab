import React from "react";
import Title from "./Title";
import MainButton from "./MainButton";

function emailPasswordAuth() {
  return (
    <div className="p-20 flex flex-col justify-center items-center">
      <Title title="Web Admin Portal Login Page" font="poppins" />
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-light ">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <MainButton text="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default emailPasswordAuth;
