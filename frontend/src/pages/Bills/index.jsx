import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from 'axios'
import { toast } from "react-toastify";
// import {Pay} from "../../service/payService"
const Billing = () => {
   const [result, setResult] = useState([])
   const {user} = JSON.parse(localStorage.getItem("user"))
   const email = user.username
      
    const  Pay = async () =>{
     const response = await fetch('http://localhost:8000/api/payment', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email})
  })
    const content = await response.json();
    setResult(content)
    content.data.data ? window.location.replace(content.data.data.authorization_url) : toast.error(result.data)
    
  
  };
    //    axios.post("http://localhost:8000/api/payment", {email} )
    //   .then((response) => {
    //     const data = response.data;
    //     setResult([...result, ...data])
    //     console.log
    // });
    // }
 
  return (
    <div className="mx-auto text-center">
      <div className="text-center md:py-[80px] py-[20px] bg-cover  h-[85px]  bg-[url('/src/assets/heroimage.svg')]">
        <h1 onClick={()=> console.log(result)} className="md:text-[48px] md:-mt-8  text-[24px] text-white uppercase  font-[700] ">
          BILLS
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
          to="/billing"
          className="md:text-[16px] text-[12px] font-[500] leading-[19.36px] "
        >
          Bills
        </Link>
      </div>

      <div className="mt-12">
        <h1 className="md:text-[24px] text-[18px] font-bold">
          Generate Invoice
        </h1>

        {/* PECULIAR DUES */}

        <div className="mx-auto flex justify-center">
          <div className="flex justify-between items-center mx-auto w-[85%] xl:w-[25%] rounded-md shadow-lg md:p-[18px] p-[12px] mt-12">
            <div className="flex gap-2 items-center">
              <span className="hidden md:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="64"
                  height="64"
                >
                  <path
                    d="M11.0049 2L18.3032 4.28071C18.7206 4.41117 19.0049 4.79781 19.0049 5.23519V7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V16C22.0049 16.5523 21.5572 17 21.0049 17L17.7848 17.0011C17.3982 17.5108 16.9276 17.9618 16.3849 18.3318L11.0049 22L5.62486 18.3318C3.98563 17.2141 3.00488 15.3584 3.00488 13.3744V5.23519C3.00488 4.79781 3.28913 4.41117 3.70661 4.28071L11.0049 2ZM11.0049 4.094L5.00488 5.97V13.3744C5.00488 14.6193 5.58406 15.7884 6.56329 16.5428L6.75154 16.6793L11.0049 19.579L14.7869 17H10.0049C9.4526 17 9.00488 16.5523 9.00488 16V8C9.00488 7.44772 9.4526 7 10.0049 7H17.0049V5.97L11.0049 4.094ZM11.0049 12V15H20.0049V12H11.0049ZM11.0049 10H20.0049V9H11.0049V10Z"
                    fill="rgba(234,113,46,1)"
                  ></path>
                </svg>
              </span>
              <span className="md:hidden flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                >
                  <path
                    d="M11.0049 2L18.3032 4.28071C18.7206 4.41117 19.0049 4.79781 19.0049 5.23519V7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V16C22.0049 16.5523 21.5572 17 21.0049 17L17.7848 17.0011C17.3982 17.5108 16.9276 17.9618 16.3849 18.3318L11.0049 22L5.62486 18.3318C3.98563 17.2141 3.00488 15.3584 3.00488 13.3744V5.23519C3.00488 4.79781 3.28913 4.41117 3.70661 4.28071L11.0049 2ZM11.0049 4.094L5.00488 5.97V13.3744C5.00488 14.6193 5.58406 15.7884 6.56329 16.5428L6.75154 16.6793L11.0049 19.579L14.7869 17H10.0049C9.4526 17 9.00488 16.5523 9.00488 16V8C9.00488 7.44772 9.4526 7 10.0049 7H17.0049V5.97L11.0049 4.094ZM11.0049 12V15H20.0049V12H11.0049ZM11.0049 10H20.0049V9H11.0049V10Z"
                    fill="rgba(234,113,46,1)"
                  ></path>
                </svg>
              </span>
              <div className="flex flex-col items-start">
                <p className="md:text-[16px] text-[12px] text-gray-500 font-semibold">
                  2022/2023
                </p>
                <p className="md:text-[16px] text-[12px] text-gray-500 font-semibold">
                  Peculiar Dues
                </p>
                <h2 className="md:text-[20px] text-[14px] font-semibold">N25,000.00</h2>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"
                    fill="rgba(47,198,100,1)"
                  ></path>
                </svg>
              </span>
              <h2 className="md:text-[20px] text-[14px] text-green-500 font-bold">PAID</h2>
            </div>
          </div>

        </div>


        <div className="mx-auto flex justify-center">
          <div className="flex justify-between items-center mx-auto xl:w-[25%] w-[85%] rounded-md shadow-lg md:p-[18px] p-[12px] mt-12">
            <div className="flex gap-2 items-center">
            <span className="hidden md:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="64"
                  height="64"
                >
                  <path
                    d="M11.0049 2L18.3032 4.28071C18.7206 4.41117 19.0049 4.79781 19.0049 5.23519V7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V16C22.0049 16.5523 21.5572 17 21.0049 17L17.7848 17.0011C17.3982 17.5108 16.9276 17.9618 16.3849 18.3318L11.0049 22L5.62486 18.3318C3.98563 17.2141 3.00488 15.3584 3.00488 13.3744V5.23519C3.00488 4.79781 3.28913 4.41117 3.70661 4.28071L11.0049 2ZM11.0049 4.094L5.00488 5.97V13.3744C5.00488 14.6193 5.58406 15.7884 6.56329 16.5428L6.75154 16.6793L11.0049 19.579L14.7869 17H10.0049C9.4526 17 9.00488 16.5523 9.00488 16V8C9.00488 7.44772 9.4526 7 10.0049 7H17.0049V5.97L11.0049 4.094ZM11.0049 12V15H20.0049V12H11.0049ZM11.0049 10H20.0049V9H11.0049V10Z"
                    fill="rgba(234,113,46,1)"
                  ></path>
                </svg>
              </span>
              <span className="md:hidden flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                >
                  <path
                    d="M11.0049 2L18.3032 4.28071C18.7206 4.41117 19.0049 4.79781 19.0049 5.23519V7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V16C22.0049 16.5523 21.5572 17 21.0049 17L17.7848 17.0011C17.3982 17.5108 16.9276 17.9618 16.3849 18.3318L11.0049 22L5.62486 18.3318C3.98563 17.2141 3.00488 15.3584 3.00488 13.3744V5.23519C3.00488 4.79781 3.28913 4.41117 3.70661 4.28071L11.0049 2ZM11.0049 4.094L5.00488 5.97V13.3744C5.00488 14.6193 5.58406 15.7884 6.56329 16.5428L6.75154 16.6793L11.0049 19.579L14.7869 17H10.0049C9.4526 17 9.00488 16.5523 9.00488 16V8C9.00488 7.44772 9.4526 7 10.0049 7H17.0049V5.97L11.0049 4.094ZM11.0049 12V15H20.0049V12H11.0049ZM11.0049 10H20.0049V9H11.0049V10Z"
                    fill="rgba(234,113,46,1)"
                  ></path>
                </svg>
              </span>
              <div className="flex flex-col items-start">
                <p className="md:text-[16px] text-[12px] text-gray-500 font-semibold">
                  2022/2023
                </p>
                <p className="md:text-[16px] text-[12px] text-gray-500 font-semibold">
                  Peculiar Dues
                </p>
                <h2 className="md:text-[20px] text-[16px] font-semibold">N25,000.00</h2>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"
                    fill="rgba(216,57,57,1)"
                  ></path>
                </svg>
              </span>
              <h2 className="md:text-[20px] text-[14px] text-red-600 font-bold">UNPAID</h2>
            </div>
          </div>

        </div>

        {/* ICT FEE */}

        <div className="mx-auto flex justify-center">
          <div className="flex justify-between items-center mx-auto w-[85%] xl:w-[25%] rounded-md shadow-lg md:p-[18px] p-[12px] mt-12">
            <div className="flex gap-2 items-center">
              <span className="hidden md:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="64"
                  height="64"
                >
                  <path
                    d="M11.0049 2L18.3032 4.28071C18.7206 4.41117 19.0049 4.79781 19.0049 5.23519V7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V16C22.0049 16.5523 21.5572 17 21.0049 17L17.7848 17.0011C17.3982 17.5108 16.9276 17.9618 16.3849 18.3318L11.0049 22L5.62486 18.3318C3.98563 17.2141 3.00488 15.3584 3.00488 13.3744V5.23519C3.00488 4.79781 3.28913 4.41117 3.70661 4.28071L11.0049 2ZM11.0049 4.094L5.00488 5.97V13.3744C5.00488 14.6193 5.58406 15.7884 6.56329 16.5428L6.75154 16.6793L11.0049 19.579L14.7869 17H10.0049C9.4526 17 9.00488 16.5523 9.00488 16V8C9.00488 7.44772 9.4526 7 10.0049 7H17.0049V5.97L11.0049 4.094ZM11.0049 12V15H20.0049V12H11.0049ZM11.0049 10H20.0049V9H11.0049V10Z"
                    fill="rgba(234,113,46,1)"
                  ></path>
                </svg>
              </span>
              <span className="md:hidden flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                >
                  <path
                    d="M11.0049 2L18.3032 4.28071C18.7206 4.41117 19.0049 4.79781 19.0049 5.23519V7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V16C22.0049 16.5523 21.5572 17 21.0049 17L17.7848 17.0011C17.3982 17.5108 16.9276 17.9618 16.3849 18.3318L11.0049 22L5.62486 18.3318C3.98563 17.2141 3.00488 15.3584 3.00488 13.3744V5.23519C3.00488 4.79781 3.28913 4.41117 3.70661 4.28071L11.0049 2ZM11.0049 4.094L5.00488 5.97V13.3744C5.00488 14.6193 5.58406 15.7884 6.56329 16.5428L6.75154 16.6793L11.0049 19.579L14.7869 17H10.0049C9.4526 17 9.00488 16.5523 9.00488 16V8C9.00488 7.44772 9.4526 7 10.0049 7H17.0049V5.97L11.0049 4.094ZM11.0049 12V15H20.0049V12H11.0049ZM11.0049 10H20.0049V9H11.0049V10Z"
                    fill="rgba(234,113,46,1)"
                  ></path>
                </svg>
              </span>
              <div className="flex flex-col items-start">
                <p className="md:text-[16px] text-[12px] text-gray-500 font-semibold">
                  2022/2023
                </p>
                <p className="md:text-[16px] text-[12px] text-gray-500 font-semibold">
                  ICT FEE
                </p>
                <h2 className="md:text-[20px] text-[14px] font-semibold">N500.00</h2>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"
                    fill="rgba(47,198,100,1)"
                  ></path>
                </svg>
              </span>
              <h2 className="md:text-[20px] text-[14px] text-green-500 font-bold">PAID</h2>
            </div>
          </div>

        </div>

        <div className="mx-auto flex justify-center">
          <div className="flex justify-between items-center mx-auto xl:w-[25%] w-[85%] rounded-md shadow-lg md:p-[18px] p-[12px] mt-12">
            <div className="flex gap-2 items-center">
            <span className="hidden md:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="64"
                  height="64"
                >
                  <path
                    d="M11.0049 2L18.3032 4.28071C18.7206 4.41117 19.0049 4.79781 19.0049 5.23519V7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V16C22.0049 16.5523 21.5572 17 21.0049 17L17.7848 17.0011C17.3982 17.5108 16.9276 17.9618 16.3849 18.3318L11.0049 22L5.62486 18.3318C3.98563 17.2141 3.00488 15.3584 3.00488 13.3744V5.23519C3.00488 4.79781 3.28913 4.41117 3.70661 4.28071L11.0049 2ZM11.0049 4.094L5.00488 5.97V13.3744C5.00488 14.6193 5.58406 15.7884 6.56329 16.5428L6.75154 16.6793L11.0049 19.579L14.7869 17H10.0049C9.4526 17 9.00488 16.5523 9.00488 16V8C9.00488 7.44772 9.4526 7 10.0049 7H17.0049V5.97L11.0049 4.094ZM11.0049 12V15H20.0049V12H11.0049ZM11.0049 10H20.0049V9H11.0049V10Z"
                    fill="rgba(234,113,46,1)"
                  ></path>
                </svg>
              </span>
              <span className="md:hidden flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                >
                  <path
                    d="M11.0049 2L18.3032 4.28071C18.7206 4.41117 19.0049 4.79781 19.0049 5.23519V7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V16C22.0049 16.5523 21.5572 17 21.0049 17L17.7848 17.0011C17.3982 17.5108 16.9276 17.9618 16.3849 18.3318L11.0049 22L5.62486 18.3318C3.98563 17.2141 3.00488 15.3584 3.00488 13.3744V5.23519C3.00488 4.79781 3.28913 4.41117 3.70661 4.28071L11.0049 2ZM11.0049 4.094L5.00488 5.97V13.3744C5.00488 14.6193 5.58406 15.7884 6.56329 16.5428L6.75154 16.6793L11.0049 19.579L14.7869 17H10.0049C9.4526 17 9.00488 16.5523 9.00488 16V8C9.00488 7.44772 9.4526 7 10.0049 7H17.0049V5.97L11.0049 4.094ZM11.0049 12V15H20.0049V12H11.0049ZM11.0049 10H20.0049V9H11.0049V10Z"
                    fill="rgba(234,113,46,1)"
                  ></path>
                </svg>
              </span>
              <div className="flex flex-col items-start">
                <p className="md:text-[16px] text-[12px] text-gray-500 font-semibold">
                  2022/2023
                </p>
                <p className="md:text-[16px] text-[12px] text-gray-500 font-semibold">
                  ICT FEE
                </p>
                <h2 className="md:text-[20px] text-[16px] font-semibold">N500.00</h2>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"
                    fill="rgba(216,57,57,1)"
                  ></path>
                </svg>
              </span>
              <h2 className="md:text-[20px] text-[14px] text-red-600 font-bold">UNPAID</h2>
            </div>
          </div>

        </div>

        <Link onClick={Pay} >
          <button className="mt-8 bg-primary px-8 py-3 text-white font-semibold text-[16px]">
            Generate Invoice
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Billing;
