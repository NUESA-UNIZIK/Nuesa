import React, { useState } from "react";
import {IoIosArrowForward } from "react-icons/io";
import { IoMdSearch } from 'react-icons/io';
import { Link } from "react-router-dom";
import { TbFileDownload } from "react-icons/tb";
import { AiOutlineFileExcel } from 'react-icons/ai'

export const FEG = () => {
    const [result, setResult] = useState(false)
    const [noFile, setNoFile] = useState(false);
    const [files, setFiles] = useState(true);
  return (
    <>
      <div className=" md:container overflow-x-hidden">
        <div className=" text-center py-[30px] bg-cover z-[10] fixed top-0  right-0 left-0  bg-[url('/src/assets/circuitlines.jpg')]">
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
              Download materials
            </Link>
          </div>

          
            <div className="flex flex-col gap-[20px] items-center px-[20px]">
                <div className="flex flex-col justify-center items-center">
                <h1 className="font-[700] mt-[10px] text-center text-[17px] md:text-[20px] md:text-[24px] text-darkest  ">
                200L ELECTRONICS & COMPUTER ENGINEERING
              </h1>
             <h2 className="text-primary font-[800] text-[30px]">FEG201</h2>
                </div>
       <div className="flex flex-row rounded-[8px] border px-[16px] py-[12px] gap-[10px] justify-between ">
            <input className="outline-0 " type="search" placeholder="Search.." name="search" id="" />{" "}
            <IoMdSearch />
       </div>
              </div>
               {result && <p className="text-center font-[400] my-[20px] text-[14px]  ">Found 6 results for  <strong className="font-[700]">‘polyphase’</strong> </p> }
             {noFile && <div className="flex flex-col p-[20px] justify-center gap-[20px] items-center">
                < AiOutlineFileExcel className="w-[120px] h-[150px] text-[#BBBBBB] "/>
                <p className="font-[700] text-[24px] text-center text-[#BBBBBB] max-w-[250px] ">Sorry, could not find results for 
‘material science’</p>
              </div>}
              {files && <div className="md:flex  grid grid-cols-3 flex-row items-center px-[30px] gap-[10px] justify-center py-[8px]  ">
              <h1 className="text-[16px] leading-[150%] font-[600] text-[#ffffff] bg-primary rounded-[8px] px-[12px] py-[8px]">
              Handouts
              </h1>
              <p className="font-[600] lg:text-[16px] text-[14px]  leading-[150%] text-primary bg-[#FFEFE6]  rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
              Past Questions
              </p>
              <p className="font-[600] lg:text-[16px] text-[14px]  leading-[150%] text-primary bg-[#FFEFE6]  rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
              Textbooks
              </p>
              <p className="font-[600] lg:text-[16px] text-[14px] col-start-1 col-span-2   leading-[150%] text-primary bg-[#FFEFE6] rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
              Other resources
              </p>
              </div>
}
{ files &&
<div className="flex flex-col justify-center gap-[20px] my-[30px] mx-[10px] items-center">
<a  className="flex flex-row border items-center border-[#E6E6E6] bg-[#ffffff] justify-between px-[16px] py-[12px] gap-[100px] rounded-[8px]  ">
    <span className="flex flex-col items-start font-[600] text-darkest gap-[8px]  ">
        <p className=" text-">Polyphase.pdf</p>
        <p className="text-[14px] text-[#656565] font-[500] ">4MB</p>
    </span>
<TbFileDownload className="text-[#0C7C1E]  text-[30px] md:text-[40px] "/>
</a>
<a  className="flex flex-row border items-center border-[#E6E6E6] bg-[#ffffff] justify-between px-[16px] py-[12px] gap-[100px] rounded-[8px]  ">
    <span className="flex flex-col items-start font-[600] text-darkest gap-[8px]  ">
        <p className=" text-">Polyphase.pdf</p>
        <p className="text-[14px] text-[#656565] font-[500] ">4MB</p>
    </span>
<TbFileDownload className="text-[#0C7C1E]  text-[30px] md:text-[40px] font-[300] "/>
</a>

<a  className="flex flex-row border items-center border-[#E6E6E6] bg-[#ffffff] justify-between px-[16px] py-[12px] gap-[100px] rounded-[8px]  ">
    <span className="flex flex-col items-start font-[600] text-darkest gap-[8px]  ">
        <p className=" text-">Polyphase.pdf</p>
        <p className="text-[14px] text-[#656565] font-[500] ">4MB</p>
    </span>
<TbFileDownload className="text-[#0C7C1E]  text-[30px] md:text-[40px] "/>
</a>
<a  className="flex flex-row border items-center border-[#E6E6E6] bg-[#ffffff] justify-between px-[16px] py-[12px] gap-[100px] rounded-[8px]  ">
    <span className="flex flex-col items-start font-[600] text-darkest gap-[8px]  ">
        <p className=" text-">Polyphase.pdf</p>
        <p className="text-[14px] text-[#656565] font-[500] ">4MB</p>
    </span>
<TbFileDownload className="text-[#0C7C1E]  text-[30px] md:text-[40px] "/>
</a>
</div>
}
<div className="flex justify-center items-center pb-[30px] md:gap-[30px] gap-[10px] flex-row">
    <button className="font-[500] md:text-[16px] text-[12px]  text-darkes ">Previous</button>
    <button className="md:px-[17px] md:py-[12px] px-[12px] py-[8px] rounded-[8px] md:text-[16px] text-[12px]  text-[#fff] bg-primary ">1</button>
    <button className="md:px-[17px] md:py-[12px] px-[12px] py-[8px] rounded-[8px] md:text-[16px] text-[12px] text-darkest bg-[#EDEAE6] ">2</button>
    <button className="md:px-[17px] md:py-[12px] px-[12px] py-[8px] rounded-[8px] md:text-[16px] text-[12px] text-darkest bg-[#EDEAE6] ">3</button>
    <button className="font-[500] md:text-[16px] text-[12px]  text-darkes ">Next</button>
</div>
            </div>
          </div>
    </>
  );
};

