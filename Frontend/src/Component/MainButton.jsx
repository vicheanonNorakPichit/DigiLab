import React from "react";

function MainButton(props) {
  return (
    <button className="btn bg-main border-none hover:bg-second text-light transition-all hover:translate-y-[-4px]">
      {props.text}
    </button>
  );
}

export default MainButton;
