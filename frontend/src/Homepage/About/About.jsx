import React from "react";
import Aboutimage from "../../assets/about.svg";

const About = () => {
  return (
    <div className="xl:mx-[6rem] md:mt-[4rem]">
      <div className="md:flex lg:flex-row sm:flex-row gap-2">
        <div className="md:w-[50%] mx-6 md:px-0">
          <h1 className="font-bold md:text-[24px] text-[18px] md:mb-1">
            ABOUT NUESA ENGINEERING
          </h1>
          <hr className="w-[8%] border-2 border-primary mb-8" />
          <div className="md:hidden mb-3">
            <img src={Aboutimage} alt="" className="w-[509px]" />
          </div>
          <p className="md:w-[95%] md:text-[16px] text-[14px] mb-2 md:mb-8">
            Ea sit magni quas vel consequatur tempora fugit voluptatem. Aliquid
            praesentium non voluptate. Quisquam quia necessitatibus ratione quis
            itaque omnis quos.
          </p>
          <p className="w-[94%] hidden md:block mb-8">
            Optio sit expedita voluptatem quis. In aliquam incidunt. Laboriosam
            officia dolorem laboriosam quia. Voluptas aliquam dolor et est
            repellendus rerum aspernatur distinctio qui.
          </p>
          <p className="w-[94%] hidden md:block mb-5">
            Dolorem rem ut autem consequatur dolorem officia officiis architecto
            vel. Est adipisci eum fugit voluptatum delectus. Sed amet fuga eius
            dolore quia distinctio qui. Reprehenderit quaerat mollitia eligendi
            mollitia itaque voluptatem suscipit a sed. Inventore natus
            excepturi. Corrupti non quo.
          </p>
          <button className="text-primary border-[1.5px] px-4 py-1 md:text-[16px] text-[14px] rounded-md font-bold border-buttonborder border-solid">
            View more
          </button>
        </div>

        <div className="h-[400px] hidden md:block">
          <img src={Aboutimage} alt="" className="w-[509px]" />
        </div>
      </div>
    </div>
  );
};

export default About;
