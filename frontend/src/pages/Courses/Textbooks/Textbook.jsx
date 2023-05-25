import React from "react";
import Handouts from '../../../assets/thermo.png';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from "react-router-dom";


export const Textbooks = () => {
    return (
           <div className="px-[20px] py-[20px] my-[30px] flex flex-col gap-[40px] relative">
              <h1 className="text-[24] font-[600] text-center uppercase ">Textbooks</h1>
              
               <button className="text-[16px] absolute top-3 right-[25px] font-[600] text-[#FA4F06] px-[12px] border rounded-[8px] py-[8px] ">Upload Textbook</button>
                
                <div className="flex gap-[10px] flex-col md:flex-row justify-between ">
                  <div className="flex flex-col items-center gap-[20px] ">
                    <div className="relative rounded-[8px] p-0">
                       <img className="w-[269px] rounded-[8px] h-[271px]  " src={Handouts} alt="" />
                        <p className="absolute font-semibold text-center py-[15px] text-[white] backdrop bg-[black] opacity-[80%] z-index-3 bottom-0 w-[100%] ">Polyohase.pdf</p>
                    </div>
                    <a href="http://" className="text-center w-[269px] bg-primary p-[10px] text-secondary rounded-[8px] ">Download (4MB)</a>
                  </div>
                  <div className="flex flex-col items-center gap-[20px] ">
                    <div className="relative rounded-[8px] p-0">
                       <img className="w-[269px] h-[271px]  " src={Handouts} alt="" />
                        <p className="absolute font-semibold text-center py-[15px] text-[white] backdrop bg-[black] opacity-[80%] z-index-3 bottom-0 w-[100%] ">Polyohase.pdf</p>
                    </div>
                    <a href="http://" className="text-center w-[269px] bg-primary p-[10px] text-secondary rounded-[8px] ">Download (4MB)</a>
                  </div>
                  <div className="flex flex-col items-center gap-[20px] ">
                    <div className="relative rounded-[8px] p-0">
                       <img className="w-[269px] rounded-[8px] h-[271px]  " src={Handouts} alt="" />
                        <p className="absolute font-semibold text-center py-[15px] text-[white] backdrop bg-[black] opacity-[80%] z-index-3 bottom-0 w-[100%] ">Polyohase.pdf</p>
                    </div>
                    <a href="http://" className="text-center w-[269px] bg-primary p-[10px] text-secondary rounded-[8px] ">Download (4MB)</a>
                  </div>
                  <div className="flex flex-col  items-center gap-[20px] ">
                    <div className="relative rounded-[8px] p-0">
                       <img className="w-[269px] rounded-[8px] h-[271px]  " src={Handouts} alt="" />
                        <p className="absolute font-semibold text-center py-[15px] text-[white] backdrop bg-[black] opacity-[80%] z-index-3 bottom-0 w-[100%] ">Polyohase.pdf</p>
                    </div>
                    <a href="http://" className="text-center w-[269px] bg-primary p-[10px] text-secondary rounded-[8px] ">Download (4MB)</a>
                  </div>
                 
                </div>
           </div>
       
    )
}