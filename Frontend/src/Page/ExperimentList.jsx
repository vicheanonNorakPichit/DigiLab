import React from "react";
import Grade from "../Component/Grade";
import Lab from "../Component/Lab";

function ExperimentList() {
  return (
    <div className="w-full h-full bg-light font-poppins flex flex-col  p-8 pt-6 items-center">
      <div className="p-[10%] pt-[20%] md:pt-[10%] flex justify-center items-center text-main gap-4 md:gap-10 lg:gap-20">
        <Grade text="ថ្នាក់ទី ១០" />
        <Grade text="ថ្នាក់ទី ១១" />
        <Grade text="ថ្នាក់ទី ១២" />
      </div>

      <div className="">
        <Lab />
      </div>
    </div>
  );
}

export default ExperimentList;
