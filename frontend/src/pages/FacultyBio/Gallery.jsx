import React, { useState } from "react";
import img from "../../assets/newsimage.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { picsArray } from "./GalleryContent";

export const Gallery = () => {
  const [index, setIndex] = useState(0);
  const getLength = picsArray.length;
  const picSrc = picsArray[index];
  const handleNextClick = () => {
    
     if (getLength - 1 === index) {
      setIndex(0);

     } else {
      setIndex(index + 1)
     }
  
  }
  const handPrevClick = () => {
    if (getLength - getLength === index) {
      setIndex(0)
    } else {
      setIndex(index - 1)
    }
  }
  return (
    <>
      <div className=" overflow-x-hidden">
        <div className=" text-center py-[30px] bg-cover fixed top-0 left-0 right-0  bg-[url('/src/assets/heroimage.svg')]">
          <h1 className="text-[48px] text-white uppercase relative  font-[700] ">
            Faculty Bio
          </h1>
        </div>

        <div className="flex flex-row my-[30px] mt-[150px] align-center justify-center   gap-[10px] ">
          <Link
            to="/"
            href=""
            className="text-[16px] font-[500] leading-[19.36px] "
          >
            Home
          </Link>
          <span className="text-[16px] font-[500] leading-[19.36px] ">
            {" "}
            <IoIosArrowForward />{" "}
          </span>
          <Link
            to="/facultybio"
            className="text-[16px] font-[500] leading-[19.36px] "
          >
            Faculty bio
          </Link>
          <span className="text-[16px] font-[500] leading-[19.36px] ">
            {" "}
            <IoIosArrowForward />{" "}
          </span>
          <Link
            to="/gallery"
            className="text-[16px] font-[500] leading-[19.36px] "
          >
            Gallery
          </Link>
        </div>
      </div>
      <div className=" px-[30px] py-[30px]">
        <div className="flex md:gap-[50px]   flex-row justify-center items-center align-center">
          <IoIosArrowBack onClick={handPrevClick} className="font-[500] text-[30px] "/>
          <img
            className=" "
            src={picSrc.img}
            alt=""
            srcset=""
          />
          <IoIosArrowForward onClick={handleNextClick} className="font-[500] text-[30px] " />
        </div>
        <div className="flex  justify-center my-[20px]  items-center">
          <p className=" text-[16px] leading-[24px] text-center max-w-[500px]  font-[400] ">
         {picSrc.content}
         </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-3 lg:grid-cols-6 gap-[10px] ">
         
        {picsArray.map((getPic) => (
        <img src={getPic.img} alt="" className={`rounded-[5px] border `}/>
     
         ))}
            </div>
      </div>
      <div className="flex justify-center md:hidden items-center pb-[30px] md:gap-[30px] gap-[10px] flex-row">
    <button className="font-[500] md:text-[16px] text-[14px]  text-darkes ">Previous</button>
    <button className="md:px-[17px] md:py-[12px] px-[14px] py-[8px] rounded-[8px] md:text-[16px] text-[12px]  text-[#fff] bg-primary ">1</button>
    <button className="md:px-[17px] md:py-[12px] px-[14px] py-[8px] rounded-[8px] md:text-[16px] text-[12px] text-darkest bg-[#EDEAE6] ">2</button>
    <button className="md:px-[17px] md:py-[12px] px-[14px] py-[8px] rounded-[8px] md:text-[16px] text-[12px] text-darkest bg-[#EDEAE6] ">3</button>
    <button className="font-[500] md:text-[16px] text-[14px]  text-darkes ">Next</button>
</div>
    </>
  );
};

