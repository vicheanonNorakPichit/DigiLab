import React from "react";
import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import ValueProposition from "../Component/ValueProposition";

function Homepage() {
  return (
    <div className="w-full h-full bg-light text-main font-poppins flex flex-col justify-center items-center">
      <Hero
        title="Hi there"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt molestiae porro dicta tempore ipsa numquam eaque commodi harum laudantium veritatis!"
        buttonText="Click Me"
      />
      <div className=" lg:w-[80%] lg:flex lg:flex-col lg:justify-center lg:items-center">
        <ValueProposition />
        <ValueProposition />
        <ValueProposition />
      </div>
    </div>
  );
}

export default Homepage;
