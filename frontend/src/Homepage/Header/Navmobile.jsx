import React from "react";
import { Link } from "react-router-dom";

const Navmobile = () => {
  return (
    <nav className="bg-white shadow-2xl w-[60%] h-full">
      <ul className="text-center h-full flex flex-col items-center justify-center gap-y-6">
        <Link
          to="/courses"
          className="text-[14px]"
        >
          Courses
        </Link>
        <Link
          to="/facultybio"
          className="text-[14px]"
        >
          Faculty bio
        </Link>
        <Link
          to="/newsevent"
          className="text-[14px]"
        >
          News/events
        </Link>
        {/* <Link to=""
        className="text-[14px]"
        >
         
            Admission
          
        </Link> */}
        <Link to="/achievement"
          className="text-[14px]"
        >
         
            Achievements
        
        </Link>
        <Link to="/register"
        className="text-primary font-semibold text-[14px]"
        >
            Login/signup
         
        </Link>
      </ul>
    </nav>
  );
};

export default Navmobile;
