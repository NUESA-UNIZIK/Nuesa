import React from "react";

export const NewsContent = (props) => {
    return (
        <div className=" shadow-xl p-[10px] gap-[10px]  flex lg:flex-col items-start rounded-[12px]">
        <img src={props.img} alt="news" className="w-[150px] lg:w-[100%] " />
        <div className="flex flex-col items-start gap-[22px max-w-[428px]">
          <div className="flex flex-col gap-[5px] p-0 ">
            <p className="text-[12px] font-[700]  text-[#0000000] ">
             {props.headline}
            </p>
            <span className="lg:text-[14px] text-[10px] font-[700] leading-[150%] text-[#888888] ">
             {props.date}
            </span>
            <p className="font-[400] text-[12px] lg:text-[16px] text-[#000000] ">
             {props.detail}
            </p>
          </div>
          <Link
            to="/nuesa"
            className="text-[16px] lg:block hidden font-[700] leading-[150%] rounded-[8px] text-[#092E76] py-[8px] px-[12px] border "
          >
            Read More
          </Link>
        </div>
      </div>
      
    )
}