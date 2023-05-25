import React from "react";
import HandoutPic from '../../assets/thermo.png'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from "react-router-dom";
import { HandoutPdf } from "./Handouts/Handouts";
import { PastQuestion } from "./PastQuestions/PastQst";
import { Textbooks } from "./Textbooks/Textbook";
import { OtherResources } from "./OtherResources/OtherResources";


export const DownloadResources = () => {
    return (
        <>
      <div className=" overflow-x-hidden ">
 <div className=" text-center py-[30px] bg-cover z-[10] fixed top-0  right-0 left-0  bg-[url('/src/assets/heroimage.svg')]">
 <h1 className="text-[48px] text-white uppercase relative  font-[700] ">Courses</h1>
 </div>
            
 <div className="bg-[#FAF8F8]">
 <div className="flex flex-row py-[30px] pt-[150px] align-center justify-center   gap-[10px] ">
    <Link to='/' className="text-[16px] font-[500] leading-[19.36px] ">Home</Link>
    <span className="text-[16px] font-[500] leading-[19.36px] " > <IoIosArrowForward /> </span>
    <Link to='/courses' className="text-[16px] font-[500] leading-[19.36px] ">Courses</Link>
    <span className="text-[16px] font-[500] leading-[19.36px] " > <IoIosArrowForward /> </span>
    <Link to='/yeartwo' className="text-[16px] font-[500] leading-[19.36px] ">Download materials</Link>
        </div>

        <div>
            <div className="flex flex-col bg-[#FAF8F8] px-[20px]">
            <h1 className="font-[700] bg-[#FAF8F8] text-[24px] text-[#000000] text-center  ">200L ELECTRONICS & COMPUTER ENGINEERING</h1>
            </div>
            <HandoutPdf />
            <PastQuestion />
            <Textbooks />
            <OtherResources />
                </div>   
        </div>
        </div>
       
        </>
    )
}