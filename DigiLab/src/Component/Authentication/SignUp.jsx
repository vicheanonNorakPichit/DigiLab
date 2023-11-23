import React, { useState } from "react";
import MainButton from "../MainButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { db } from "../../firebase/firebase.config";
import { collection, addDoc } from "firebase/firestore";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        let updatedUser = {
          email: userCredential.user.email,
          phone: userCredential.user.phoneNumber,
          role: "user",
          uid: userCredential.user.uid,
          username: userCredential.user.displayName,
          createdDate: userCredential.user.metadata.creationTime,
        };
        await addDoc(collection(db, "User"), updatedUser);
        console.log(updatedUser);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.replace("/Authentication");
  };
  return (
    <div className="w-full p-20 flex justify-center items-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-light ">
        <form className="card-body" onSubmit={signUp}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              required
            />
          </div>

          <div className="form-control mt-6" type="Submit">
            <MainButton text="Create Account" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
