import React from "react";
import Hero from "../Component/Hero";

import Feature from "../Component/Feature";
import Subject from "../Component/Subject";

import chemistry1 from "../assets/image/chemistry1.jpg";
import physic from "../assets/image/physic.jpg";
import earth1 from "../assets/image/earth1.jpg";
import cost1 from "../assets/image/cost1.png";
import quality from "../assets/image/quality.png";
import accessible from "../assets/image/accessible.png";

// import promotion from "../assets/video/promotion.mp4";

function Homepage() {
  return (
    <div className="w-full h-full bg-light font-poppins flex flex-col gap-10 space-y-1 justify-center items-center">
      <div className=" p-[10%] pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* <video
          className="rounded-xl"
          src={promotion}
          controls="controls"
          autoPlay="true"
        >
          video
        </video> */}
        <Hero
          title="Digi-Lab Digi-Life Digi-Learn"
          text="Digi-lab គឺជាកម្មវិធីសិក្សាមួយ ដែលអាចឱ្យសិស្សានុសិស្ស លោកគ្រូ អ្នកគ្រូអនុវត្តន៍ការពិសោធន៍តាមបែប ឌីជីថលលើមុខវិជ្ជាវិទ្យាសាស្ត្រពិត 
          នៅកម្រិតថ្នាក់វិទ្យាល័យពីទី១០-១២"
          font="poppins"
          // buttonText="Click Me"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-main">
        <Subject image={chemistry1} text="Chemistry" />
        <Subject text="Physics" image={physic} />
        <Subject text="Geography" image={earth1} />
      </div>
      {/* <div className=" lg:w-[80%] lg:flex lg:flex-col lg:justify-center lg:items-center">
        <ValueProposition />
        <ValueProposition />
        <ValueProposition /> 
      </div>*/}
      <div className="">
        <Hero title="ហេតុអ្វីគួរជ្រើសរើសធ្វើពិសោធន៌តាម Digi-Lab?" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <Feature image={cost1} title="តម្លៃសមរម្យ" text="តម្លៃសមរម្យគួរ" />
          <Feature image={quality} text="គុណភាពនៃការអប់រំ" />
          <Feature image={accessible} text="ភាពងាយស្រួល" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
