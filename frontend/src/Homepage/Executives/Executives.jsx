import React from "react";
import Executivesslider from "./Executivesslider";

const Executives = () => {
  return (
      <div className="bg-[#F5F5F5] hidden xl:mt-20 md:mt-[5rem] lg:block lg:bg-white md:h-auto h-[341px] md:py-0 py-4">
      <div className="xl:mx-[6rem] xl:py-0 md:py-4 mx-6">
        <div className="ml-[8rem]">
          <h1 className="font-bold  md:text-[24px] mb-1">2020/2021 NUESA UNIZIK EXECUTIVE</h1>
          <hr className="w-[5%] border-2 border-primary" />
        </div>
        <Executivesslider/>
      </div>
    </div>
  );
};

export default Executives;
