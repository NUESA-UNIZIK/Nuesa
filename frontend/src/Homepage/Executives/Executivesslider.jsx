
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/swiper.min.css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import './slider.css'
import { Autoplay, Navigation, Pagination} from "swiper";
import { executives } from "../../data";


const Executiveslider = () => {
  const { contents } = executives;
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={0}
    pagination={{
      clickable: true,
    }}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
    navigation={{ clickable: true }}
    className="productSlider  lg:flex hidden  min-h-[350px]"
    modules={[Autoplay,Navigation, Pagination]}  autoplay={true}>
      {contents.map((content, index) => {
        return (
          <SwiperSlide key={index}>
            
            <div className="flex flex-row  justify-center items-center gap-[29px] mt-10">
              {content.executiveslider.map((items, index) => {
                return (
                  <div
                    key={index}
                    className="mt-0 lg:w-[555px] h-[208px] px-6 py-6 xl:border border-solid rounded-md "
                  >
                    <div className='flex items-start gap-[37px]'>
                      <div>
                        <img src={items.image} alt="" className='w-[92px] executiveimage border border-solid rounded-full' />
                      </div>

                      <div>
                        <h1 className='font-semibold text-[18px]'>{items.name}</h1>
                        <p className='font-semibold text-[#838383]'>{items.postion}</p>
                        <div className="text-[16px] mt-2">
                        <ul className="list-disc leading-[2rem] items-center">
                          <li>{items.department}</li>
                          <li>{items.phonenum}</li>
                          <li> {items.email} </li>
                        </ul>
                      </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default  Executiveslider;
