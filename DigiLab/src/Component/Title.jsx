import React from "react";

function Title(props) {
  return (
    <h1
      className="mb-5 lg:text-5xl font-bold md:text-3xl sm:text-2xl text-main"
      style={{ fontFamily: props.font }}
    >
      {props.title}
    </h1>
  );
}

export default Title;
