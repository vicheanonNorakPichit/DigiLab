import React from "react";
import logo3d from "../assets/image/logo3d.png";

function Hero(props) {
  return (
    <div className="hero h-fit bg-green ">
      <div className="hero-content text-center p-[10%] lg:flex flex-col-reverse md:mt-0 mt-20">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-main">{props.title}</h1>
          <p className="mb-5 text-dark">{props.text}</p>
          {/* <button className="btn bg-second text-light border-none">
            {props.buttonText}
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
