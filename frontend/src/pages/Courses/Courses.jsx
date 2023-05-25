import React, { useState } from "react";
import img from "../../assets/newsimage.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { Download } from "./Download";

export const Courses = () => {
  const [isViewCourse, setIsViewCourse] = useState("Select");
  const [isLevel, setIsLevel] = useState("select");
  const DeptChange = () => {
    const getDept = event.target.value;
    setIsViewCourse(getDept);
  };
  const selectLevel = () => {
    const getLevel = event.target.value;
    setIsLevel(getLevel);
  };

  return (
    <>
      <div className=" overflow-x-hidden">
        <div className=" text-center py-[30px] bg-cover fixed top-0 left-0 right-0   bg-[url('/src/assets/heroimage.svg')]">
          <h1 className="text-[48px] text-white uppercase relative  font-[700] ">
            Courses
          </h1>
        </div>

        <div className="flex flex-row justify-center mt-[150px]">
          <div className="flex flex-col py-[50px] px-[24px] gap-[20px] justify-center align-center">
            <label
              htmlFor="dept"
              className="text-[16px] font-[600] text-[#000000] my-[10px] "
            >
              Select Department
            </label>
            <select
              name="Dept"
              id="dept"
              value={isViewCourse}
              onChange={DeptChange}
              className="border outline-[#FA4F06]  p-[5px] rounded"
            >
              <option value="">Department</option>
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
              <option value="Chemical Engineering">Chemical Engineering</option>
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
            </select>

            <label
              htmlFor="level"
              className="text-[16px] font-[600] text-[#000000] my-[10px] "
            >
              Select Level
            </label>
            <select
              name="levl"
              id="level"
              value={isLevel}
              onChange={selectLevel}
              className="border outline-[#FA4F06]  p-[5px] rounded"
            >
              <option value="">Level</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
              <option value="500">500</option>
            </select>

            <Link
              to={
                isLevel == "select" || isViewCourse == "select"
                  ? "/courses"
                  : "/yeartwo"
              }
              className="bg-[#FA4F06] rounded-[8px] text-[white] font-[700] text-center w-[100%] p-[5px] "
            >
              View Courses
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};


export default Courses