import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { OnlyEvent } from "./OnlyEvent";
import { OnlyNews } from "./OnlyNews";

export const NewsEvent = () => {
  const [isNews, setIsNews] = useState(true);
  const [isEvent, setIsEvent] = useState(false);
  const [newsBgCol, setNewsBgCol] = useState({
      color: 'white',
      bg: 'darkest'
    }
  )

  const [eventBgCol, setEventBgCol] = useState({
    color: 'darkest',
    bg: 'light'
  })

  const eventHandle = () => {
    setNewsBgCol({
      color: 'darkest',
      bg: 'light'
    });
    setEventBgCol({
      color: 'white',
      bg: 'darkest'
    });
    setIsEvent(true);
    setIsNews(false);
  }
const newsHandle = () => {
    setNewsBgCol({
      color: 'white',
      bg: 'darkest'
    });
    setEventBgCol({
      color: 'darkest',
      bg: 'light'
    });
    setIsEvent(false);
    setIsNews(true);
  }
  return (
    <>
   
      <div className=" overflow-x-hidden">
        <div className=" text-center py-[30px] bg-cover fixed top-0 right-0 left-0  bg-[url('/src/assets/heroimage.svg')]">
          <h1 className="text-[48px] text-white uppercase relative  font-[700] ">
            News/Event
          </h1>
        </div>

        <div className="flex flex-row my-[0px] mt-[150px] align-center justify-center   gap-[10px] ">
          <Link to="/" className="text-[16px] font-[500] leading-[19.36px] ">
            Home
          </Link>
          <span className="text-[16px] font-[500] leading-[19.36px] ">
            {" "}
            <IoIosArrowForward />{" "}
          </span>
          <Link
            to="/newsevent"
            className="text-[16px] font-[500] leading-[19.36px] "
          >
            New/Event
          </Link>
        </div>
        <div className="flex flex-col mt-[30px]  justify-center gap-[10px] items-center w-[100%]">
            <div className="flex flex-row lg:hidden rounded-[8px] border px-[16px] py-[12px] gap-[10px] justify-between ">
              <input
                type="search"
                placeholder="Search.."
                name=""
                id=""
                className="w-[100%] outline-0"
              />
              <IoMdSearch />
            </div>
            <div className="bg-[#F5F5F5]  rounded-[12px] p-[4px] flex flex-row justify-center items-start ">
              <button onClick={newsHandle} className={`rounded-[8px] bg-${newsBgCol.bg} py-[17px] px-[20px] text-${newsBgCol.color} `}>
                News
              </button>
              <button onClick={eventHandle} className={`rounded-[8px] bg-${eventBgCol.bg} text-${eventBgCol.color} py-[17px] px-[20px]`}>
                Events
              </button>
            </div>
          </div>
{isNews && <OnlyNews/> }
{isEvent && <OnlyEvent/> }
        </div>
    </>
  );
};
