import React, { useState} from "react";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Navmobile from "./Navmobile";
import Nuesalogo from "../../assets/nuesalogo.svg";

const Navbar2 = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <header className='bg-black/95 fixed left-0 top-0 py-4  z-10 w-full transition-all duration-200'>
      <div className="xl:container container mx-auto">
        <div className="flex -mt-4 md:-mt-0 justify-between items-center">
          <div>
            <img
              src={Nuesalogo}
              alt=""
              className="w-[48px] md:w-[62px] lg:hidden"
            />
          </div>
          {/* menu icon */}
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="lg:hidden md:text-5xl text-2xl lg:text-3xl text-white cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <HiOutlineMenuAlt1 />}
          </div>
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } lg:hidden fixed bottom-0 w-[80%] max-w-xs h-screen transition-all`}
          >
            <Navmobile />
          </div>
        </div>
        <nav className="hidden lg:flex items-center">
          <Link to='/'>
            <div>
              <img src={Nuesalogo} className="w-[70px] ml-6" alt="" />
            </div>
          </Link>
          <ul className="md:flex text-white container justify-center md:gap-[22px]">
            <Link
              to="/courses"
              className="bg-secondary/[44%] font-semibold px-4 py-2 rounded-md text-[16px]"
            >
              COURSES
            </Link>
            <Link
              to="/facultybio"
              className="bg-secondary/[44%] font-semibold md:px-4 xl:px-4 py-2 rounded-md md:text-[13px] xl:text-[16px]"
            >
              FACULTY BIO
            </Link>
            <Link
              to="/newsevent"
              className="bg-secondary/[44%] font-semibold px-4 py-2 rounded-md text-[16px]"
            >
              NEWS/EVENTS
            </Link>
            {/* <Link to="">
              <li className="bg-secondary/[44%] font-semibold px-4 py-2 rounded-md text-[16px]">
                ADMISSION
              </li>
            </Link> */}
            <Link to="/achievement">
              <li className="bg-secondary/[44%] font-semibold px-4 py-2 rounded-md text-[16px]">
                ACHIEVEMENTS
              </li>
            </Link>
            <Link to="/register">
              <li className="bg-primary px-6 py-2 font-semibold rounded-md text-[16px]">
                LOGIN/SIGNUP
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar2