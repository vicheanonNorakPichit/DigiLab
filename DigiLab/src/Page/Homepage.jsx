import React from "react";
import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import Class from "../Component/Class";
import ValueProposition from "../Component/ValueProposition";

function Homepage() {
  return (
    <div className="w-full h-full bg-light text-main font-poppins flex flex-col justify-center items-center">
      <Hero
        title="Welcome!"
        text="Choose Grade"
        // buttonText="Click Me"
      />
      <div className="grid grid-cols-3 gap-4">
        <Class />
        <Class />
        <Class />
      </div>
      <div className=" lg:w-[80%] lg:flex lg:flex-col lg:justify-center lg:items-center">
        <ValueProposition />
        <ValueProposition />
        <ValueProposition />
      </div>
    </div>
  );
}

export default Homepage;
