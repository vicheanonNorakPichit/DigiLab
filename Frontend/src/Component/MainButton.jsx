import React from "react";

function MainButton(props) {
  return (
    <button className="btn bg-main border-none text-light">{props.text}</button>
  );
}

export default MainButton;
