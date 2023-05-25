import React from "react";
import { FaUserCircle } from 'react-icons/fa';


export const Setting = () => {
    return (
        <div className=" overflow-x-hidden">
        <div className=" text-center py-[30px] bg-cover fixed top-0 left-0 right-0  bg-[url('/src/assets/circuitlines.jpg')]">
          <h1 className="text-[48px] text-white uppercase relative  font-[700] ">
            Settings
          </h1>
          </div>
          <div className="justify-center flex flex-col px-[20px] mt-[200px]">
           
            <div className="flex cursor-pointer my-[20px] justify-center flex-row  items-center  gap-[10px] ">
              <FaUserCircle  className="text-[50px] text-[#BBBBBB]"/>
              <div className="flex flex-col items-start  ">
              <h1 className="font-[700] text-[28px] ">Nzubechukwu</h1>
              <a className="text-[16px] font-[400] text-[#000000] " href="mailto:nzubestdesmond@gmail.com">Nzubechukwu@gmail.com</a>
              </div>
        </div>
        <div className="flex justify-center ">
        <button className="text-primary bg=-[#fff] text-center rounded-[8px] box-border text-[24px] font-[600] px-[24px] py-[10px] border border-primary ">Reset Password</button>
            </div>
            </div>
          
        </div>
    )
}