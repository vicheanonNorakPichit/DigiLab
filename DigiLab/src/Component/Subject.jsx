import React from 'react'
import chemistry1 from "../assets/image/chemistry1.jpg";
function Subject() {
  return (
    <div>
        <div className="hover:bg-light">
        
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={chemistry1} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    {/* <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    <div className="card-actions">
                        <button className="btn btn-primary">Chemistry</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subject