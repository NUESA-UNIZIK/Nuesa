import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "../../Homepage/Footer/Footer";
import Navbar2 from "../../Homepage/Header/Navbar2";
import axios from 'axios'
import { signUp } from "../../service/registerService";


const Signup = () => {
  const [firstName, setFirstName] = useState("")
  const [username, setUserName] = useState("")
  const [department, setDepartment] = useState("")
  const [level, setLevel] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  
  const data = {firstName,username,department,level,password}
  async function submit(){
    const res = await signUp(data)
    toast(res.data.message)
  }
 


  return (
    <div className="mx-auto">
      <Navbar2/>
      <div className="text-center md:py-[80px] py-[20px] md:mt-[6.3rem] mt-[4rem] bg-cover  h-[85px]  bg-[url('/src/assets/heroimage.svg')]">
        <h1 className="md:text-[48px] -mt-8 hidden md:block text-[24px] text-white uppercase relative  font-[700] ">
          Create Account
        </h1>
        <div className="flex px-6 items-center justify-between">
          <div className="lg:hidden">
            <h1 className="md:text-[48px] text-[24px] text-white uppercase relative  font-[700] ">
              Create Account
            </h1>
          </div>
        </div>
       
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
          to="/register"
          className="md:text-[16px] text-[12px] font-[500] leading-[19.36px] "
        >
          Signup
        </Link>
      </div>
      <div className="justify-center mx-auto text-center md:w-[352px] h-[588px] md:shadow-2xl md:border px-2 md:px-0 border-solid rounded-md md:mb-8 mt-16">
        <div >
          <div className="px-6 mt-4 text-start">
            <label htmlFor="" className="text-end font-semibold">
              Firstname
            </label>
            <input
              type="text"
              className="w-[100%] h-[44px] rounded-[8px] focus:outline-none px-4 mt-2 bg-[#F5F2ED]"
              value={firstName}
              onChange={(e)=> setFirstName(e.target.value)}
            />
          </div>

          <div className="px-6 mt-6 text-start">
            <label htmlFor="" className="text-end font-semibold">
              Email address
            </label>
            <input
              type="email"
              className="w-[100%] h-[44px] rounded-[8px] focus:outline-none px-4 mt-2 bg-[#F5F2ED]"
              value={username}
              onChange={(e)=> setUserName(e.target.value)}
            />
          </div>

          <div className="px-6 flex gap-4 mt-6 text-start">
            <div>
              <label htmlFor="" className="text-end font-semibold">
                Department
              </label>
              <select
                name="Dept"
                id="dept"
                className=" w-[173px] h-[44px] rounded-[8px] focus:outline-none px-4 mt-2 bg-[#F5F2ED]"
                value={department}
                onChange={e=> setDepartment(e.target.value)}
              >
                <option value=""></option>
                <option value="Electrical Engineering">
                  Electrical Engineering
                </option>
                <option value="Computer Engineering">
                  Computer & Electronics Engineering
                </option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Chemical Engineering">
                  Chemical Engineering
                </option>
                <option value="Polymer Engineering">Polymer Engineering</option>
                <option value="Meterlurgical Engineering">
                  Meterlurgical and Material Engineering
                </option>
                <option value="Industrial Engineering">
                  Industrial and Production Engineering
                </option>
                <option value="Agric Engineering">
                  Agric and Bio-Resources Engineering
                </option>
                <option value="Petroleum Engineering">
                  Petroleum Engineering
                </option>
              </select>{" "}
            </div>

            <div>
              <label htmlFor="" className="text-end font-semibold">
                Level
              </label>
              <select
                name="levl"
                id="level"
                className="md:w-[106px] w-[96px] h-[44px] rounded-[8px] focus:outline-none  mt-2 bg-[#F5F2ED]"
                value={level}
                onChange={e=> setLevel(e.target.value)}
              >
                <option value=""></option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
              </select>
            </div>
          </div>

          <div className="px-6 mt-6 text-start">
            <label htmlFor="" className="text-end font-semibold">
              Password
            </label>
            <input
              type="password"
              className="w-[100%] h-[44px] rounded-[8px] focus:outline-none px-4 mt-2 bg-[#F5F2ED]"
              value={password}
              onChange={e=> setPassword(e.target.value)}
            />
          </div>

          <div className="px-6 mt-6 text-start">
            <label htmlFor="" className="text-end font-semibold">
              Confirm password
            </label>
            <input
              type="password"
              className="w-[100%] h-[44px] rounded-[8px] focus:outline-none px-4 mt-2 bg-[#F5F2ED]"
              value={password2}
              onChange={e=> setPassword2(e.target.value)}
            />
          </div>

          <div className="px-6 mt-6 text-start">
            <button
              className="w-[100%] h-[44px] rounded-[8px] font-bold focus:outline-none px-4 mt-2 bg-black text-white"
              onClick={()=> submit()}
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
      <p className="text-center mb-8">
        Already have an account?{" "}
        <Link to="/login" className="text-primary">
          Sign in
        </Link>
      </p>
     <Footer/>
    </div>
  );
};

export default Signup;
