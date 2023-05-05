import React from "react";
import { IoIosArrowForward, IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import staffImg from '../../assets/staffimage.svg';
import { StaffConntent } from "./StaffContent";


export const Staff = (props) => {
  return (
    <>
      <div className=" overflow-x-hidden">
        <div className="text-center py-[30px] bg-cover z-[10] fixed top-0  right-0 left-0  bg-[url('/src/assets/heroimage.svg')]">
          <h1 className="text-[48px] text-white uppercase relative  font-[700] ">
            Staff
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
              to="/staff"
              className="text-[16px] font-[500] leading-[19.36px] "
            >
              Staff
            </Link>
          </div>
       <div className="flex  justify-center">
       <div className="flex flex-row rounded-[8px] border px-[16px] py-[12px] gap-[10px] justify-between ">
            <input className="outline-0 " type="search" placeholder="Search.." name="search" id="" />{" "}
            <IoMdSearch />
          </div>
       </div>
         
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-wrap flex-row items-center px-[12px] gap-[10px] justify-center py-[8px]  ">
              <h1 className="text-[16px] leading-[150%] font-[600] text-[#ffffff] bg-primary rounded-[8px] px-[12px] py-[8px]">
                FACULTY
              </h1>
              <p className="font-[600] lg:text-[16px] text-[14px]  leading-[150%] text-primary bg-[#FFEFE6]  rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
              Electrical
              </p>
              <p className="font-[600] lg:text-[16px] text-[14px]  leading-[150%] text-primary bg-[#FFEFE6]  rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
              Electronics & Comp
              </p>
              <p className="font-[600] lg:text-[16px] text-[14px]  leading-[150%] text-primary bg-[#FFEFE6] rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
              Civil
              </p>
              <p className="font-[600] lg:text-[16px] text-[14px]  leading-[150%] text-primary bg-[#FFEFE6]  rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
              Mechanical
              </p>
              <p className="font-[600] lg:text-[16px] text-[14px]  leading-[150%] text-primary bg-[#FFEFE6]  rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
              Chemical
              </p>
              <p className="font-[600] lg:text-[16px] text-[14px]  leading-[150%] text-primary bg-[#FFEFE6] rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
                MME
              </p>
              <p className="font-[600] lg:text-[16px] text-[14px]  leading-[150%] text-primary bg-[#FFEFE6] rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
                Petroleum
              </p>
              <p className="font-[600] lg:text-[16px] text-[14px]  leading-[150%] text-primary bg-[#FFEFE6]  rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
                IPE
              </p>
              <p className="font-[600] lg:text-[16px] text-[14px]  leading-[150%] text-primary bg-[#FFEFE6] rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
                ABE
              </p>
              <p className="font-[600] lg:text-[16px] text-[14px]  leading-[150%] text-primary bg-[#FFEFE6] rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
                PTE
              </p>
            </div>
            <div className="flex flex-row bg-[#F5F5F5] lg:bg-[#ffffff] items-center px-[12px] gap-[6px] justify-center py-[8px]  ">
              <h1 className="text-[16px] leading-[150%] font-[600] text-[#ffffff] bg-darkest lg:bg-primary rounded-[8px] px-[12px] py-[8px]">
                Acedemic
              </h1>
              <p className="font-[600] text-[16px] text-darkest  leading-[150%] lg:text-primary  rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
                Technical
              </p>
              <p className="font-[600] text-[16px] text-darkest   leading-[150%] lg:text-primary  rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
                Administrative
              </p>
            </div>
          </div>
        </div>
        <div className=" px-[20px] gap-[20px] py-[40px] grid place-items-center  grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
         <StaffConntent/>
        </div>
      </div>
    </>
  );
};
