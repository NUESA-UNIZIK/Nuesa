import React from "react";
import Aboutimage from "../../assets/Engineering.png";

const About = () => {
  return (
    <div className="xl:mx-[11.5rem] mt-[4rem] md:mt-[4rem]">
      <div className="md:flex lg:flex-row justify-center sm:flex-row gap-2">
        <div className="md:w-[50%] mx-6 md:px-0">
          <h1 className="font-bold lg:text-[24px] text-[18px] md:mb-1">
            ABOUT NUESA
          </h1>
          <hr className="w-[8%] border-2 border-primary mb-8" />
          <div className="md:hidden  mb-3">
            <img src={Aboutimage} alt="" className="w-[509px] rounded-md" />
          </div>
          <p className="lg:w-[82%] md:w-[96%] md:text-[16px] text-[14px] mb-2 md:mb-8">
            Nigerian Universities Engineering Students’ Association (NUESA)
            National Body is the students wing of Nigerian Society of Engineers
            (NSE). This is the National, Active, Progressive and Democratic
            Association formed for the sole purpose of promoting the welfare and
            interest of her members.
          </p>

          <p className="w-[82%] md:w-[96%] hidden md:block mb-5">
            NUESA is aim at creating a platform where engineering students can
            learn from practicing Engineers from diverse fields of Engineering.
            So as to help in shaping the course of technological development of
            Nigeria by encouraging and carrying out industrial projects,
            offering useful and constructive suggestions to the government and
            the bodies responsible for the making of the nation's technological
            policies.
          </p>
      
        </div>

        <div className=" hidden md:block">
          <img
            src={Aboutimage}
            alt=""
            className="w-[509px] h-[392px] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
