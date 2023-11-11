import React from "react";
import heroBg from "../assets/image/heroBg.jpg";
function ValueProposition() {
  return (
    <div className="card rounded-3xl lg:card-side lg:p-5 md:p-20 p-5">
      <figure className="lg:w-[50%]">
        <img src={heroBg} alt="" />
      </figure>
      <div className="card-body rounded-b-3xl lg:w-[50%] bg-main lg:rounded-r-3xl lg:rounded-l-none">
        <h2 className="card-title text-second">Join Now</h2>
        <p className="text-light">
          Group Experiment
        </p>
      </div>
    </div>
  );
}

export default ValueProposition;
