import React, { useState } from "react";
import { StaffConntent } from "./StaffContent";


export const StaffInfo = (props) => {
    const [fullInfo, setFullInfo] = useState(false);
    const showFullInfo = () => {
        setFullInfo(true);
    }
    const hideFullInfo = () => {
        setFullInfo(false);
    }
    return(
         <>
         
          <div onClick={showFullInfo} className="pt-[12px] lg:w-[234px] w-[100%]  xl:w-[254px]  pr-[12px] pb-[20px] pl-[12px] gap-[16px] bg-[#ffffff]b rounded-[12px] shadow-2xl flex flex-col items-start  ">
        <img src={props.staffPic} alt="" className="rounded  " />
        <div>
       <h1 className="font-[700] text-[#1E1307] text-[14px]  lg:text-[24px]  ">{props.staffName}</h1>
       <p className="font-[400] text-[#8E8E8E]  text-[24px] ">{props.staffPost} </p>
        </div> 
       </div>

{ fullInfo &&
    <div  onClick={hideFullInfo} className="fixed left-0 right-0 bg-transparent  top-0 bottom-0 z-[10000]  py-[125px]">
        <div className="flex items-center justify-center">
        <div  className="pt-[12px]   lg:w-fit    pr-[12px] relative   bg-[#fff] pb-[20px] pl-[12px] gap-[16px] bg-[#ffffff]b rounded-[12px] justify-center flex flex-col items-start  ">
        <img src={props.staffPic} alt="" className="rounded  " />
        <div>
       <h1 className="font-[700] text-[#1E1307]  text-[24px]  ">{props.staffName}</h1>
       <p className="font-[400] text-[#8E8E8E]  text-[24px] ">{props.staffPost} </p>
       <p>{props.staffLevel} : {props.Qualification}</p>
       <p>{props.staffRole} : {props.courses}</p>
       <p>{props.reachOut} : {props.contact}</p>
        </div> 
       </div>
</div>
        </div>

}

      
         </>
       
    )
}