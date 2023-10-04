import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Homepage/Footer/Footer";
import Navbar2 from "../../Homepage/Header/Navbar2";
import axios from "axios"
import { toast } from 'react-toastify';
import {create} from "zustand"
import { loginIn } from "../../service/registerService";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function submit() {
    if (validateForm()) {
      const data = { username, password };
      try {
        const res = await loginIn(data);
        console.log(res);
        const { error, status, message } = res.data;
        if (status) {
          toast.success(message);
          navigate('/');
        } else {
          toast.error(error);
        }
      } catch (error) {
        toast.error("An error occurred during login");
      }
    }
  }
  return (
    <div className="mx-auto">
     
      <div className="text-center md:py-[80px] py-[20px] bg-cover  h-[85px]  bg-[url('/src/assets/heroimage.svg')]">
        <h1 className="md:text-[48px] md:-mt-8 hidden md:block text-[24px] text-white uppercase  font-[700] ">
          Login
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
          to="/login"
          className="md:text-[16px] text-[12px] font-[500] leading-[19.36px] "
        >
          Login
        </Link>
      </div>
      <div className="justify-center mx-auto text-center md:w-[352px] md:shadow-2xl md:border border-solid md:mb-8 rounded-md mt-16">
        <div >
          <div className="px-6 mt-6 text-start">
            <label htmlFor="" className="text-end font-semibold">
              Email address
            </label>
            <input
              type="email"
              className="w-[100%] h-[44px] rounded-[8px] focus:outline-none px-4 mt-2 bg-[#F5F2ED]"
              value={username}
              name="username"
              onChange={(e)=> setUsername(e.target.value)}
            />
          </div>
          {errors.username && <p className="text-red-500">{errors.username}</p>}

          <div className="px-6 mt-6 text-start">
            <label htmlFor="" className="text-end font-semibold">
              Password
            </label>
            <input
              type="password"
              className="w-[100%] h-[44px] rounded-[8px] focus:outline-none px-4 mt-2 bg-[#F5F2ED]"
              value={password}
              name="password"
              onChange={e=> setPassword(e.target.value)}
            />
          </div>
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          <div className="px-6 mt-6 text-start">
            <button
              onClick={submit}
              className="w-[100%] h-[44px] mb-8 rounded-[8px] font-bold focus:outline-none px-4 mt-2 bg-black text-white"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <p className="text-center mb-8">
        Don't have an account?{" "}
        <Link to="/register" className="text-primary">
          Sign up
        </Link>
      </p>
      <Footer />
    </div>
  );
};

export default Login;
