import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import Footer from "../../Homepage/Footer/Footer";
import Navbar2 from "../../Homepage/Header/Navbar2";
import imageUrlBuilder from "@sanity/image-url";
import  SanityClient  from "../../client";

const Achievements = () => {
  const [posts, setPosts] = useState([])
  const [dept, setDept] = useState("ECE")
  const builder = imageUrlBuilder(SanityClient);

function urlFor(source) {
	return builder.image(source);
}


  useEffect(() => {
    SanityClient.
    fetch(
      `*["${dept}" in department[]->title]{
        title,
        slug,
        body,
        mainImage
      }`
    ).then((data)=> setPosts(data))
      .catch((e)=> console.log(e))
  }, [dept])

  const [depts, setDepts] = useState([
    {name: 'ECE' , clicked: true},
    {name: 'Chemical', clicked: false},
    {name: 'Civil', clicked: false},
    {name: 'ABE', clicked: false},
    {name: 'IPE', clicked: false},
    {name: 'Electrical', clicked: false},
    {name: 'MME', clicked: false},
    {name: 'Mechanical', clicked: false},
    {name: 'PTE', clicked: false},
  ])
  const numb = [0,1,2,3,4,5,6,7,8]
  const choose =(dept,i)=> {
  setDept(dept.name)
  const not_chosen = numb.filter((num)=> num != i)

  depts[i].clicked = true
  not_chosen.map((item)=>{
  depts[item].clicked = false
})
 }
    
  
  return (
    <>
    <Navbar2/>
      <div className="text-center">
        <div className="text-center md:py-[80px] md:mt-[6.3rem] mt-[4rem] py-[20px] bg-cover  h-[85px]  bg-[url('/src/assets/heroimage.svg')]">
          <h1 className="md:text-[48px] md:-mt-8  text-[24px] text-white uppercase  font-[700] ">
            ACHIEVEMENTS
          </h1>
        </div>

        <div className="flex flex-row my-[30px] items-center align-center justify-center md:mt-[30px] mt-[20px]   gap-[4px] ">
          <Link
            to="/"
            href=""
            className="md:text-[16px] text-[12px] font-[500] leading-[19.36px] "
          >
            Home
          </Link>
          <span className="text-[16px] font-[500] leading-[19.36px] ">
            {" "}
            <IoIosArrowForward />{" "}
          </span>
          <Link
            to="/achievement"
            className="md:text-[16px] text-[12px] font-[500] leading-[19.36px] "
          >
            Achievements
          </Link>
        </div>

        <div className="flex flex-row my-[30px] items-center align-center justify-center">
          <div className="flex flex-row rounded-[8px] items-center border md:w-[352px] w-[320px]   px-[16px] py-[12px] gap-[10px] justify-between ">
            <input
              type="search"
              placeholder="Search.."
              name=""
              id=""
              className="focus:outline-none"
            />
            <BiSearchAlt2 size={24} />
          </div>
        </div>

        <div className="mt-6 md:flex space-x-2 space-y-2 md:space-x-0 md:space-y-0 md:flex-row  my-[30px] align-center justify-center  gap-[10px] ">
          {depts.map((dept, i)=>{
            return( <button onClick={()=>choose(dept, i)} 
            key={dept.name} 
            className={dept.clicked?"bg-primary text-[#FFEFE6] px-2 py-2 font-semibold rounded-[8px]":"text-primary bg-[#FFEFE6] px-2 py-2 font-semibold rounded-[8px]"}  >
            {dept.name} 
          </button>)
          })}
        </div>

        {/* // desktop view */}

        <div className="gap-[1rem]  md:px-[4rem] px-[1rem]  xl:grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 my-[30px] items-center align-center justify-center">
          {posts.map((article, index) => {
            return (
              <div key={index} className="bg-white shadow-2xl mt-4 md:mt-0 rounded-[12px] md:h-[427px] w-[316px] md:w-[367px]">
                <div className="px-2 py-2">
                  <img src={urlFor(article.mainImage).url()}  alt="" className="rounded-md" />
                  <div className="text-start px-2 mt-2">
                    <h1 className="font-[700] mb-3 text-[14px] md:text-[20px]">
                      {article.title}
                    </h1>
                    <p className="w-[95%] md:text-[16px] text-[12px]">
                      {article.body[0].children[0].text}
                    </p>
                    <Link to={`/achievement/${article.slug.current}`}>
                      <button className="px-3 py-2 mt-2 mb-2 rounded-md text-primary md:text-[16px] text-[14px] font-[600] border border-solid">
                      {article.body[0].children[0].text}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Achievements;
