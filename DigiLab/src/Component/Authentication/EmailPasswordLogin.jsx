import React from "react";
import Title from "../Title";
import MainButton from "../MainButton";

function EmailPasswordLogin() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <Title title="ចូលដោយបំពេញអុីមែលនិងលេខកូដសម្ងាត់"  />
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-light ">
        <form className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-poppins">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered font-poppins"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-poppins">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered font-poppins"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt font-poppins link link-hover">
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

export default EmailPasswordLogin;
