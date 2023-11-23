import React, { useState } from "react";
import EmailPasswordLogin from "../Component/Authentication/EmailPasswordLogin";
import PhoneNumberLogin from "../Component/Authentication/PhoneNumberLogin";

function Authentication() {
  const [phone, setPhone] = useState(true);

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center lg:mr-20">
          <h1 className="lg:text-5xl text-3xl font-bold text-second">
            <span className="text-sec mx-5 text-main">ធ្វើការពិសោធន៍</span>
            ឥឡូវនេះ!!!
          </h1>
          <p className="py-6 lg:text-lg text-sm font-thin text-main">
            ចាប់ផ្តើមធ្វើការពិសោធន៍បានដោយត្រឹមតែចូលប្រើប្រាស់លេខទូរស័ព្ទរបស់អ្នក
          </p>
        </div>
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
      </div>
    </div>
  );
}

export default Authentication;
