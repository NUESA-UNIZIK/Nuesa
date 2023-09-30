import React, { useState } from "react";
import Navbar2 from "../Header/Navbar2";

import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

import Presidentimg1 from "../../assets/president.jpg";
import Presidentimg2 from "../../assets/president2.jpg";
import Footer from "../Footer/Footer";

const Aboutpresident = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="w-full">
      {/* <Navbar2 /> */}
      <div className="text-center py-[20px] md:py-[80px] bg-cover  bg-no-repeat w-full  h-[85px]  bg-[url('/src/assets/heroimage.svg')]">
        <h1 className="md:text-[48px] md:-mt-8  text-[24px] text-white uppercase font-[700] ">
          About the President
        </h1>
      </div>

      <div className="flex flex-row my-[30px] items-center align-center justify-center md:mt-[30px] mt-[90px]   gap-[4px] ">
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
          to="/aboutpresident"
          className="md:text-[16px] text-[12px] font-[500] leading-[19.36px] "
        >
          About the current president
        </Link>
      </div>

      <div className="flex flex-col my-[30px] items-center align-center justify-center md:mt-[30px] mt-[20px]  gap-[4px] ">
        <div className="flex md:flex-row flex-col gap-4">
          <img
            src={Presidentimg1}
            className="md:w-[430px] w-[317px] rounded-md"
            alt=""
          />
          <img
            src={Presidentimg2}
            className="md:w-[430px] w-[317px] rounded-md"
            alt=""
          />
        </div>

        <div className="md:w-[871px] md:px-0 px-5 mt-4">
          <h1 className="font-semibold  text-[16px] md:text-[1.75rem]">
            Brief Citation of Akpa Emmanuel, The President Nigerian
            Universities Engineering Students Association, UNIZIK (NUESA UNIZIK)
          </h1>
          <p className="mt-[16px] text-[14px] md:text-[16px]">
            Chukwudi Chukwudubem Anointing is a native of Awkuzu, in Oyi LGA of
            Anambra State. He was born on the 9th of January 1996 in Kano, Kano
            State. He had his Nursery education in International Nursery and
            Primary School, Emir Road, Kano State and then proceeded to Victory
            Nursery and Primary School in Ebonyi State where he obtained his
            First School Leaving Certificate and then proceeded to the Secondary
            school of the same institution and acquired his SSCE results in
            flying colours. In 2016, he got admitted into the prestigious Alex
            Ekwueme Federal University, Ndufu-Alike, Ebonyi State to study
            Electrical/Electronic Engineering and he’s currently in his final
            year of study.
          </p>
          <p className="mt-[14px] text-[14px] md:text-[16px]">
            He is a fellow of the Nigerian Universities Engineering Students’
            Association (NUESA) and a member of Institute of Electrical and
            Electronics Engineers (IEEE) and he has taken various leadership
            roles right from his Nursery school days. He was the Disciplinary
            prefect (2014/2015) in high school, he was also the Secretary of
            Science Students’ Association (2013/2014) in high school and later
            became the President of the same association (2014/2015) in high
            school.
          </p>
          <p className="mt-[14px] text-[14px] md:text-[16px]">
            After his Secondary school he worked as a teacher in Guardian
            Vocational Secondary School, Nkwegu, Abakaliki due to his passion to
            inculcate knowledge to the younger generation, he also worked in
            Umuebe Farms College (owned by Distinguished Senator Sam. Ominyi
            Egwu, former Executive Governor of Ebonyi State), he also enrolled
            for some online courses with certification in leadership and
            managerial skills.
          </p>
          <p className="mt-[14px] text-[14px] md:text-[16px]">
            Chukwudi Chukwudubem Anointing (Prudence) as he is popularly called
            by friends and allies is a man who has distinguished himself in
            Students’ welfare, he is a cosmopolitan Student Unionist who has
            traversed the length and breadth of the country in students
            unionism, he has served as the SUG Senator Representing the good,
            vibrant, intelligent and rational Engineering Students (2018/2019)
            in his citadel of learning where he sponsored a bill for the
            establishment of faculty association in Alex Ekwueme Federal
            University, Ndufu-Alike, Ebonyi State and thus followed it up to the
            later to establish NUESA, AE-FUNAI Chapter in 2018. Because of his
            expertise in Law Making the students supported him again to serve as
            the Director of Transport (2019/2020) Students Union Government
            (SUG) in AE-FUNAI where he lived up to expectation and in the just
            concluded National Technical & Exhibition Conference in LAUTECH, he
            was elected the National President of this noble association to
            replicate what he has been doing to Nigerian Students.
          </p>
          <p className="mt-[14px] text-[14px] md:text-[16px]">
            He is technically savvy and he believes that persistence and
            consistency will bring about success, he doesn’t see failure as a
            downfall but an encouragement to do better. With his wealth of
            experience we are sure he will lead NUESA to that enviable height.
          </p>
          <p className="mt-[14px] text-[14px] md:text-[16px]">
            His favourite quote is “The same boiling water that softens the
            potato hardens the egg. It’s what you’re made of. Not the
            circumstances (Unknown)”.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Aboutpresident;
