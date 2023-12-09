import React from "react";
import heroBg1 from "../assets/image/heroBg1.jpg";
function ValueProposition() {
  return (
    <div className="card rounded-3xl lg:card-side lg:p-5 md:p-20 p-5">
      <figure className="lg:w-[50%]">
        <img src={heroBg1} alt="" />
      </figure>
      <div className="card-body rounded-b-3xl lg:w-[50%] bg-main lg:rounded-r-3xl lg:rounded-l-none text-center lg:text-left">
        <h2 className="card-title text-second text-3xl ">Join Now</h2>
        <p className="text-light">
          Group Experiment
        </p>
      </div>
    </div>
  );
}

export default ValueProposition;
