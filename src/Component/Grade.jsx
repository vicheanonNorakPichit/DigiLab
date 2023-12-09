import React from "react";

function Grade(props) {
  return (
    <div className="indicator">
      <div className="card  border-4 bottom-2 rounded-lg h-24 bg-sky-500/100">
        <div className="card-body">
          <button className="card-title text-center">{props.text}</button>
        </div>
      </div>
    </div>
  );
}

export default Grade;
