import React from "react";
import SecondSectionDuplicates from "./ChildComponents/SecondSectionDuplicates";
import { HiDownload } from "react-icons/hi";
import { FaPause } from "react-icons/fa";

const SecondSection = () => {
  return (
    <div className="flex items-center justify-between py-24 px-12 LargeLaptop:px-[15%] RangeForPhone:grid RangeForPhone:grid-cols-1 RangeForPhone:gap-14 Tablet:px-28 Laptop:px-24">
      <SecondSectionDuplicates />
      <div className="bg-gray-400 h-[2px] rotate-90 rounded-full w-1/2 RangeForPhone:hidden"></div>
      <SecondSectionDuplicates
        Title="Download"
        Icon={<HiDownload fill="#FF006B" size={30} />}
        Padding="p-[9px]"
      />
      <div
        className={`bg-gray-400 h-[2px] rotate-90 rounded-full w-1/2 RangeForPhone:hidden`}
      ></div>
      <SecondSectionDuplicates
        Title="Pause"
        Icon={<FaPause fill="#FF006B" size={28} />}
        Padding="p-[10px]"
      />
    </div>
  );
};

export default SecondSection;
