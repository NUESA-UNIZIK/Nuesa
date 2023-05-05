import React, { useState } from "react";
import img from "../../assets/newsimage.svg";
import { IoIosArrowBack, IoIosArrowForward, IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { BsTag } from "react-icons/bs";

export const Nuesa = () => {
    const [viewReply, setViewReply] = useState("hidden");
    const [replyButton, setReplyButton] = useState('Show More Replies')
    const showReply = () => {
        
        if (replyButton === 'Show More Replies' && viewReply === 'hidden') {
            setReplyButton('Show Less Reply');
            setViewReply('flex');
        } else {
            setReplyButton('Show More Replies');
            setViewReply('hidden');
        }
    }
  return (
    <>
      <div className=" overflow-x-hidden">
        <div>
          <div className=" text-center py-[30px] bg-cover fixed top-0 right-0 left-0  bg-[url('/src/assets/heroimage.svg')]">
            <h1 className="text-[48px] text-white uppercase relative  font-[700] ">
              News/Event
            </h1>
          </div>

          <div className="flex flex-row my-[30px] mt-[150px] align-center justify-center   gap-[10px] ">
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
            <span className="text-[16px] font-[500] leading-[19.36px] ">
              {" "}
              <IoIosArrowForward />{" "}
            </span>
            <Link
              to="/nuesa"
              className="text-[16px] font-[500] leading-[19.36px] "
            >
              Nuesa...
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-[40px] lg:block hidden font-[700] text-center mx-[20px] my-[30px] ">
            NUESA Inter-Departmental Football Cup kicks off
          </h1>
        </div>
        <div className=" flex flex-col md:flex-row p-[30px] justify-center gap-[100px] items-start mt-[50px]">
          <div className="">
            <div>
              <div className="flex flex-row gap-[32px] items-start ">
                <span className="text-[#717171] text-[18px] font-[500] flex flex-row items-center ">
                  <BiTimeFive />
                  Sun 10th Feb 2023
                </span>{" "}
                <span className="text-[#717171] text-[18px] font-[500] flex flex-row items-center ">
                  <BsTag />
                  Sports
                </span>
              </div>
              <img
                className="h-[462px] w-[701px] rounded-[12px] "
                src={img}
                alt=""
              />
              <div className="flex flex-col items-start font-[400] my-[30px] gap-[40px]">
                <p className="font-[400] text-[18px] ">
                  Aut non maiores et. Cum qui magni dolorem odit officia
                  exercitationem et. Vitae culpa dolorem enim perspiciatis
                  magnam qui. Veritatis et voluptatum aspernatur. Ducimus
                  consequuntur porro eveniet voluptatem. Ut quas nihil est sit
                  repellendus inventore et corporis.
                </p>
                <p className="font-[400] text-[18px]">
                  Exercitationem in corporis minus corrupti aperiam. Fuga
                  dolorem praesentium hic. Id fuga saepe illum a tenetur. Et
                  sint omnis officia et et velit numquam doloremque iste.
                  Molestiae dolor et ut excepturi fugiat. Laborum maiores et
                  odit aut velit vel dignissimos. In porro qui. Voluptates aut
                  occaecati voluptatem voluptas similique non pariatur molestiae
                  quod.
                </p>
                <p className="font-[400] text-[18px]">
                  Exercitationem in corporis minus corrupti aperiam. Fuga
                  dolorem praesentium hic. Id fuga saepe illum a tenetur. Et
                  sint omnis officia et et velit numquam doloremque iste.
                  Molestiae dolor et ut excepturi fugiat. Laborum maiores et
                  odit aut velit vel dignissimos. In porro qui. Voluptates aut
                  occaecati voluptatem voluptas similique non pariatur molestiae
                  quod.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-[700] text-[24px] text-[#FA4F06] my-[20px] ">
                COMMENTS (12)
              </h1>
              <div className=" flex flex-col  gap-[20px]">
                <div className="flex flex-col items-start  gap-[2px]">
                  <h1 className="text-[18px] font-[700]  ">Nzubechukwu</h1>
                  <span className="text-[14px] font-[400] italic text-[#000000]  ">
                    12 jan 2023 4:00pm
                  </span>
                </div>
                <p className="text-[18px] font-[400] ">
                  Aut non maiores et. Cum qui magni dolorem odit officia
                  exercitationem et. Vitae culpa dolorem enim perspiciatis
                  magnam qui. Veritatis et voluptatum aspernatur. Ducimus
                  consequuntur porro eveniet voluptatem. Ut quas nihil est sit
                  repellendus inventore et corporis.
                </p>
                <button className=" bottom-0 right-0 self-end border px-[20px] rounded-[8px] py-[10px] text-[#FA4F06] text-[14px]  font-[600] ">
                  Reply
                </button>
              </div>
              <div className="border-l-[3px] pl-[16px] transition delay-150 duration-1000 ml-[30px]">
                <div className=" flex flex-col  gap-[20px]">
                  <div className="flex flex-col items-start  gap-[2px]">
                    <h1 className="text-[18px] font-[700]  ">Nzubechukwu</h1>
                    <span className="text-[14px] font-[400] italic text-[#000000]  ">
                      12 jan 2023 4:00pm
                    </span>
                  </div>
                  <p className="text-[18px] font-[400] ">
                    Aut non maiores et. Cum qui magni dolorem odit officia
                    exercitationem et. Vitae culpa dolorem enim perspiciatis
                    magnam qui. Veritatis et voluptatum aspernatur. Ducimus
                    consequuntur porro eveniet voluptatem. Ut quas nihil est sit
                    repellendus inventore et corporis.
                  </p>
                  <button className=" bottom-0 right-0 self-end border px-[20px] rounded-[8px] py-[10px] text-[#FA4F06] text-[14px]  font-[600] ">
                    Reply
                  </button>
                </div>
                <div className={` lg:flex ${viewReply} flex-col  gap-[20px]`}>
                  <div className="flex flex-col items-start  gap-[2px]">
                    <h1 className="text-[18px] font-[700]  ">Nzubechukwu</h1>
                    <span className="text-[14px] font-[400] italic text-[#000000]  ">
                      12 jan 2023 4:00pm
                    </span>
                  </div>
                  <p className="text-[18px] font-[400] ">
                    Aut non maiores et. Cum qui magni dolorem odit officia
                    exercitationem et. Vitae culpa dolorem enim perspiciatis
                    magnam qui. Veritatis et voluptatum aspernatur. Ducimus
                    consequuntur porro eveniet voluptatem. Ut quas nihil est sit
                    repellendus inventore et corporis.
                  </p>
                  <button className=" bottom-0 right-0 self-end border px-[20px] rounded-[8px] py-[10px] text-[#FA4F06] text-[14px]  font-[600] ">
                    Reply
                  </button>
                </div>

                <button
                  onClick={showReply}
                  className="text-[14px] text-primary block lg:hidden leading-[150%] "
                >
                  {replyButton}
                </button>
              </div>
              <div className=" flex flex-col border-l-[3px] pl-[16px] ml-[50px]  gap-[20px]">
                <div className="flex flex-col items-start  gap-[2px]">
                  <h1 className="text-[18px] font-[700]  ">Nzubechukwu</h1>
                  <span className="text-[14px] font-[400] italic text-[#000000]  ">
                    12 jan 2023 4:00pm
                  </span>
                </div>
                <p className="text-[18px] font-[400] ">
                  Aut non maiores et. Cum qui magni dolorem odit officia
                  exercitationem et. Vitae culpa dolorem enim perspiciatis
                  magnam qui. Veritatis et voluptatum aspernatur. Ducimus
                  consequuntur porro eveniet voluptatem. Ut quas nihil est sit
                  repellendus inventore et corporis.
                </p>
                <button className=" bottom-0 right-0 self-end border px-[20px] rounded-[8px] py-[10px] text-[#FA4F06] text-[14px]  font-[600] ">
                  Reply
                </button>
              </div>
              <div className={` ${viewReply} lg:flex flex-col  gap-[20px]`}>
                <div className="flex flex-col items-start  gap-[2px]">
                  <h1 className="text-[18px] font-[700]  ">Nzubechukwu</h1>
                  <span className="text-[14px] font-[400] italic text-[#000000]  ">
                    12 jan 2023 4:00pm
                  </span>
                </div>
                <p className="text-[18px] font-[400] ">
                  Aut non maiores et. Cum qui magni dolorem odit officia
                  exercitationem et. Vitae culpa dolorem enim perspiciatis
                  magnam qui. Veritatis et voluptatum aspernatur. Ducimus
                  consequuntur porro eveniet voluptatem. Ut quas nihil est sit
                  repellendus inventore et corporis.
                </p>
                <button className=" bottom-0 right-0 self-end border px-[20px] rounded-[8px] py-[10px] text-[#FA4F06] text-[14px]  font-[600] ">
                  Reply
                </button>
              </div>
            </div>

            <button
              onClick={showReply}
              className="text-[14px] ml-[50px] mt-[10px] text-primary block lg:hidden leading-[150%] "
            >
              {replyButton}
            </button>
          </div>

          <div className="lg:flex hidden flex-col items-start gap-[30px] w-[368px]">
    

            <div className="flex flex-col items-start gap-[30px] w-[368px]">
              <div className="flex flex-row rounded-[8px] border px-[16px] py-[12px] gap-[10px] justify-between ">
                <input type="search" placeholder="Search.." className="focus:outline-none" name="" id="" />{" "}
                <IoMdSearch />
              </div>
              <div className="flex flex-col items-start ">
                <div className="flex p-[16px] box-border border-b-[1px] gap-[3px] flex-col items-start ">
                  <h3 className="text-[16px] font-[700] leading-[24px] ">
                    LECTURERS CONFERENCE
                  </h3>
                  <p className="text-[14px] leading-[21px] font-[700] text-[#888888] ">
                    Nov 7, 2022, 3:00PM WAT
                  </p>
                  <p className="text-[14px] font-[400] text-[#000000] ">
                    Doloribus distinctio labore blanditiis eum non hic labore.
                    Ad quidem nostrum. Voluptas omnis fuga.
                  </p>
                </div>
                <div className="flex p-[16px] box-border border-b-[1px] gap-[3px] flex-col items-start ">
                  <h3 className="text-[16px] font-[700] leading-[24px] ">
                    LECTURERS CONFERENCE
                  </h3>
                  <p className="text-[14px] leading-[21px] font-[700] text-[#888888] ">
                    Nov 7, 2022, 3:00PM WAT
                  </p>
                  <p className="text-[14px] font-[400] text-[#000000] ">
                    Doloribus distinctio labore blanditiis eum non hic labore.
                    Ad quidem nostrum. Voluptas omnis fuga.
                  </p>
                </div>
                <div className="flex p-[16px] box-border border-b-[1px] gap-[3px] flex-col items-start ">
                  <h3 className="text-[16px] font-[700] leading-[24px] ">
                    LECTURERS CONFERENCE
                  </h3>
                  <p className="text-[14px] leading-[21px] font-[700] text-[#888888] ">
                    Nov 7, 2022, 3:00PM WAT
                  </p>
                  <p className="text-[14px] font-[400] text-[#000000] ">
                    Doloribus distinctio labore blanditiis eum non hic labore.
                    Ad quidem nostrum. Voluptas omnis fuga.
                  </p>
                  <button>Reply</button>
                </div>
                <div className="flex p-[16px] box-border border-b-[1px] gap-[3px] flex-col items-start ">
                  <h3 className="text-[16px] font-[700] leading-[24px] ">
                    LECTURERS CONFERENCE
                  </h3>
                  <p className="text-[14px] leading-[21px] font-[700] text-[#888888] ">
                    Nov 7, 2022, 3:00PM WAT
                  </p>
                  <p className="text-[14px] font-[400] text-[#000000] ">
                    Doloribus distinctio labore blanditiis eum non hic labore.
                    Ad quidem nostrum. Voluptas omnis fuga.
                  </p>
                </div>
                <div className="flex p-[16px] box-border border-b-[1px] gap-[3px] flex-col items-start ">
                  <h3 className="text-[16px] font-[700] leading-[24px] ">
                    LECTURERS CONFERENCE
                  </h3>
                  <p className="text-[14px] leading-[21px] font-[700] text-[#888888] ">
                    Nov 7, 2022, 3:00PM WAT
                  </p>
                  <p className="text-[14px] font-[400] text-[#000000] ">
                    Doloribus distinctio labore blanditiis eum non hic labore.
                    Ad quidem nostrum. Voluptas omnis fuga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
