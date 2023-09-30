import React from "react";
import Presidentimg1 from "../../assets/president.jpg";
import { Link } from "react-router-dom";

const Aboutcomponent = () => {
  return (
    <div className="xl:mx-[6rem]  mt-6 mx-6">
       
      <div className="flex mx-auto md:items-center justify-center lg:flex-row gap-8 flex-col mt-8">
        <div>
          <img
            src={Presidentimg1}
            className="md:w-[430px] mx-auto w-[317px] rounded-md"
            alt=""
          />
        </div>

        <div className="lg:w-[667px]">
          <h1 className="font-semibold xl:w-[557px] lg:-mt-[7rem] md:w-full w-[317px] text-[16px] md:text-[20px]">
            Brief Citation of Akpa Emmanuel, The President Nigerian Universities
            Engineering Students Association, UNIZIK (NUESA UNIZIK)
          </h1>
          <p className="mt-[16px] text-[16px] md:block hidden">
            Sit quia consequatur voluptatibus deserunt. Quos fugiat dolor. Sit
            expedita error ipsam qui vitae odit. Quod repudiandae voluptates
            dolores fuga. Minus reiciendis labore officiis ipsum sed sint
            consequatur quia. Nisi soluta architecto dolore et totam ut placeat.
            Qui suscipit tempora molestiae voluptatum sequi enim itaque quia.
            Non odit reiciendis amet. Ex voluptatem quas necessitatibus
            necessitatibus incidunt placeat est. Velit sequi qui. Molestias
            nihil blanditiis eos molestias adipisci id impedit. Reprehenderit
            enim eveniet. Quia recusandae aperiam iure sapiente et dolores saepe
            occaecati repellendus. A eos fugit consectetur et delectus in
            eligendi vel sint.
          </p>
          <p className="mt-[14px] md:hidden block text-[14px]">
            Sit quia consequatur voluptatibus deserunt. Quos fugiat dolor. Sit
            expedita error ipsam qui vitae odit. Quod repudiandae voluptates
            dolores fuga. Minus reiciendis labore officiis ipsum sed sint
            consequatur quia. Nisi soluta architecto dolore et totam ut
            placeat...
          </p>
          <Link to="/aboutpresident">
            <button className="text-primary border-[1.5px] px-4 py-1 mt-[16px] md:text-[16px] text-[14px] rounded-md font-bold border-buttonborder border-solid">
              View more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Aboutcomponent;
