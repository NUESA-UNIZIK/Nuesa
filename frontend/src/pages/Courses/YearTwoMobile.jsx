import React, { useState } from "react";
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from "react-router-dom";

export const YeartwoMobile = (props)  => {
    const [showTopics, setShowTopics] = useState(false);
    const handleShowTopics = () => {
        setShowTopics(true);
    }
    const handleHideTopics = () => {
        setShowTopics(false)
    }
    return (

   <div className="md:hidden flex flex-col gap-[20px] justify-center px-[30px]">
   
   <div onClick={handleShowTopics} className="bg-[#FAF8F8] cursor-pointer rounded-[8px] my-[10px]   py-[12px] px-[16px]  flex flex-row items-center  justify-between ">
            <div className="">
              <h1 className="font-[700]  text-[#000000] text-[24px] ">
              {props.course}
              </h1>
              <p className="text-[#656565] text-[16px]">
              {props.fullName}
              </p>
            </div>
            <div className="flex flex-row justify-center gap-[10px]">
              <span>{props.unit}</span>
              <IoIosArrowForward />
            </div>
          </div>
          
          {showTopics && 
          <div onClick={handleHideTopics} className="fixed px-[20px] flex justify-center top-0 left-0 right-0  bg-transparent bottom-0 py-[10px]  ">

          <div className="bg-[#FAF8F8] absolute  px-[37px]  h-[80vh] py-[25px] rounded-2xl top-[80px] overflow-y-scroll max-w-[350px] ">
            <h1 className="text-[20px] font-[600] my-[10px] ">Topics</h1>
            <Link to='/download'>
            <div className="flex flex-col items-start gap-[10px] ">
              <h2 className="text-[20px] font-[500] text-[#000000] ">
              {props.topic1H}
              </h2>
              <p className="font-[400] text-[16px] text-[#656565]  ">
               {props.topic1D}
              </p>
            </div>
            </Link>
           

            <div className="flex flex-col items-start gap-[10px] ">
              <h2 className="text-[20px] font-[500] text-[#000000] ">
              {props.topic2H}
              </h2>
              <p className="font-[400] text-[16px] text-[#656565]  ">
              {props.topic2D}
              </p>
            </div>

            <div className="flex flex-col items-start gap-[10px] ">
              <h2 className="text-[20px] font-[500] text-[#000000] ">
              {props.topic3H}
              </h2>
              <p className="font-[400] text-[16px] text-[#656565]  ">
              {props.topic3D}
              </p>
            </div>

            <div className="flex flex-col items-start gap-[10px] ">
              <h2 className="text-[20px] font-[500] text-[#000000] ">
              {props.topic4H}
              </h2>
              <p className="font-[400] text-[16px] text-[#656565]  ">
              {props.topic4D}
              </p>
            </div>

            <div className="flex flex-col items-start gap-[10px] ">
              <h2 className="text-[20px] font-[500] text-[#000000] ">
              {props.topic5H}
              </h2>
              <p className="font-[400] text-[16px] text-[#656565]  ">
              {props.topic5D}
              </p>
            </div>

            <div className="flex flex-col items-start gap-[10px] ">
              <h2 className="text-[20px] font-[500] text-[#000000] ">
              {props.topic6H}
              </h2>
              <p className="font-[400] text-[16px] text-[#656565]  ">
              {props.topic6D}
              </p>
            </div>
          </div>
          
          </div>
}
   </div>


    )
}