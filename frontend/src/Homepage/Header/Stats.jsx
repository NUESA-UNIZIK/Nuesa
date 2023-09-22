import React from "react";
import Book from "../../assets/Frame 384 (1).svg";
import Newspaper from "../../assets/Frame 385 (1).svg";
import Achievement from "../../assets/Frame 386 (1).svg";

const Stats = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="md:text-[24px] font-bold mb-1">NUESA UNIZIK CHAPTER</h1>
        <hr className="md:w-[305px] w-[205px] mx-auto border-2 border-primary mb-8" />
      </div>
      <div className="bg-white overflow-x-auto  mt-[3rem]">
        <div className="flex md:gap-[28px] gap-4 h-96  overflow-x-scroll md:overflow-x-hidden scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200 w-[1050px] md:w-full justify-center ">
          <div className="text-black text-center px-6 rounded-md shadow-2xl h-[377px] md:h-[377px] w-[356px] md:w-[356px] bg-white">
            <img src={Achievement} alt="book" className="mx-auto" />
            <div className="">
              <h1 className="font-bold text-[20px]">ABOUT NUESA</h1>
              <p>
                Nigerian Universities Engineering Students’ Association (NUESA)
                National Body is the students wing of Nigerian Society of
                Engineers (NSE).
              </p>
            </div>
          </div>

          <div className="text-black  text-center px-6 rounded-md shadow-2xl h-[377px] md:h-[377px] w-[356px] md:w-[356px] bg-white">
            <img src={Newspaper} alt="book" className="mx-auto" />
            <div>
              <h1 className="font-bold text-[20px]">MISSION & CORE VALUES</h1>
              <p>
                To create a platform where Engineering students can learn from
                practicing Engineers from diverse fields of Engineering
              </p>
            </div>
          </div>

          <div className="text-black  text-center px-6 rounded-md shadow-2xl h-[377px] md:h-[377px] w-[356px] md:w-[356px] bg-white">
            <img src={Achievement} alt="book" className="mx-auto" />
            <div>
              <h1 className="font-bold text-[20px]">AIM</h1>
              <p>
                To encourage socialization, learning and exposure amongst
                engineering students in Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
