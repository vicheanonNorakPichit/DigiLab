import React from "react";

function Hero(props) {
  return (
    <div className="hero h-fit ">
      <div className="hero-content text-center lg:flex flex-col md:mt-0 gap-6">
       
          <h1 className=" text-3xl lg:text-5xl font-extrabold ">{props.title}</h1>
          <p className=" text-dark text-lg ">{props.text}</p>
          {/* <button className="btn bg-second text-light border-none">
            {props.buttonText}
          </button> */}
        
      </div>
    </div>
  );
}

export default Hero;
``;
