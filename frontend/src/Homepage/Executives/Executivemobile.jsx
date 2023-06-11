import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";
import { Autoplay, Navigation, Pagination } from "swiper";
import { executivemobie } from "../../data";

const Executivemobile = () => {
  const { contents } = executivemobie;
  return (
    <div className="bg-[#F5F5F5] block lg:hidden py-4 h-[353px]">
      <div className="xl:mx-[6rem] mx-6">
        <div>
          <h1 className="font-bold  md:text-[24px] mb-1">
            2020/2021 NUESA UNIZIK EXECUTIVE
          </h1>
          <hr className="w-[15%] border-2 border-primary" />
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{ clickable: true }}
        className="productSlider   min-h-[440px]"
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={true}
      >
        {contents.map((content, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex mx-auto justify-center items-center">
                {content.executiveslider.map((items, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-white  w-[305px]  h-[247px]  mt-6 lg:mt-0 rounded-md px-3 py-4 lg:px-8 lg:py-6"
                    >
                      <div className="">
                        <img src={items.image} className="w-[92px] executiveimage border border-solid rounded-full" alt="" />
                      </div>
                      <h1 className="font-semibold -mt-4">{items.name}</h1>
                      <p className="text-[14px] text-[#838383]">{items.postion}</p>
                      <div className="text-[12.5px]">
                        <ul className="list-disc leading-[1.5rem] px-6 items-center">
                          <li>{items.department}</li>
                          <li>{items.phonenum}</li>
                          <li> {items.email} </li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Executivemobile;
