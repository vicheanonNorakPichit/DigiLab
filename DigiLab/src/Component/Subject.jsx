import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

function Subject(props) {
  return (
    <Link className="flex flex-col gap-5" to={"experimentList"}>
      <span className="text-2xl text-main font-bold">{props.text}</span>
      <div
        className="card w-80 bg-base-100 shadow-xl h-80 bg-cover flex items-center bg-center "
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="card-body items-center text-center">
          {/* <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p> */}
        </div>
        <div className="card-actions"></div>
      </div>
    </Link>
  );
}

export default Subject;
