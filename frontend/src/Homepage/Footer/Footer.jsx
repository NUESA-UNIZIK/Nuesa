import React from "react";
import Logo from '../../assets/nuesalogo.svg'


const Footer = () => {
  return (
    <div className="bg-[#000C23] mx-auto  mt-[2rem] md:mt-[5rem]">
      <div className="lg:mx-[6rem] mx-6">
        <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-[10rem] gap-2 justify-between">
          <div className="md:w-[379px] hidden lg:block mt-12">
            <h1 className="font-bold md:text-[22px] mb-2 text-white">FACULTY OF ENGINEERING UNIZIK</h1>
            <p className="text-[#E9EBEC] mb-2">
              Omnis maiores velit culpa sed corporis cum exercitationem sit eum.
              Ea veritatis et nihil corporis nobis rem ratione quia nemo.
            </p>
            <img src={Logo} alt="" className="w-[98px] hidden md:block" />
          </div>

          <div className="mt-12 leading-[3rem]">
            <h1 className="font-bold text-white md:text-[22px]">USEFUL LINKS</h1>
            <ul className="text-[#E9EBEC] text-[14px]">
              <li>Courses</li>
              <li>Admission</li>
              <li>Faculty bio</li>
              <li>Complaints</li>
              <li>Exam timetable</li>
            </ul>
          </div>

          <div className="mt-12 leading-[3rem]">
            <h1 className="font-bold md:text-[22px] text-white">CONTACT</h1>
            <ul className="text-[#E9EBEC] text-[14px]">
              <li>+2348020708683</li>
              <li>smart.okolic@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
