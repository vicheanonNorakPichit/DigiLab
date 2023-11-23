import React from "react";

function Feature(props) {
  return (
    <div className="">
      <div className="card w-96 ">
        <figure
          className="px-10 pt-10"
          // style={{ backgroundImage: `url(${props.image})` }}
        >
          <img src={props.image} alt="cost" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
