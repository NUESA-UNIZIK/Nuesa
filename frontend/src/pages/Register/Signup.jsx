import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../../Homepage/Footer/Footer";
import Navbar2 from "../../Homepage/Header/Navbar2";
import axios from "axios";
import { signUp } from "../../service/registerService";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    username: "",
    department: "",
    level: "",
    password: "",
    password2: "",
    regNumber: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.username) {
      newErrors.username = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.username)
    ) {
      newErrors.username = "Invalid email address";
    }
    if (!formData.department) {
      newErrors.department = "Department is required";
    }
    if (!formData.level) {
      newErrors.level = "Level is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.password2) {
      newErrors.password2 = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const res = await signUp(formData);
        if (res.data.message) {
          toast.success(res.data.message);
          navigate("/login");
        } else {
          toast.error("Registration failed");
        }
      } catch (error) {
        toast.error("An error occurred during registration");
      }
    }
  };

  return (
    <div className="mx-auto">
      <div className="text-center md:py-[80px] py-[20px]  bg-cover  h-[85px]  bg-[url('/src/assets/heroimage.svg')]">
        <h1 className="md:text-[48px] text-center -mt-8 hidden md:block text-[24px] text-white uppercase relative  font-[700] ">
          Create Account
        </h1>
        <div className="flex px-6 items-center justify-center">
          <div className="lg:hidden">
            <h1 className="md:text-[48px]  text-[24px] text-white uppercase relative  font-[700] ">
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
        <form onSubmit={handleSubmit}>
          <div className="px-6 mt-4 text-start">
            <label htmlFor="" className="text-end font-semibold">
              Firstname
            </label>
            <input
              type="text"
              className="w-[100%] h-[44px] rounded-[8px] focus:outline-none px-4 mt-2 bg-[#F5F2ED]"
              value={formData.firstName}
              name="firstName"
              onChange={handleChange}
            />
          </div>

          <div className="px-6 mt-6 text-start">
            <label htmlFor="" className="text-end font-semibold">
              Email address
            </label>
            <input
              type="email"
              className="w-[100%] h-[44px] rounded-[8px] focus:outline-none px-4 mt-2 bg-[#F5F2ED]"
              value={formData.username}
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="px-6 mt-6 text-start">
            <label htmlFor="" className="text-end font-semibold">
              Reg Number
            </label>
            <input
              type="text"
              className="w-[100%] h-[44px] rounded-[8px] focus:outline-none px-4 mt-2 bg-[#F5F2ED]"
              value={formData.regNumber}
              name="regNumber"
              onChange={handleChange}
            />
          </div>

          <div className="px-6 flex gap-4 mt-6 text-start">
            <div>
              <label htmlFor="" className="text-end font-semibold">
                Department
              </label>
              <select
                name="department"
                id="dept"
                className=" w-[173px] h-[44px] rounded-[8px] focus:outline-none px-4 mt-2 bg-[#F5F2ED]"
                value={formData.department}
                onChange={handleChange}
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
                name="level"
                id="level"
                className="md:w-[106px] w-[96px] h-[44px] rounded-[8px] focus:outline-none  mt-2 bg-[#F5F2ED]"
                value={formData.level}
                onChange={handleChange}
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
              value={formData.password}
              name="password"
              onChange={handleChange}
            />
          </div>

          <div className="px-6 mt-6 text-start">
            <label htmlFor="" className="text-end font-semibold">
              Confirm password
            </label>
            <input
              type="password"
              className="w-[100%] h-[44px] rounded-[8px] focus:outline-none px-4 mt-2 bg-[#F5F2ED]"
              value={formData.password2}
              name="password2"
              onChange={handleChange}
            />
          </div>
          <div className="px-6 text-red-500">
            {errors.firstName && <p>{errors.firstName}</p>}
            {errors.username && <p>{errors.username}</p>}
            {errors.department && <p>{errors.department}</p>}
            {errors.level && <p>{errors.level}</p>}
            {errors.password && <p>{errors.password}</p>}
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <div className="px-6 mt-6 text-start">
            <button
              type="submit"
              className="w-[100%] h-[44px] rounded-[8px] font-bold focus:outline-none px-4 mt-2 bg-black text-white"
            >
              Create an account
            </button>
          </div>
        </form>
      </div>
      <p className="text-center mb-8">
        Already have an account?{" "}
        <Link to="/login" className="text-primary">
          Sign in
        </Link>
      </p>
      <Footer />
    </div>
  );
};

export default Signup;
