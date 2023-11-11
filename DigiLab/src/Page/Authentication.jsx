import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Authentication() {
  const [phoneNum, setPhoneNum] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setPhoneNum(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return phoneNumberPattern.test(phoneNumber);
  };

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
        <div className="card flex-shrink-0 w-full max-w-sm bg-light shadow-2xl ">
          {valid ? (
            <div className="hidden"></div>
          ) : (
            <div className="text-center">
              <p className="text-main">
                សូមវាយបញ្ចូលលេខទូរស័ព្ទរបស់់អ្នកឲបានត្រឹមត្រូវ!!!
              </p>
            </div>
          )}
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="font-semi-bold text-main text-xl">
                  លេខទូរស័ព្ទ
                </span>
              </label>
              <PhoneInput
                country={"kh"}
                type="phone"
                placeholder=""
                className=" "
                onChange={handleChange}
                value={phoneNum}
                inputProps={{ required: true }}
              />
            </div>
          </form>
          <div className="form-control mt-6">
            <button
              className="btn bg-main border-none text-light font-poppins rounded-t-none"
              onClick={() => {
                console.log(phoneNum);
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
