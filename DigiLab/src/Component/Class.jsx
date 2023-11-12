import React from "react";
import p10 from "../assets/image/p10.jpg";
import p11 from "../assets/image/p11.jpg";
import p12 from "../assets/image/p12.jpg";

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
          <img src={p10} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          {/* <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Class;
