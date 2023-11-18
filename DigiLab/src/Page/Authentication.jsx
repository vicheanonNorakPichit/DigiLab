import React, { useEffect, useState } from "react";
import EmailPasswordLogin from "../Component/Authentication/EmailPasswordLogin";
import PhoneNumberLogin from "../Component/Authentication/PhoneNumberLogin";
import { Link } from "react-router-dom";

import Profile from "../Component/Authentication/Profile";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

function Authentication() {
  const [phone, setPhone] = useState(false);
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <div>
      {user ? (
        <Profile email={user?.email} />
      ) : (
        <div className="hero min-h-screen mt-16">
          <div className="hero-content flex-col lg:flex-row ">
            {phone ? <PhoneNumberLogin /> : <EmailPasswordLogin />}
            <div className="font-poppins text-main">
              <button
                onClick={() => {
                  setPhone(!phone);
                }}
              >
                Switch Login
              </button>
            </div>
            <div className="font-poppins text-main">
              <Link to="../SignUp" className="btn ">
                អត់ទាន់មានគណនី?
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Authentication;
