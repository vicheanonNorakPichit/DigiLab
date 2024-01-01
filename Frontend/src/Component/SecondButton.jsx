import React from "react";

function SecondButton(props) {
  return (
    <button
      className="btn bg-second border-none hover:bg-main text-light transition-all hover:translate-y-[-4px]"
      onClick={() => {
        props.onClickHandler;
      }}
    >
      {props.text}
    </button>
  );
}

export default SecondButton;
