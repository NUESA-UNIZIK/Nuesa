import React from "react";
import Book from "../../assets/aboutnuesa.svg";
import Newspaper from "../../assets/missionnuesa.svg";
import Achievement from "../../assets/aimnuesa.svg";

const Stats = () => {
  return (
    <div className="lg:ml-[3.5rem]  md:mt-[2rem] lg:container lg:max-w-[90%] mx-auto p-12 lg:mt-[3rem] rounded-[20px]">
      <div className="text-center relative -mt-12 md:-mt-[6rem] mb-12 ">
        <h1 className="md:text-[24px] font-bold mb-1">NUESA UNIZIK CHAPTER</h1>
        <hr className="md:w-[29%] w-[73%] absolute md:left-[23rem] left-[2rem] border-2 border-primary mb-8" />
      </div>
      <div className="md:flex md:flex-row -mx-8 md:mx-0 flex-col md:gap-[20px]">
        <div className="bg-courses text-black -mt-8 md:-mt-0 text-center px-2 bg-no-repeat bg-top md:bg-[length:200px_200px] bg-[length:200px_100px]  rounded-md shadow-2xl md:min-h-[377px] h-[249px] md:w-[356px] bg-white">
          <img
            src={Book}
            alt=""
            className="md:w-[73px]  w-[45px] mx-[8rem]  my-[4rem] xl:mx-[7rem] md:mx-[4rem] h-[100px]"
          />
          <div className="-mt-16">
            <h1 className="font-[700] md:text-[24px] mb-2">ABOUT NUESA</h1>
            <p className="md:text-[16px] text-[14px]">
              Nigerian Universities Engineering Students’ Association (NUESA)
              National Body is the students wing of Nigerian Society of
              Engineers (NSE).
            </p>
          </div>
        </div>

        <div className="bg-courses text-black  text-center px-2 bg-no-repeat bg-top md:bg-[length:200px_200px] bg-[length:200px_100px]  rounded-md shadow-2xl md:min-h-[377px] md:-mt-0 -mt-14 h-[249px] md:w-[356px] bg-white">
          <img
            src={Newspaper}
            alt=""
            className="md:w-[73px] w-[45px] mx-[8rem]  my-[4rem] xl:mx-[7rem] md:mx-[4rem] h-[100px]"
          />
          <div className="-mt-16">
            <h1 className="font-[700] px-[4rem] md:text-[24px] mb-3">
              MISSION & CORE VALUES
            </h1>
            <p className="md:text-[16px] text-[14px]">
              To create a platform where Engineering students can learn from
              practicing Engineers from diverse fields of Engineering
            </p>
          </div>
        </div>

        <div className="bg-courses text-black  text-center px-2 bg-no-repeat bg-top md:bg-[length:200px_200px] bg-[length:200px_100px]  rounded-md shadow-2xl md:min-h-[377px] md:-mt-0 -mt-14 h-[249px] md:w-[356px] bg-white">
          <img
            src={Achievement}
            alt=""
            className="md:w-[73px] w-[45px] mx-[8rem]  my-[4rem] xl:mx-[7rem] md:mx-[4rem] h-[100px]"
          />
          <div className="-mt-16">
            <h1 className="font-[700] md:text-[24px] mb-3">AIM</h1>
            <p className="md:text-[16px] text-[14px]">
              To encourage socialization, learning and exposure amongst
              engineering students in Nigeria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
