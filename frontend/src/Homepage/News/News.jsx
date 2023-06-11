import React from "react";
import Newsimage from "../../assets/newsimage.svg";
import Newsimagemobile from "../../assets/Frame 56.svg";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="mt-[5rem] xl:px-0 px-6 lg:px-6 w-full mb-12 md:h-auto">
      <div className="">
        <div className="md:mt-9 xl:flex-row justify-center flex flex-col gap-[74px]">
          <div className="md:mt-6">
            <h1 className="font-bold md:text-[24px] text-[18px] mb-1">NEWS</h1>
            <hr className="w-[5%] border-2 border-primary" />

            <div className="rounded-[12px]  bg-white drop-shadow-2xl md:w-[100%] xl:w-[730px] w-auto mt-8 md:h-[230px] xl:h-[230px] lg:h-[243px] h-[114px] px-2 py-2 flex gap-3 md:gap-6">
              <div className="hidden md:block">
                <img
                  src={Newsimage}
                  alt=""
                  className="rounded-md  xl:w-[520px] md:w-[430px]"
                />
              </div>

              <div className="md:hidden block">
                <img
                  src={Newsimagemobile}
                  alt=""
                  className="rounded-md w-[155px]"
                />
              </div>

              <div className="flex justify-between items-stretch basis-[100%] flex-col">
                <span className="md:text-[24px] text-[14px] md:w-[90%] md:mt-4 font-bold">
                  NUESA Inter-Departmental Football Cup kicks off
                </span>
                <span className="text-[#888888] font-bold md:mt-0 -mt-2 text-[12px] md:text-[14px]">
                  Nov 7, 2022
                </span>
                <span className="md:w-[98%]  hidden md:block">
                  Omnis maiores velit culpa sed corporis cum exercitationem sit
                  eum. Ea veritatis et nihil corporis nobis rem ratione quia
                  nemo.
                </span>
                <span className="items-end font-semibold md:px-3 md:text-[16px] text-[12px]  text-readmore md:text-end">
                  Read more
                </span>
              </div>
            </div>

            <div className="rounded-[12px]  bg-white drop-shadow-2xl md:w-[100%] xl:w-[730px] w-auto   mt-4 md:h-[230px] xl:h-[230px] lg:h-[243px] h-[114px] px-2 py-2 flex gap-3 md:gap-6">
              <div className="hidden md:block">
                <img
                  src={Newsimage}
                  alt=""
                  className="rounded-md  xl:w-[520px] md:w-[430px]"
                />
              </div>

              <div className="md:hidden block">
                <img
                  src={Newsimagemobile}
                  alt=""
                  className="rounded-md w-[155px]"
                />
              </div>

              <div className="flex justify-between items-stretch basis-[100%] flex-col">
                <span className="md:text-[24px] text-[14px] md:w-[90%] md:mt-4 font-bold">
                  NUESA Inter-Departmental Football Cup kicks off
                </span>
                <span className="text-[#888888] font-bold md:mt-0 -mt-2 text-[12px] md:text-[14px]">
                  Nov 7, 2022
                </span>
                <span className="md:w-[98%]  hidden md:block">
                  Omnis maiores velit culpa sed corporis cum exercitationem sit
                  eum. Ea veritatis et nihil corporis nobis rem ratione quia
                  nemo.
                </span>
                <span className="items-end font-semibold md:px-3 md:text-[16px] text-[12px] text-readmore md:text-end">
                  Read more
                </span>
              </div>
            </div>

            <div className="rounded-[12px]  bg-white drop-shadow-2xl md:w-[100%] xl:w-[730px] w-auto   mt-4 md:h-[230px] h-[114px] xl:h-[230px] lg:h-[243px] px-2 py-2 flex gap-3 md:gap-6">
              <div className="hidden md:block">
                <img
                  src={Newsimage}
                  alt=""
                  className="rounded-md  xl:w-[520px] md:w-[430px]"
                />
              </div>

              <div className="md:hidden block">
                <img
                  src={Newsimagemobile}
                  alt=""
                  className="rounded-md w-[155px]"
                />
              </div>

              <div className="flex justify-between items-stretch basis-[100%] flex-col">
                <span className="md:text-[24px] text-[14px] md:w-[90%] md:mt-4 font-bold">
                  NUESA Inter-Departmental Football Cup kicks off
                </span>
                <span className="text-[#888888] font-bold md:mt-0  -mt-2 text-[12px] md:text-[14px]">
                  Nov 7, 2022
                </span>
                <span className="md:w-[98%] hidden md:block">
                  Omnis maiores velit culpa sed corporis cum exercitationem sit
                  eum. Ea veritatis et nihil corporis nobis rem ratione quia
                  nemo.
                </span>
                <span className="items-end md:text-[16px] text-[12px] font-semibold md:px-3 text-readmore md:text-end">
                  Read more
                </span>
              </div>
            </div>

            <Link to="/newsevent">
              <button className="bg-primary mt-[1.65rem] md:hidden hidden xl:block text-white py-4 rounded-[12px] text-[18px] font-semibold md:mx-auto xl:w-[100%]">
                More news
              </button>
            </Link>
            <Link to="/newsevent">
              <button className="bg-primary mt-[2.1rem]  xl:hidden md:block text-white py-4 rounded-[12px] md:text-[18px] text-[14px] font-semibold md:mx-auto md:w-[30%] mx-auto text-center justify-center flex w-[50%]">
                More news
              </button>
            </Link>
          </div>

          <div className="mt-6">
            <h1 className="font-bold md:text-[24px] text-[18px] mb-1">
              UPCOMING EVENTS
            </h1>
            <hr className="xl:w-[14%] w-[12%] md:w-[5%] border-2 border-primary mb-6" />

            <div className="bg-white shadow-xl md:hidden hidden xl:flex rounded-[12px] h-[367px] w-[328px]">
              <div className="px-2 py-2">
                <img src={Newsimage} alt="" className="rounded-md" />
                <div className="flex flex-col px-5 mt-6">
                  <span className="font-bold mb-2">LECTURERS CONFERENCE</span>
                  <span className="text-[#888888] mb-4 font-semibold">
                    Nov 7, 2022, 3:00PM WAT
                  </span>
                  <span className="text-readmore text-end font-semibold">
                    More details
                  </span>
                </div>
              </div>
            </div>

            {/* // tablet design and mobile design */}

            <div className="xl:hidden  md:block">
              <div className="flex justify-between items-end">
                <div className="flex flex-col md:px-5 mt-6">
                  <span className="font-bold md:text-[16px] text-[14px] mb-2">
                    LECTURERS CONFERENCE
                  </span>
                  <span className="text-[#888888] md:text-[16px] text-[12px] mb-4 font-semibold">
                    Nov 7, 2022, 3:00PM WAT
                  </span>
                </div>
                <div className="mb-2">
                  <p className="text-readmore md:text-[16px] text-[12px]  font-semibold">
                    More details
                  </p>
                </div>
              </div>
            </div>
            <hr className="w-[100%]" />
            <div className="xl:hidden  md:block">
              <div className="flex justify-between items-end">
                <div className="flex flex-col md:px-5 mt-6">
                  <span className="font-bold md:text-[16px] text-[14px] mb-2">
                    LECTURERS CONFERENCE
                  </span>
                  <span className="text-[#888888] md:text-[16px] text-[12px] mb-4 font-semibold">
                    Nov 7, 2022, 3:00PM WAT
                  </span>
                </div>
                <div className="mb-2">
                  <p className="text-readmore md:text-[16px] text-[12px]  font-semibold">
                    More details
                  </p>
                </div>
              </div>
            </div>
            <hr className="w-[100%]" />
            <div className="xl:hidden  md:block">
              <div className="flex justify-between items-end">
                <div className="flex flex-col md:px-5 mt-6">
                  <span className="font-bold md:text-[16px] text-[14px] mb-2">
                    LECTURERS CONFERENCE
                  </span>
                  <span className="text-[#888888] md:text-[16px] text-[12px] mb-4 font-semibold">
                    Nov 7, 2022, 3:00PM WAT
                  </span>
                </div>
                <div className="mb-2">
                  <p className="text-readmore md:text-[16px] text-[12px]  font-semibold">
                    More details
                  </p>
                </div>
              </div>
              <hr className="w-[100%]" />
            </div>
            <Link to="/newsevent">
              <button className="mt-6  px-[8px] py-[12px] xl:hidden md:block md:mx-auto mx-auto text-center justify-center flex border text-primary rounded-[12px] font-semibold text-[14px] md:text-[18px] border-solid border-primary">
                View more upcoming events
              </button>
            </Link>

            <div className="bg-white shadow-xl md:hidden hidden xl:flex rounded-[12px] mt-2 h-[367px] w-[328px]">
              <div className="px-2 py-2">
                <img src={Newsimage} alt="" className="rounded-md" />
                <div className="flex flex-col px-5 mt-6">
                  <span className="font-bold mb-2">LECTURERS CONFERENCE</span>
                  <span className="text-[#888888] mb-4 font-semibold">
                    Nov 7, 2022, 3:00PM WAT
                  </span>
                  <span className="text-readmore text-end font-semibold">
                    More details
                  </span>
                </div>
              </div>
            </div>
            <Link to="/newsevent">
              <button className="mt-3 py-4 md:hidden hidden xl:flex border text-primary rounded-[12px] font-semibold text-[18px] border-solid border-primary px-10">
                View more upcoming events
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
