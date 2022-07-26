import React from "react";
import HowItWorks from "../Images/Group 32.png";

const ThirdSection = () => {
  return (
    <div className="grid grid-cols-2 py-8 LargeLaptop:pt-10 LargeLaptop:pb-14 Laptop:px-[15%] LargeLaptop:px-[15%] 4kDesktop:px-[15%] items-center gap-32 RangeForPhone:grid RangeForPhone:grid-cols-1 RangeForPhone:px-8 RangeForPhone:gap-[4.5rem] RangeForPhone:pb-16 Tablet:px-28">
      <div className="flex flex-col gap-5">
        <h1 className="border-b-3 rounded-br-xl border-b-[3px] border-SecondaryColor w-fit text-2xl ml-12 pb-1 Laptop:text-3xl ">
          How it works
        </h1>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
          ipsum eget arcu turpis semper tincidunt vulputate eu. Feugiat ut elit
          odio aliquet odio dolor ultrices mattis. In at odio placerat cras amet
          duis odio sit. Tellus enim nunc urna sed.
        </p>
      </div>
      <figure>
        <img src={HowItWorks} alt="The process" />
      </figure>
    </div>
  );
};

export default ThirdSection;
