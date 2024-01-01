import React from "react";

function Grade(props) {
  return (
    <div className="card border-solid border-2 h-10 w-20 md:h-16 md:w-24 lg:h-20 lg:w-28 rounded-lg flex justify-center items-center text-xs md:text-sm lg:text-lg">
      {props.text}
    </div>
  );
}

export default Grade;
