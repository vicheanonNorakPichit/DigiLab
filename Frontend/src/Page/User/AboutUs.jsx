import React from "react";

function AboutUs() {
  return (
    <div className="w-full h-full bg-light font-poppins flex flex-col  p-8 pt-6 items-center">
      <div className="p-[10%] pb-20 grid grid-cols-1 lg:grid-cols-3 gap-12 text-main"></div>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-32 card bg-base-200 rounded-box place-items-center">
          <title Digi-Lab />
          <h2 className="text-justify">
            Digi-lab គឺជាកម្មវិធីសិក្សាមួយ ដែលអាចឱ្យសិស្សានុសិស្ស លោកគ្រូ
            អ្នកគ្រូអនុវត្តន៍ការពិសោធន៍តាមបែប ឌីជីថល
          </h2>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow h-32 card rounded-box place-items-center">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Website</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Hotline</div>
              <div className="stat-value">24/7</div>
              <div className="stat-desc">+855 1234567</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Facebook</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc">See more</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
