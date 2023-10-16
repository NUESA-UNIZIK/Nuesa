import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Navmobile from "./Navmobile";
import Nuesalogo from "../../assets/nuesalogo.svg";
import { getUserDataFromLocalStorage, logout } from "../../service/registerService";
import { useAuth } from "../../utils/auth";

const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [isButtonOpen, setIsButtonOpen] = useState(false);


  const toggleDropdownButton = () => {
    setIsButtonOpen(!isButtonOpen);
  };

  const userData = getUserDataFromLocalStorage();
  const { user } = useAuth();


  const handleLogout = () => {
    logout();
    router.push("/");
  };

  useEffect(() => {
    // add event listener
    window.addEventListener("scroll", () => {
      // when scrollY is bigger than 50px setBg to true, else false
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header
      className={`${
        // if bg is true
        bg
          ? "bg-black py-4 lg:py-6"
          : // if bg is false
            "bg-none"
      }
    fixed left-0 py-8 z-10 w-full transition-all duration-200`}
    >
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
        {user ? (
              <nav className="hidden lg:flex items-center">
              <div>
                <img src={Nuesalogo} className="w-[70px] ml-6" alt="" />
              </div>
              <ul className="md:flex text-white container justify-center md:gap-[22px]">
                <Link
                  to="/billing"
                  className="bg-secondary/[44%] font-semibold px-4 py-2 rounded-md text-[16px]"
                >
                  Bills
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
                <div className="relative inline-block">
                  <button  onClick={toggleDropdownButton}>
                    <li className="bg-primary px-6 py-2 font-semibold rounded-md text-[16px]">
                    Hello, {userData?.user.firstName}
                    </li>
                  </button>

                  {isButtonOpen && (
                      <div className="absolute bg-black h-[206px] py-4 space-y-4 right-0 mt-2 w-[200px] text-white text-center rounded-md shadow-lg">
                        <a className=" px-4 py-6 text-sm inline-flex  items-center text-white">
                          Profile
                        </a>
                        <button onClick={handleLogout} className="bg-secondary/[44%] rounded-[6px] text-white w-[165px] h-[44px] p-[10px] shadow-2xl">
                          Sign out
                        </button>
                      </div>
                    )}

                </div>
              </ul>
            </nav>
        ) : (
          <nav className="hidden lg:flex items-center">
          <div>
            <img src={Nuesalogo} className="w-[70px] ml-6" alt="" />
          </div>
          <ul className="md:flex text-white container justify-center md:gap-[22px]">
            <Link
              to="/billing"
              className="bg-secondary/[44%] font-semibold px-4 py-2 rounded-md text-[16px]"
            >
              Bills
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
        )}
      
      </div>
    </header>
  );
};

export default Navbar;
