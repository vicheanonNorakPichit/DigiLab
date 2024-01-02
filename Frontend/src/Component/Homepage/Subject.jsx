import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Subject(props) {
  return (
    <Link
      className="flex flex-col gap-5 justify-center items-center w-full"
      to={"experimentList"}
    >
      <div className="card w-72 shadow-xl h-72 flex items-center  hover:opacity-70 hover:translate-y-4 transition-all border-[4px] border-second">
        <span className="text-4xl text-dark p-4">{props.text}</span>
        <div className="w-full h-[100%] text-center pt-8">
          <FontAwesomeIcon icon={props.faIcon} className="text-[140px]" />
        </div>
      </div>
    </Link>
  );
}

export default Subject;
