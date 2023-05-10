import {useEffect} from "react";
import img from "../../assets/newsimage.svg";
import { IoIosArrowBack, IoIosArrowForward, IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { getAllPosts } from "../../service/getAllPosts";

export const NewsEvent = () => {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    async function posts(){
      setPosts(await getAllPosts())
     }
     posts()
  }, [])
  if(posts.length == 0){
    return <h1>Loading.....</h1>
  }
  console.log(posts);
  return (
    <>
      <div className=" overflow-x-hidden">
        <div className=" text-center py-[30px] bg-cover fixed top-0 right-0 left-0  bg-[url('/src/assets/circuitlines.jpg')]">
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
        </div>
      </div>
      <div className=" flex flex-col md:flex-row p-[30px] justify-center gap-[100px] items-start mt-[50px]">
        <div className="flex flex-col gap-[16px] justify-center items-start">
          <div className=" shadow-xl p-[10px] gap-[10px]  flex flex-col items-start rounded-[12px]">
            <img src={img} alt="news" />
            <div className="flex flex-col items-start gap-[22px max-w-[428px]">
              <div className="flex flex-col gap-[5px] p-0 ">
                <p className="text-[20px] font-[700]  text-[#0000000] ">
                  NUESA Inter-Departmental Football Cup kicks off
                </p>
                <span className="text-[14px] font-[700] leading-[150%] text-[#888888] ">
                  13th Feb 2023
                </span>
                <p className="font-[400] text-[16px] text-[#000000] ">
                  Omnis maiores velit culpa sed corporis cum exercitationem sit
                  eum. Ea veritatis et nihil corporis nobis rem ratione quia
                  nemo.
                </p>
              </div>
              <a className="text-[16px] font-[700] leading-[150%] rounded-[8px] text-[#092E76] py-[8px] px-[12px] border ">
                Read More
              </a>
            </div>
          </div>
          <div className=" shadow-xl p-[10px] gap-[10px] flex flex-col items-start rounded-[12px] ">
            <img src={img} alt="news" />
            <div className="flex flex-col items-start gap-[22px] max-w-[428px]">
              <div className="flex flex-col gap-[5px] p-0 ">
                <h2 className="text-[20px] font-[700]  text-[#0000000] ">
                  NUESA Inter-Departmental Football Cup kicks off
                </h2>
                <span className="text-[14px] font-[700] leading-[150%] text-[#888888] ">
                  13th Feb 2023
                </span>
                <p className="font-[400] text-[16px] text-[#000000] ">
                  Omnis maiores velit culpa sed corporis cum exercitationem sit
                  eum. Ea veritatis et nihil corporis nobis rem ratione quia
                  nemo.
                </p>
              </div>
              <a className="text-[16px] font-[700] leading-[150%] rounded-[8px] text-[#092E76] py-[8px] px-[12px] border ">
                Read More
              </a>
            </div>
          </div>
          <div className=" shadow-xl p-[10px] gap-[10px] flex flex-col items-start rounded-[12px]">
            <img src={img} alt="news" />
            <div className="flex flex-col items-start gap-[22px] max-w-[428px]">
              <div className="flex flex-col gap-[5px] p-0 ">
                <h2 className="text-[20px] font-[700]  text-[#0000000] ">
                  NUESA Inter-Departmental Football Cup kicks off
                </h2>
                <span className="text-[14px] font-[700] leading-[150%] text-[#888888] ">
                  13th Feb 2023
                </span>
                <p className="font-[400] text-[16px] text-[#000000] ">
                  Omnis maiores velit culpa sed corporis cum exercitationem sit
                  eum. Ea veritatis et nihil corporis nobis rem ratione quia
                  nemo.
                </p>
              </div>
              <a className="text-[16px] font-[700] rounded-[8px] leading-[150%] text-[#092E76] py-[8px] px-[12px] border ">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[30px] w-[368px]">
          <div className="flex flex-row rounded-[8px] border  px-[16px] py-[12px] gap-[10px] justify-between ">
            <input type="search" placeholder="Search.." name="" id="" className="focus:outline-none" />{" "}
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
    </>
  );
};


export default NewsEvent