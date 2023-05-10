import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import img from "../../assets/newsimage.svg";
import { IoMdSearch } from "react-icons/io";
import { getAllPosts } from "../../service/postService";

export const OnlyNews = () => {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    async function posts(){
      setPosts(await getAllPosts())
     }
     posts()
  }, [])
  if(posts.length == 0){
    return <h1>Loading....</h1>
  }
  const featuredPosts = [{title: "LECTURERS CONFERENCE", date: " Nov 7, 2022, 3:00PM WAT", excerpt: " Omnis maiores velit culpa sed corporis cum exercitationem...", 
  body:"Omnis maiores velit culpa sed corporis cum exercitationem sit eum. Ea veritatis et nihil corporis nobis rem ratione quia nemo."}]
  console.log(posts);
    return(
        <>
       
        <div className=" flex flex-col md:flex-row p-[30px] justify-center gap-[100px] items-start mt-[20px]">
        <div className="flex flex-col gap-[16px] justify-center items-start">
          {posts.map((post)=>{
                return(

                  <Link to={`/nuesa/${post.slug}`}>
                  <div className="shadow-xl px-[10px] py-[15px] border border-[#fff]   gap-[10px]  flex lg:flex-col items-center rounded-[12px]">
                    <img
                      src={img}
                      alt="news"
                      className="w-[110px] h-[100%]   rounded lg:w-[100%] "
                    />
                    <div className="flex flex-col items-start gap-[22px max-w-[428px]">
                      <div className="flex flex-col gap-[5px] p-0 ">
                        <p className="text-[10px] lg:text-[12px]  font-[700]  text-[#0000000] ">
                          NUESA Inter-Departmental Football Cup kicks off
                        </p>
                        <span className="lg:text-[14px] text-[10px] font-[700] leading-[150%] text-[#888888] ">
                          13th Feb 2023
                        </span>
                        <p className="font-[400] text-[12px] block md:hidden lg:text-[16px] text-[#000000] ">
                      Omnis maiores velit culpa sed corporis cum exercitationem...
                      </p>
                      <p className="font-[400] hidden md:flex text-[12px] lg:text-[16px] text-[#000000] ">
                      Omnis maiores velit culpa sed corporis cum exercitationem
                          sit eum. Ea veritatis et nihil corporis nobis rem ratione
                          quia nemo.
                      </p>
                      </div>
                      <Link
                        to="/nuesa"
                        className="text-[16px] w-full text-center lg:block hidden font-[700] leading-[150%] rounded-[8px] text-[#092E76] py-[8px] px-[12px] border "
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </Link>)
         
          })}
      

      <div className="lg:flex hidden flex-col items-start gap-[30px] w-[368px]">
          <div className=" hidden lg:flex flex-col justify-center items-start gap-[30px] w-[368px]">
            <div className="flex flex-row rounded-[8px] border px-[16px] py-[12px] gap-[10px] justify-between ">
              <input
                type="search"
                placeholder="Search.."
                name=""
                id=""
                className="w-[100%] outline-0"
              />

              <IoMdSearch />
            </div>

            <div className="flex flex-col items-start  ">
              <div className="flex p-[16px] box-border border-b-[1px] gap-[3px] flex-col items-start ">
                <h3 className="text-[16px] font-[700] leading-[24px] ">
                  LECTURERS CONFERENCE
                </h3>
                <p className="text-[14px] leading-[21px] font-[700] text-[#888888] ">
                  Nov 7, 2022, 3:00PM WAT
                </p>
                <p className="font-[400] text-[12px] block md:hidden lg:text-[16px] text-[#000000] ">
                Omnis maiores velit culpa sed corporis cum exercitationem...
                </p>
                <p className="font-[400] hidden md:flex text-[12px] lg:text-[16px] text-[#000000] ">
                Omnis maiores velit culpa sed corporis cum exercitationem
                    sit eum. Ea veritatis et nihil corporis nobis rem ratione
                    quia nemo.
                </p>
              </div>
              <div className="flex p-[16px] box-border border-b-[1px] gap-[3px] flex-col items-start ">
                <h3 className="text-[16px] font-[700] leading-[24px] ">
                  LECTURERS CONFERENCE
                </h3>
                <p className="text-[14px] leading-[21px] font-[700] text-[#888888] ">
                  Nov 7, 2022, 3:00PM WAT
                </p>
                <p className="font-[400] text-[12px] block md:hidden lg:text-[16px] text-[#000000] ">
                Omnis maiores velit culpa sed corporis cum exercitationem...
                </p>
                <p className="font-[400] hidden md:flex text-[12px] lg:text-[16px] text-[#000000] ">
                Omnis maiores velit culpa sed corporis cum exercitationem
                    sit eum. Ea veritatis et nihil corporis nobis rem ratione
                    quia nemo.
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
                  Doloribus distinctio labore blanditiis eum non hic labore. Ad
                  quidem nostrum. Voluptas omnis fuga.
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
                  Doloribus distinctio labore blanditiis eum non hic labore. Ad
                  quidem nostrum. Voluptas omnis fuga.
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
                  Doloribus distinctio labore blanditiis eum non hic labore. Ad
                  quidem nostrum. Voluptas omnis fuga.
                </p>
              </div>
            </div>
        </div>
</div>
      </div>

     
      <div className="flex justify-center items-center">
        <div className="flex justify-center md:hidden items-center pb-[30px] md:gap-[30px] gap-[10px] flex-row">
          <button className="font-[500] md:text-[16px] text-[14px]  text-darkes ">
            Previous
          </button>
          <button className="md:px-[17px] md:py-[12px] px-[14px] py-[8px] rounded-[8px] md:text-[16px] text-[12px]  text-[#fff] bg-primary ">
            1
          </button>
          <button className="md:px-[17px] md:py-[12px] px-[14px] py-[8px] rounded-[8px] md:text-[16px] text-[12px] text-darkest bg-[#EDEAE6] ">
            2
          </button>
          <button className="md:px-[17px] md:py-[12px] px-[14px] py-[8px] rounded-[8px] md:text-[16px] text-[12px] text-darkest bg-[#EDEAE6] ">
            3
          </button>
          <button className="font-[500] md:text-[16px] text-[14px]  text-darkes ">
            Next
          </button>
        </div>
</div>
</div>
      </>
    )
}