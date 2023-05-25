import React, { useState } from "react";
import img from "../../assets/newsimage.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { Download } from "./Download";
import { YeartwoDesktop } from "./YeartwoDesktop";
import { YeartwoMobile } from "./YearTwoMobile";
import { YeartwoMobileProps } from "./YeartwoMobileProps";
import { FaUserCircle } from 'react-icons/fa';
import {CiSettings } from 'react-icons/ci';
import { BiLogIn } from 'react-icons/bi';

export const YearTwoCourse = () => {
  const [isSetting, setIsSetting] = useState(false)
  const handleShowSetting = () => {
     if (!isSetting) {
      setIsSetting(true)
     } else {
      setIsSetting(false)
     }
  }
  return (
    <>
      <div className=" overflow-x-hidden">
        <div className=" text-center py-[30px] bg-cover fixed top-0 left-0 right-0  bg-[url('/src/assets/circuitlines.jpg')]">
          <h1 className="text-[48px] text-white uppercase relative  font-[700] ">
            Courses
          </h1>
        </div>

        <div className="">
          <div className="flex flex-row my-[30px] mt-[150px] align-center justify-center   gap-[10px] ">
            <Link to="/" className="text-[16px] font-[500] leading-[19.36px] ">
              Home
            </Link>
            <span className="text-[16px] font-[500] leading-[19.36px] ">
              {" "}
              <IoIosArrowForward />{" "}
            </span>
            <Link
              to="/courses"
              className="text-[16px] font-[500] leading-[19.36px] "
            >
              Courses
            </Link>
            <span className="text-[16px] font-[500] leading-[19.36px] ">
              {" "}
              <IoIosArrowForward />{" "}
            </span>
            <Link
              to="/yeartwo"
              className="text-[16px] font-[500] leading-[19.36px] "
            >
              200l Courses{" "}
            </Link>
            
          </div>

          <div className="float-right relative bg-[#fff] hidden   md:flex flex-col gap-[10px] mt-[-50px] mx-[20px]">
             <div onClick={handleShowSetting} className="flex cursor-pointer flex-row  items-center  gap-[10px] ">
              <FaUserCircle  className="text-[#BBBBBB]"/>
              <h1 className="font-[500] text-[16px] ">Nzubechukwu</h1>
             </div>
             { isSetting &&
             <div className="bg-[#fff] shadow-2xl w-[100%] rounded p-[10px] absolute top-[20px]  ">
             <span className="flex rounded flex-row  bg-primary py-[10px] px-[5px]  items-center  gap-[10px] ">
              <CiSettings className="text-[#fff] "/>
              <Link to='/settings' className="text-[#fff] font-[600] text-[16px] ">Settings</Link>
             </span>
             <span className="flex  flex-row  py-[10px] px-[5px]  items-center  gap-[10px]">
              <BiLogIn className="text-darkest "/>
              <h1 className="text-[16px] font-[600] ">Logout</h1>
             </span>
             </div>}
            </div>
<div className="flex justify-center flex-col px-[30px] items-center">
<h1 className=" text-[24px]  font-[700] text-darkest my-[20px] ">
            200L ELECTRONICS & COMPUTER ENGINEERING
          </h1>
</div>
        
        </div>
        <YeartwoDesktop/>
    <YeartwoMobileProps />
    
      </div>
      <div className="flex flex-row md:hidden justify-center my-[20px]">
      <Link to="/feg"
              className="text-primary px-[12px] py-[8px]  border font-[700] rounded-[8px]  "
            >
              Download Resources
            </Link>
      </div>
    
    </>
  );
};


export default YearTwoCourse