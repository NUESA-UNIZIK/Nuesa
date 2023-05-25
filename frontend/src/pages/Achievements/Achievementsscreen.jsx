import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Achievementimag from "../../assets/Achievementimage.svg";
import { useParams } from "react-router-dom";
import { achievements } from "../../data";
import Navbar2 from "../../Homepage/Header/Navbar2";
import Footer from "../../Homepage/Footer/Footer";
import sanityClient from '../../client'
import imageUrlBuilder from "@sanity/image-url";
const Achievementsscreen = () => {
  const { id } = useParams();
  const [article, setArticle] = useState([])
  const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}
useEffect(() => {
  sanityClient
  .fetch(
    `*[_type == "post" && slug.current == "${id}" ]{
      title,
      slug{
      current
    },
      mainImage, 
      author->{name},
      body[]{
        children[]{
          text[]
        }
      }
    }
    `
  ).then((data)=>setArticle(data[0])).catch((e)=> console.log(e))
}, [id])
//data[0].body[0].children[0].text
if(article.length === 0){
  return <h1>Loading...</h1>
}

console.log(article)
  return (
  // <h1>{article.body[0].children[0].text}</h1>
    <>
      <Navbar2 />
      <div className="text-center">
        <div className="text-center md:py-[80px] py-[20px] bg-cover md:mt-[6.3rem] mt-[4rem]  h-[85px]  bg-[url('/src/assets/heroimage.svg')]">
          <h1 className="md:text-[48px] md:-mt-8 hidden md:block text-[24px] text-white uppercase font-[700] ">
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
          <span className="text-[16px] font-[500] leading-[19.36px] ">
            {" "}
            <IoIosArrowForward />{" "}
          </span>
          <Link
            to="/achievement/:id"
            className="md:text-[16px] text-[12px] font-[500] leading-[19.36px] "
          >
            AchievementScreen
          </Link>
        </div>

        <h1 className="font-bold text-[16px] md:text-[25px]">
          {article.title}
        </h1>
        <div className="md:px-[12rem] md:text-[16px] text-[14px] px-[2rem] md:mt-4 text-start">
          <div className="mb-4">
            <p className="md:mt-6 mt-3">{article.body[0].children[0].text}</p>
            <p className="mt-6">{article.body[0].children[0].text}</p>
            <p className="mt-6">{article.body[0].children[0].text}</p>
          </div>

          <div>
            <img src={urlFor(article.mainImage).url()} alt="" />
          </div>

          <div className="mb-4">
            <p className="mt-6">{article.body[0].children[0].text}</p>
            <p className="mt-6">{article.body[0].children[0].text}</p>
            <p className="mt-6">{article.body[0].children[0].text}</p>
          </div>

          <div>
            <img src={urlFor(article.mainImage).url()} alt="" />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Achievementsscreen;
