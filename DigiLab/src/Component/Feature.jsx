import React from 'react'
import cost1 from "../assets/image/cost1.png";
function Feature() {
  return (
    <div className="">
        <div className="card w-96 bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={cost1} alt="cost" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Resonable Price</h2>
      <p>Spend only 1.5$ per month to do experiment</p>
      
    </div>
  </div>
  </div>
  )
}

export default Feature