import React from "react";

function Hero(props) {
  return (
    <div className="hero h-fit ">
      <div className="hero-content text-center lg:flex flex-col-reverse md:mt-0 mt-20">
        <div className="max-w ">
          <h1 className="mb-5 text-5xl font-bold text-second">{props.title}</h1>
          <p className="mb-5 text-main text-sm font-koulen">{props.text}</p>
          {/* <button className="btn bg-second text-light border-none">
            {props.buttonText}
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
``;
