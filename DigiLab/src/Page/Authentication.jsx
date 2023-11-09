import React from "react";

function Authentication() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center">
          <h1 className="lg:text-5xl text-3xl font-bold text-second">
            Login now!
          </h1>
          <p className="py-6 lg:text-lg text-sm text-dark">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm bg-main bg-opacity-50">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-light">
                  Phone Number
                </span>
              </label>
              <input
                type="phone"
                placeholder="phone number"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
