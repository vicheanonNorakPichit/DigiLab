import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../firebase/firebase.config";
import { BsFillShieldLockFill } from "react-icons/bs";
import OTPInput from "otp-input-react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast } from "react-hot-toast";
import { setDoc, doc } from "firebase/firestore";
import { Loading } from "../Loading";

function PhoneNumberLogin() {
  const [ph, setPh] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);
  let updatedUser;

  async function onSignupTel() {
    toast.dismiss();
    setLoading(true);
    await onCaptchaVerify();

    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+" + ph;
    console.log(formatPh);

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error("Error " + errorCode);
        console.log(errorCode);
        setLoading(false);
      });
  }

  function onCaptchaVerify() {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log("prepared phone auth process");
      },
    });
  }

  function onOTPVerify() {
    setLoading(true);
    confirmationResult
      .confirm(otp)
      .then((userCredential) => {
        const SetNewUser = async () => {
          updatedUser = {
            phone: userCredential.user.phoneNumber,
            role: "user",
            uid: userCredential.user.uid,
            username: userCredential.user.displayName,
            createdDate: userCredential.user.metadata.creationTime,
          };
          console.log(updatedUser);
          await setDoc(doc(db, "User", updatedUser.uid), updatedUser);
        };

        if (
          userCredential.user.metadata.creationTime ==
          userCredential.user.metadata.lastSignInTime
        ) {
          SetNewUser();
          console.log("login");
        }

        setUser(userCredential.user);
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error("Error " + errorCode);
        console.log("Error " + error.code);
        console.log(confirmationResult);
        setLoading(false);
      });
  }

  const handleChange = (value) => {
    setPh(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return phoneNumberPattern.test(phoneNumber);
  };

  return showOTP ? (
    <div className="text-main font-poppins">
      <label htmlFor="otp" className="text-center block mb-3 mt-1">
        {" "}
        Log In / Sign Up{" "}
      </label>
      <div className="bg-white text-blue-500 w-fit mb-3 mx-auto p-4 rounded-full">
        <BsFillShieldLockFill size={30} />
      </div>

      <h1 htmlFor="otp" className="text-gray-700 font-bold mb-3 mx-auto">
        {" "}
        Enter Your OTP!{" "}
      </h1>
      <OTPInput
        value={otp}
        onChange={setOtp}
        OTPLength={6}
        otpType="number"
        disabled={false}
        autoFocus
        inputStyles={{ background: "#ececec" }}
        className="text-main font-extrabold"
      ></OTPInput>

      <button
        onClick={onOTPVerify}
        className="drop-shadow-md mt-4 bg-blue-500 w-full flex gap-1 justify-center hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
      >
        {loading && <Loading />}
        <span>Verify OTP</span>
      </button>
    </div>
  ) : (
    <div className="card flex-shrink-0 w-full max-w-sm bg-light shadow-2xl ">
      <form className="card-body">
        {valid ? (
          <div className="hidden"></div>
        ) : (
          <div className="text-center p-2">
            <p className="text-main text-sm">
              សូមវាយបញ្ចូលលេខទូរស័ព្ទរបស់់អ្នកឲបានត្រឹមត្រូវ!!!
            </p>
          </div>
        )}
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
            value={ph}
            inputProps={{ required: true }}
          />
        </div>
      </form>
      <div className="form-control mt-6">
        <button
          id="sign-in-button"
          className="btn bg-main border-none text-light font-thin rounded-t-none"
          onClick={() => {
            onSignupTel();
          }}
        >
          {loading && <Loading />}
          ផ្ញើលេខកូដ <span className="font-poppins font-bold">OTP</span>{" "}
          ទៅកាន់លេខទូរស័ព្ទ
        </button>
      </div>
    </div>
  );
}

export default PhoneNumberLogin;
