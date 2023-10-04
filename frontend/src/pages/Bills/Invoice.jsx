import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Qrcode from "../../assets/qr.png";

const Invoice = () => {
  return (
    <div className="mx-auto text-center">
      <div className="text-center md:py-[80px] py-[20px] bg-cover  h-[85px]  bg-[url('/src/assets/heroimage.svg')]">
        <h1 className="md:text-[48px] md:-mt-8  text-[24px] text-white uppercase  font-[700] ">
          INVOICE
        </h1>
      </div>
      <div className="flex flex-row my-[30px] items-center align-center justify-center md:mt-[30px] mt-[20px]   gap-[4px] ">
        <Link
          to="/"
          href=""
          className="md:text-[16px] text-[12px] font-[500] leading-[19.36px] "
        >
          Home
        </Link>
        <span className="text-[16px] font-[500] leading-[19.36px] ">
          {" "}
          <IoIosArrowForward />{" "}
        </span>
        <Link
          to="/invoice"
          className="md:text-[16px] text-[12px] font-[500] leading-[19.36px] "
        >
          Invoice
        </Link>
      </div>

      <div className="flex justify-center">
        <div className="rounded-md mx-auto md:p-[24px] p-[12px] justify-center  shadow-lg h-[680px] w-full max-w-[350px] md:max-w-[500px]">
          <div className="flex justify-center">
            <img src={Qrcode} alt="qrcode" />
          </div>
          <div className="mt-4 leading-[3.3rem]">
            <div className="flex md:text-[18px] text-[14px] font-semibold justify-between">
              <p>Name</p>
              <p>Username</p>
            </div>

            <div className="flex md:text-[18px] text-[14px] font-semibold justify-between">
              <p>Reg Number</p>
              <p>2020364015</p>
            </div>

            <div className="flex md:text-[18px] text-[14px] font-semibold justify-between">
              <p>Department</p>
              <p>Electrical Engineering</p>
            </div>

            <div className="flex md:text-[18px] text-[14px] font-semibold justify-between">
              <p>Faculty</p>
              <p>Engineering</p>
            </div>

            <div className="flex md:text-[18px] text-[14px] font-semibold justify-between">
              <p>Level</p>
              <p>500</p>
            </div>

            <div className="flex md:text-[18px] text-[14px] font-semibold justify-between">
              <p>Session</p>
              <p>2022/23</p>
            </div>

            <div className="flex md:text-[18px] text-[14px] font-semibold justify-between">
              <p>Amount</p>
              <p>25,000</p>
            </div>

            <div className="flex md:text-[18px] text-[14px] font-semibold justify-between">
              <p>Reference Number</p>
              <p>16243574906432</p>
            </div>
          </div>
          <Link to="/payment">
            <button className="mt-16 bg-primary px-8 py-3 text-white font-semibold text-[16px]">
              Proceed to Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
