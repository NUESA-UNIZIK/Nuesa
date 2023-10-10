import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Qrcode from "../../assets/qr.png";
import { toast } from "react-toastify";

const Invoice = () => {
  const [verified, setVerified] = useState(false)
  const handlePrintInvoice = () => {
    // Use the window.print() method to trigger the browser's print dialog
    window.print();
  }
  const location = useLocation()
  console.log(location.search.slice(8, 20))
  const ref = location.search.slice(8, 20)
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))
  const {firstName, level, username, regNumber, department} = user.user
  console.log(user.user)
 

 
  useEffect(()=>{
    const validation = async () =>{
      const response = await fetch(`http://localhost:8000/api/payment/${ref}`)
      const content = await response.json();
      if(content.status === 'success'){
        toast.success("Payment successful") 
        console.log(content)
    }else{
      toast.error("Payment error"); navigate("/billing")
      console.log(content)
    }
  }
    validation()
  },[ref])
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
              <p>{firstName}</p>
            </div>

            <div className="flex md:text-[18px] text-[14px] font-semibold justify-between">
              <p>Email</p>
              <p>{username}</p>
            </div>

            <div className="flex md:text-[18px] text-[14px] font-semibold justify-between">
              <p>Reg Number</p>
              <p>{regNumber}</p>
            </div>

            <div className="flex md:text-[18px] text-[14px] font-semibold justify-between">
              <p>Department</p>
              <p>{department}</p>
            </div>

            <div className="flex md:text-[18px] text-[14px] font-semibold justify-between">
              <p>Faculty</p>
              <p>Engineering</p>
            </div>

            <div className="flex md:text-[18px] text-[14px] font-semibold justify-between">
              <p>Level</p>
              <p>{level}</p>
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
              <p>{location.search.slice(8, 20)}</p>
            </div>
          </div>
         
            <button  onClick={handlePrintInvoice} className="mt-16 bg-primary px-8 py-3 text-white font-semibold text-[16px]">
              Proceed to Payment
            </button>
          
        </div>
      </div>
    </div>
  );
};

export default Invoice;
