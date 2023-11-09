import React from "react";

function Hero(props) {
  return (
    <div className="hero h-fit">
      <div className="hero-content bg-light text-center text-neutral-content p-20">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-main">{props.title}</h1>
          <p className="mb-5 text-dark">{props.text}</p>
          <button className="btn bg-second text-light border-none">
            {props.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
