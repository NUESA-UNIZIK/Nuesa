import React, { useState } from "react";
import Handouts from "../../assets/thermo.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export const Download = () => {
  const [uploadHandout, setUploadHandout] = useState(false);
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

          <div>
            <div className="flex flex-col items-between px-[20px]">
              <h1 className="font-[700] my-[20px] text-[20px] md:text-[24px] text-[#FA4F06]  ">
                200L ELECTRONICS & COMPUTER ENGINEERING
              </h1>
            </div>
            <h2 className="font-[600] px-[20px] text-[20px] text-[#000000]">
              Polyphase Sysmtem
            </h2>
            <div className="px-[20px] flex flex-col gap-[40px]">
              <div className="flex flex-col gap-[20px] md:flex-row items-start md:items-end justify-between">
                <ul className="list-disc px-6 items-center">
                  <li>Two phase and three phase systems.</li>
                  <li>Star and delta connected loads.</li>
                  <li>Power in three phase systems. </li>
                  <li>Two wattmeter method applied to balance loads.</li>
                </ul>
              {uploadHandout &&  <button className="text-[16px] font-[600] text-[#FA4F06] px-[12px] border rounded-[8px] py-[8px] ">
                  Upload Handouts
                </button>}
              </div>

              <div className="gap-[20px] grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-[20px]">
                <div className="flex flex-col items-center gap-[5px] ">
                  <div className="relative rounded-[8px] p-0">
                    <img
                      className=" p-0 rounded-[8px]   "
                      src={Handouts}
                      alt=""
                    />
                    <p className="absolute font-semibold text-[14px] text-center py-[15px] text-[white] backdrop bg-[black] opacity-[80%] z-3 bottom-0 w-[100%] ">
                      Polyohase.pdf
                    </p>
                  </div>
                  <a
                    href="http://"
                    className="text-center text-[14px] w-full border-[2px]  bg-white  p-[10px] text-darkest rounded-[8px] "
                  >
                    Download (4MB)
                  </a>
                </div>
                <div className="flex flex-col items-center gap-[5px] ">
                  <div className="relative rounded-[8px] p-0">
                    <img
                      className=" p-0 rounded-[8px]   "
                      src={Handouts}
                      alt=""
                    />
                    <p className="absolute font-semibold text-[14px] text-center py-[15px] text-[white] backdrop bg-[black] opacity-[80%] z-3 bottom-0 w-[100%] ">
                      Polyohase.pdf
                    </p>
                  </div>
                  <a
                    href="http://"
                    className="text-center text-[14px] w-full border-[2px]  bg-white  p-[10px] text-darkest rounded-[8px] "
                  >
                    Download (4MB)
                  </a>
                </div>
                <div className="flex flex-col items-center gap-[5px] ">
                  <div className="relative rounded-[8px] p-0">
                    <img
                      className=" p-0 rounded-[8px]   "
                      src={Handouts}
                      alt=""
                    />
                    <p className="absolute font-semibold text-[14px] text-center py-[15px] text-[white] backdrop bg-[black] opacity-[80%] z-3 bottom-0 w-[100%] ">
                      Polyohase.pdf
                    </p>
                  </div>
                  <a
                    href="http://"
                    className="text-center text-[14px] w-full border-[2px]  bg-white  p-[10px] text-darkest rounded-[8px] "
                  >
                    Download (4MB)
                  </a>
                </div>
                <div className="flex flex-col items-center gap-[5px] ">
                  <div className="relative rounded-[8px] p-0">
                    <img
                      className=" p-0 rounded-[8px]   "
                      src={Handouts}
                      alt=""
                    />
                    <p className="absolute font-semibold text-[14px] text-center py-[15px] text-[white] backdrop bg-[black] opacity-[80%] z-3 bottom-0 w-[100%] ">
                      Polyohase.pdf
                    </p>
                  </div>
                  <a
                    href="http://"
                    className="text-center text-[14px] w-full border-[2px]  bg-white  p-[10px] text-darkest rounded-[8px] "
                  >
                    Download (4MB)
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
