import React from "react";
import physic from "../assets/image/physic.jpg";

function Class(props) {
  return (
    <div className="hover:bg-light">
      {/* <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure >
                    <img src={p10} alt="class10" />
                </figure>
            </div> */}

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={physic} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          {/* <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions">
            <button className="btn btn-primary">Physic</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Class;
