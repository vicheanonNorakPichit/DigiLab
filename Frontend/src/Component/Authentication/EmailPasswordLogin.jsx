import React, { useState } from "react";
import Title from "../Title";
import MainButton from "../MainButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

function EmailPasswordLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" flex flex-col justify-center items-center">
      <Title title="ចូលដោយបំពេញអុីមែលនិងលេខកូដសម្ងាត់" />
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-light ">
        <form className="card-body" onSubmit={signIn}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <MainButton text="Login" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailPasswordLogin;
